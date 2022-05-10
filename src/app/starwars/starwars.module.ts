import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';


import { StarwarsRoutingModule } from './starwars-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { CardMovieComponent } from './movies/card-movie/card-movie.component';
import { MovieListComponent } from './movies/movie-list/movie-list.component';
import { SharedModule } from '../shared/shared.module';
import { DetailMovieComponent } from './movies/detail-movie/detail-movie.component';
import { StarshipItemComponent } from './starship/starship-item/starship-item.component';
import { StarshipListComponent } from './starship/starship-list/starship-list.component';
import { DetailStarshipComponent } from './starship/detail-starship/detail-starship.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

@NgModule({
  declarations: [
    HomeComponent,
    MoviesComponent,
    CardMovieComponent,
    MovieListComponent,
    DetailMovieComponent,
    StarshipItemComponent,
    StarshipListComponent,
    DetailStarshipComponent,
    NotFoundComponent,
  ],
  imports: [
    CommonModule,
    StarwarsRoutingModule,
    ReactiveFormsModule,
    SharedModule,
  ]
})
export class StarwarsModule { }
