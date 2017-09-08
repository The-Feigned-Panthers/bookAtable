import { Restaurant } from './../../models/restaurant';
import { RestaurantsService } from './../../core/services/restaurants.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
 
  private restaurants: Restaurant[];
  private searchString: string;

  constructor(private restaurantsService: RestaurantsService) { }

  getAll() {
    this.restaurantsService.getAll()
      .subscribe(res => {
        this.restaurants = res;
      });
  }

  ngOnInit() {
    this.getAll();
    this.searchString = '';
  }

  setSearchString(searchString: string) {
    this.searchString = searchString;
  }
}
