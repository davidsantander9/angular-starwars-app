import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StarwarsRoutingModule } from './starwars-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { CardMovieComponent } from './movies/card-movie/card-movie.component';
import { MovieListComponent } from './movies/movie-list/movie-list.component';
import { SharedModule } from '../shared/shared.module';
import { DetailMovieComponent } from './movies/detail-movie/detail-movie.component';
import { StarshipItemComponent } from './starship/starship-item/starship-item.component';
import { StarshipListComponent } from './starship/starship-list/starship-list.component';

@NgModule({
  declarations: [
    HomeComponent,
    MoviesComponent,
    CardMovieComponent,
    MovieListComponent,
    DetailMovieComponent,
    StarshipItemComponent,
    StarshipListComponent,
  ],
  imports: [
    CommonModule,
    StarwarsRoutingModule,
    SharedModule
  ]
})
export class StarwarsModule { }
