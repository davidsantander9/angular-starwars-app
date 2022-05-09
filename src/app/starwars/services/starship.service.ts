import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Movie, myStarship, Starship, StarwarsResponse } from '../interfaces/starwars.interfaces';


@Injectable({
  providedIn: 'root'
})
export class StarshipService {
  private baseUrl: string = environment.baseHerokuStarWarsUrl;
  
  constructor(private http: HttpClient ) { }

  getStarshipByIdApi( id: string ): Observable<myStarship[]> {
    return this.http.get<myStarship[]>(`${ this.baseUrl }/starships/?id_api=${id}`);
  }

  createStarship(starship: Starship): Observable<myStarship>{
    return this.http.post<myStarship>(`${ this.baseUrl }/starships/`, starship);
  }

  updateStarship(starship: Starship, id: number): Observable<myStarship>{
    return this.http.put<myStarship>(`${ this.baseUrl }/starships/${id}/`, starship);
  }

  deleteStarship(id: number): Observable<any>{
    return this.http.delete<any>(`${ this.baseUrl }/starships/${id}/`);
  }

}
