import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './pages/home/home.component'
import { ResultsPage } from './pages/results/results.component'
import { DetailsPage } from './pages/details/details.component';

const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'results/:page/:movie', component: ResultsPage },
  { path: 'details/:id', component: DetailsPage },
  { path: '**', component: HomePage },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
