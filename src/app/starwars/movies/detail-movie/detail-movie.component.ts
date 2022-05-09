import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Movie } from '../../interfaces/starwars.interfaces';
import { StarwarsService } from '../../services/starwars.service';
import { StateService } from '../../services/state.service';


@Component({
  selector: 'app-detail-movie',
  templateUrl: './detail-movie.component.html',
  styleUrls: ['./detail-movie.component.css']
})
export class DetailMovieComponent implements OnInit {

  movie!: Movie | undefined;

  isLoading: boolean = true;

  constructor(
    private starwarsService: StarwarsService,
    private activatedRoute: ActivatedRoute,
    private stateService: StateService,
    private router: Router,
    ) { }

    ngOnInit(): void {
      if (this.stateService.getCurrentMovie()){
        this.movie = this.stateService.getCurrentMovie();
        this.isLoading = false;
      }else{
        this.activatedRoute.params
          .pipe(
            switchMap( ({ id }) => this.starwarsService.getMovieById(id) )
          )
          .subscribe( 
            movie => {
              this.movie = movie
              this.isLoading = false;
            },
            err => {
              this.isLoading = false;
              if (err.status === 404 ){
                this.router.navigate(['/starwars/home']);
              }
            } 
          );
      }
    }
}
