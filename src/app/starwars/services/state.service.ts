import { Injectable } from '@angular/core';
import { Movie, Starship } from '../interfaces/starwars.interfaces';

/**
 * Description: 
 *  - Control app state
 */

@Injectable({
  providedIn: 'root'
})
export class StateService {

  /** _currentMovie: movie selected */
  private _currentMovie!: Movie;
  /** _currentStarship: starship selected */
  private _currentStarship!: Starship;

  constructor() { }

  /**
   * get an starship
   * @returns selected starship
   */
  getCurrentStarship(): Starship{
    return this._currentStarship;
  }

  /**
   * select currentStarship
   * @param starship starship info
   */
  setCurrentStarship(starship: Starship){
    this._currentStarship = starship;
  }

  /**
   * select current ifno
   * @param movie movie info
   */
  setCurrentMovie(movie: Movie){
    this._currentMovie = movie ;
  }

  /**
   * get a movie
   * @returns selected movie
   */
  getCurrentMovie(): Movie{
    return this._currentMovie;
  }


}
