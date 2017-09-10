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
  // search: {
  //   value: string,
  //   property: string
  // };
  searchStr: string;

  constructor(private restaurantsService: RestaurantsService) { }

  ngOnInit() {
    this.restaurantsService.getAll()
    .subscribe(res => {
      this.restaurants = res;
    });
    // this.search = {
    //   value: '',
    //   property: ''
    // };
    this.searchStr = '';
  }

  setSearchString(searchString: string) {
    // this.search.value = searchString;
    this.searchStr = searchString;
  }

  // setProperty(property: string) {
  //   this.search.property = property;
  // }
}
