import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './starwars/pages/home/home.component';

const routes: Routes = [
  {
    path: 'starwars',
    loadChildren: () => import('./starwars/starwars.module').then( m => m.StarwarsModule)
  },
  {
    path: '**',
    redirectTo: 'starwars',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
