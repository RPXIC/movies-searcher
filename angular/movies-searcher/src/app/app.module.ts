import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/Header/header.component';
import { SearchFormComponent } from './components/SearchForm/search-form.component';
import { TitleComponent } from './components/Title/title.component';
import { MovieComponent } from './components/Movie/movie.component'

import { HomePage } from './pages/home/home.component';
import { ResultsPage } from './pages/results/results.component';
import { DetailsPage } from './pages/details/details.component';
import { PageNavComponent } from './components/PageNav/page-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MovieComponent,
    SearchFormComponent,
    TitleComponent,
    HomePage,
    ResultsPage,
    DetailsPage,
    PageNavComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
