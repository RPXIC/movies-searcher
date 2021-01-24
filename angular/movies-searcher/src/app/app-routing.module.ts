import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './pages/home/home.component'
import { ResultsPage } from './pages/results/results.component'

const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'results/:movie', component: ResultsPage },
  { path: '**', component: HomePage }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
