import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { API_KEY } from '../../api-key'
import { Movie, Search } from '../../interfaces'

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsPage implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private _http: HttpClient
  ) { }
  
  search: String = ''
  page: string = '1'
  movies: Movie[] = []
  results: string = ''
  response: string = ''

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const query = params.get('movie')
      if (query !== '' && typeof query === 'string') {
        this.search = query
      }
    })

    this._http.get<Search>(`https://www.omdbapi.com/?apikey=${API_KEY}&page=${this.page}&s=${this.search}`)
      .subscribe(movies => {
        const { Search, totalResults, Response } = movies
        this.movies = Search
        this.results = totalResults
        this.response = Response
      })
  }

}
