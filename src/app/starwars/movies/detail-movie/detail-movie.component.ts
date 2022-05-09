import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { Movie } from '../../interfaces/starwars.interfaces';
import { StarwarsService } from '../../services/starwars.service';

@Component({
  selector: 'app-detail-movie',
  templateUrl: './detail-movie.component.html',
  styles: [
  ]
})
export class DetailMovieComponent implements OnInit {

  movie: Movie = {
    title: '',
    episode_id: 0,
    opening_crawl: '',
    director: '',
    producer: '',
    characters: [],
    planets: [],
    starships: [],
    vehicles: [],
    species: [],
    url: ''
  };

  isLoading: boolean = true;

  constructor(
    private starwarsService: StarwarsService,
    private activatedRoute: ActivatedRoute,
    ) { }

    ngOnInit(): void {
      this.activatedRoute.params
        .pipe(
          switchMap( ({ id }) => this.starwarsService.getMovieById(id) )
        )
        .subscribe( movie => {
          this.movie = movie
          this.isLoading = false;
        } );
    }

}
