import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from '../../interfaces/starwars.interfaces';
import { StateService } from '../../services/state.service';

/**
 * Description: 
 *  - Show title movie, episode number, opening_crawl
 *  - link to DetailMovieComponent
 */

@Component({
  selector: 'app-card-movie',
  templateUrl: './card-movie.component.html',
})
export class CardMovieComponent {

  @Input() movie: Movie = {
    title: '',
    episode_id: 0,
    opening_crawl: '',
    director: '',
    producer: '',
    release_date: undefined,
    characters: [],
    planets: [],
    starships: [],
    vehicles: [],
    species: [],
    created: undefined,
    edited: undefined,
    url: ''
  }
  
  /**
   * @param stateService control state Movies
   * @param router config routes
   */

  constructor(
    private stateService: StateService,
    private router: Router
    ) { }

  /**
   * Description: 
   *  - go to DetailMovieComponent 
   *  - set current Movie
   */  
  goToDetailMovie(): void {
    this.stateService.setCurrentMovie(this.movie);
    this.router.navigate(['/starwars/movie', this.movie.episode_id]);
}

}

