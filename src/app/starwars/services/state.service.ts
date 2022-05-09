import { Injectable } from '@angular/core';
import { Movie, Starship } from '../interfaces/starwars.interfaces';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  private _movies: Movie[] = [];
  private _currentMovie!: Movie;
  private _starships: Starship[] = []
  private _currentStarship!: Starship;

  constructor() { }

  get movies(): Movie[]{
    return [...this._movies];
  }

  setMovies(movies: Movie[]){
    this._movies = movies;
  }

  get starships(): Starship[]{
    return [...this._starships];
  }

  setStarships(starships: Starship[]){
    this._starships = starships;
  }

  getCurrentStarship(): Starship{
    return this._currentStarship;
  }

  setCurrentStarship(starship: Starship){
    this._currentStarship = starship;
  }

  setCurrentMovie(movie: Movie){
    this._currentMovie = movie ;
  }

  getCurrentMovie(): Movie{
    return this._currentMovie;
  }

  

  findMovie(id: number): Movie | undefined{
    return this._movies.find( movie => movie.episode_id === id );
  }

  findStarship(model: string): Starship | undefined{
    return this.starships.find( starship => starship.model === model );
  }


}
