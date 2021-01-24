import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsPage implements OnInit {

  constructor(
    private route: ActivatedRoute
  ) { }
  
  search: String = ''

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const query = params.get('movie')
      if (query !== '' && typeof query === 'string') {
        this.search = query
      }
      console.log(`Fetch: ${query}`)
    })
  }

}
