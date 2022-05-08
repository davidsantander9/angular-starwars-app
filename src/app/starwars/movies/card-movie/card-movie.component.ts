import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../../interfaces/starwars.interfaces';

@Component({
  selector: 'app-card-movie',
  templateUrl: './card-movie.component.html',
  styles: [
  ]
})
export class CardMovieComponent implements OnInit {

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

  constructor() { }

  ngOnInit(): void {
  }

}
