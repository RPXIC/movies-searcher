import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'page-nav',
  templateUrl: './page-nav.component.html',
  styleUrls: ['./page-nav.component.css']
})
export class PageNavComponent implements OnInit, OnChanges {
  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }
  
  @Input() results: any

  page: number = 1
  query: any = ''
  totalPages: number = 1
  newPage: number = 1
  backDisabled: boolean = false
  nextDisabled: boolean = false
  
  ngOnInit():void {
    this.route.paramMap.subscribe(params => {
      this.page = Number(params.get('page'))
      this.query = params.get('movie')
      this.checkButtons()
    })
  }

  ngOnChanges(results:any){
    this.totalPages = Math.ceil(this.results / 10)
  }
  
  back(){
    this.newPage = this.page-1
    this.router.navigate([`/results/${this.newPage}/${this.query}`])
  }

  next(){
    this.newPage = this.page+1
    this.router.navigate([`/results/${this.newPage}/${this.query}`])
  }

  checkButtons(){
    if (!this.backDisabled && this.page === 1) this.backDisabled = true
    if (this.backDisabled && this.page > 1) this.backDisabled = false
    if (!this.nextDisabled && this.page === this.totalPages) this.nextDisabled = true
    if (this.nextDisabled && this.page < this.totalPages) this.nextDisabled = false
  }
}
