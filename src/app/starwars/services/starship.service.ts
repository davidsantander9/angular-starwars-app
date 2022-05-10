import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Movie, myStarship, Starship, StarwarsResponse } from '../interfaces/starwars.interfaces';


/**
 * Description: 
 *  - Provides CRUD starship methods
 */

@Injectable({
  providedIn: 'root'
})
export class StarshipService {
  /** baseUrl: base url starhip api  */
  private baseUrl: string = environment.baseHerokuStarWarsUrl;
  
  /**
   * 
   * @param http Injectable class, with methods to perform HTTP request
   */
  constructor(private http: HttpClient ) { }

  /**
   * get an starhip
   * @param id starship identifier
   * @returns Observable of starship list
   */
  getStarshipByIdApi( id: string ): Observable<myStarship[]> {
    return this.http.get<myStarship[]>(`${ this.baseUrl }/starships/?id_api=${id}`);
  }

  /**
   * create starship
   * @param id starship identifier
   * @returns starship observable
   */
  createStarship(starship: Starship): Observable<myStarship>{
    return this.http.post<myStarship>(`${ this.baseUrl }/starships/`, starship);
  }

  /**
   * update starship
   * @param starship starhip info
   * @param id starship identifier
   * @returns starship observable
   */
  updateStarship(starship: Starship, id: number): Observable<myStarship>{
    return this.http.put<myStarship>(`${ this.baseUrl }/starships/${id}/`, starship);
  }

  /**
   * delete starhip
   * @param id starship identifier
   * @returns Observable
   */
  deleteStarship(id: number): Observable<any>{
    return this.http.delete<any>(`${ this.baseUrl }/starships/${id}/`);
  }

}
