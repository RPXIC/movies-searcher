import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { API_KEY } from '../../api-key';
import { MovieDetails, Rating } from '../../interfaces'

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})

export class DetailsPage implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private _http: HttpClient,
    private _location: Location
  ) { }

  id: string = ''
  movie: any = {}
  ratings: Rating[] = []

  goBack() {
    this._location.back();
  }

  isEmptyObj(obj:any) {
    return Object.keys(obj).length !== 0;
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id')
      if (id !== '' && typeof id === 'string') {
        this.id = id
      }
    })

    this._http.get<MovieDetails>(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${this.id}`)
      .subscribe(movie => {
        this.movie = movie
        this.ratings = movie.Ratings
      })
  }
}
