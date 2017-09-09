import { Restaurant } from './../../models/restaurant';
import { RestaurantsService } from './../../core/services/restaurants.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
 
  restaurants: Restaurant[];
  searchString: string;

  constructor(private restaurantsService: RestaurantsService) { }

  ngOnInit() {
    this.restaurantsService.getAll()
    .subscribe(res => {
      this.restaurants = res;
    });
    this.searchString = '';
  }

  setSearchString(searchString: string) {
    this.searchString = searchString;
  }
}
