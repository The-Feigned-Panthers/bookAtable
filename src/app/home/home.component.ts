import { Restaurant } from './../models/restaurant';
import { RestaurantsService } from './../core/services/restaurants.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  restaurants: Restaurant[];
  searchValue: string;
  properties: Array<string>;

  constructor(private restaurantsService: RestaurantsService) { }

  ngOnInit() {
    this.restaurantsService.getAll()
      .subscribe(res => {
        this.restaurants = res;
      });

    this.searchValue = '';
    this.properties = ['name'];
  }

  setSearchString(searchString: string) {
    this.searchValue = searchString;
  }

  addProperties(property: string) {
    if (this.properties.includes(property)) {
      let index = this.properties.indexOf(property);
      this.properties.splice(index, 1);
    } else {
      this.properties.push(property);
    }
  }
}
