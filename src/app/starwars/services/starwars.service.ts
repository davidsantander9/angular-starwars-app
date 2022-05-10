import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Movie, Starship, StarwarsResponse } from '../interfaces/starwars.interfaces';



/**
 * Description: 
 *  - Provides movies and starship info from starwars api
 */
@Injectable({
  providedIn: 'root'
})
export class StarwarsService {
  /** baseUrl: base url starwars api  */
  private baseUrl: string = environment.baseStarWarsUrl;
  
  /**
   * 
   * @param http Injectable class, with methods to perform HTTP request
   */
  constructor(private http: HttpClient ) { }

  /**
   * get a starship by url
   * @param url link to starhip
   * @returns starship observable
   */
  getStarshipByUrl( url: string ): Observable<Starship> {
    return this.http.get<Starship>(url);
  }

  /**
   * get a starhip by id
   * @param id starship identifier
   * @returns starship observable
   */
  getStarshipById( id: string ): Observable<Starship> {
    return this.http.get<Starship>(`${ this.baseUrl }/starships/${id}`);
  }

  /**
   * get movie by id
   * @param id movie identifier
   * @returns movie observable
   */
  getMovieById( id: string ): Observable<Movie> {
    console.log(`${ this.baseUrl }/films/${id}`);
    return this.http.get<Movie>(`${ this.baseUrl }/films/${id}`);
  }

  /**
   * get movie list
   * @returns movies observable
   */
  getMovies(): Observable<StarwarsResponse<Movie>> {
    return this.http.get<StarwarsResponse<Movie>>(`${ this.baseUrl }/films`);
  }

}
 