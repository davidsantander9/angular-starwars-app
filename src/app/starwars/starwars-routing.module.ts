import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MovieListComponent } from './movies/movie-list/movie-list.component';
import { DetailMovieComponent } from './movies/detail-movie/detail-movie.component';
import { DetailStarshipComponent } from './starship/detail-starship/detail-starship.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';


const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'movies', component: MovieListComponent },
      { path: 'movie/:id', component: DetailMovieComponent},
      { path: 'starship/:id', component: DetailStarshipComponent},
      { path: '404', component: NotFoundComponent},
      
      { path: '**', redirectTo: '404' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StarwarsRoutingModule { }
