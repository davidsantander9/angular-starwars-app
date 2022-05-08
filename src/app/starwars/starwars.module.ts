import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieComponent } from './movies/movie/movie.component';
import { MovieListComponent } from './movies/movie-list/movie-list.component';
import { StarshipComponent } from './starship/starship/starship.component';
import { StarshipListComponent } from './starship/starship-list/starship-list.component';



@NgModule({
  declarations: [
    MovieComponent,
    MovieListComponent,
    StarshipComponent,
    StarshipListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class StarwarsModule { }
