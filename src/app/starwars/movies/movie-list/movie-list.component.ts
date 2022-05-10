import { Component, OnInit } from '@angular/core';
import { StarwarsResponse, Movie } from '../../interfaces/starwars.interfaces';
import { StarwarsService } from '../../services/starwars.service';

/**
 * Description: 
 *  - Load list movie info from starwars api  
 */

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styles: [
  ]
})
export class MovieListComponent implements OnInit {

  /** movie:  list of movies */
  movies: Movie[] = [];
  /** isLoading: change if data is loading */
  isLoading: boolean = true;
  /** displays information if an error occurs  */
  errorText: string = "";

  /**
   * 
   * @param starwarsService connect with stawars api
   */
  constructor( 
    private starwarsService: StarwarsService,
    ) { }

  /**
   * ngOnInit load info from starwars info
   */  

  ngOnInit(): void {
    this.starwarsService.getMovies()
      .subscribe( 
        (resp: StarwarsResponse<Movie>) => { 
          this.movies = resp.results;
          this.isLoading = false;
        },
        err => {
          this.isLoading = false;
          this.errorText = err.statusText;
        }
        );
  }

}
