import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators'
import { Router } from '@angular/router';

@Component({
  selector: 'searchform',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.search.valueChanges
      .pipe(debounceTime(300))
      .subscribe(value => this.searchEmitter.emit(value))
  }

  searchMovie(e: Event) {
    e.preventDefault();
    if (this.search.value.trim() !== '') {
      this.router.navigate(['/results', this.search.value])
    }
  }
  
  search = new FormControl('')

  @Output('search') searchEmitter = new EventEmitter<string>()
}
