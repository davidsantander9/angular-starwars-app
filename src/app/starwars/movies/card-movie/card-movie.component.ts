import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from '../../interfaces/starwars.interfaces';
import { StateService } from '../../services/state.service';

@Component({
  selector: 'app-card-movie',
  templateUrl: './card-movie.component.html',
  styles: [
  ]
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

  constructor(
    private stateService: StateService,
    private router: Router
    ) { }

  goToDetailMovie(): void {
    this.stateService.setCurrentMovie(this.movie);
    this.router.navigate(['/starwars/movie', this.movie.episode_id]);
}

}

