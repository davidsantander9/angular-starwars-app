import { Component, OnInit } from '@angular/core';
import { StarwarsResponse, Movie } from '../../interfaces/starwars.interfaces';
import { StarwarsService } from '../../services/starwars.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styles: [
  ]
})
export class MovieListComponent implements OnInit {

  movies: Movie[] = [];
  isLoading: boolean = true;

  constructor( 
    private starwarsService: StarwarsService,
    private stateService: StarwarsService,
    ) { }

  ngOnInit(): void {
    this.starwarsService.getMovies()
      .subscribe( (resp: StarwarsResponse<Movie>) => { 
        this.movies = resp.results;
        this.isLoading = false;
      });
  }

}
