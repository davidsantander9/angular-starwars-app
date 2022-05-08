import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Movie, Starship, StarwarsResponse } from '../interfaces/starwars.interfaces';

@Injectable({
  providedIn: 'root'
})
export class StarwarsService {
  private baseUrl: string = environment.baseStarWarsUrl;
  
  constructor(private http: HttpClient ) { }

  getStarshipByUrl( url: string ): Observable<Starship> {
    return this.http.get<Starship>(url);
  }

  getStarshipById( id: string ): Observable<Starship> {
    return this.http.get<Starship>(`${ this.baseUrl }/starships/${id}`);
  }

  getMovieById( id: string ): Observable<Movie> {
    return this.http.get<Movie>(`${ this.baseUrl }/films/${id}`);
  }

  getMovies(): Observable<Movie> {
    return this.http.get<Movie>(`${ this.baseUrl }/films`);
  }

}
 