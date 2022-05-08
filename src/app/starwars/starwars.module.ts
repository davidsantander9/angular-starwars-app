import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StarwarsRoutingModule } from './starwars-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { CardMovieComponent } from './movies/card-movie/card-movie.component';
import { MovieListComponent } from './movies/movie-list/movie-list.component';

@NgModule({
  declarations: [
    HomeComponent,
    MoviesComponent,
    CardMovieComponent,
    MovieListComponent
  ],
  imports: [
    CommonModule,
    StarwarsRoutingModule
  ]
})
export class StarwarsModule { }
