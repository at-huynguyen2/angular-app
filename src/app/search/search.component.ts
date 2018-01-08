import { Component, OnInit } from '@angular/core';
import { SearchService } from './search.service';
import { Subject } from 'rxjs/Subject';
import { Product } from '../share/service/product';
import _ from 'lodash';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [SearchService]  //  providers - list of providers available to this component and its children
})
export class SearchComponent implements OnInit {
  products: Product[];
  // searchTerm$ = new Subject<string>();
  searchSubject = new Subject<string>();

  constructor(private searchService: SearchService) {
    
  }
  ngOnInit() {
    this.searchService.search(this.searchSubject)
    .subscribe(products => {
      console.log('products: ', typeof(this.products));
      // this.products = products;
    });
  }
}
