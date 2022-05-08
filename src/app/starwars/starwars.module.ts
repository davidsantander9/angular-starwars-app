import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StarwarsRoutingModule } from './starwars-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { MoviesComponent } from './pages/movies/movies.component';


@NgModule({
  declarations: [
    HomeComponent,
    MoviesComponent
  ],
  imports: [
    CommonModule,
    StarwarsRoutingModule
  ]
})
export class StarwarsModule { }
