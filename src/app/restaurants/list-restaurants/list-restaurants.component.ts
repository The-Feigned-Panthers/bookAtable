import { Restaurant } from './../../models/restaurant';
import { RestaurantsService } from './../../services/restaurants.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-restaurants',
  templateUrl: './list-restaurants.component.html',
  styleUrls: ['./list-restaurants.component.css']
})
export class ListRestaurantsComponent implements OnInit {

  private restaurants: Restaurant[];

  constructor() {
    this.restaurants = [new Restaurant('Rest', 'Somewhere', 'Italian kitchen', 5, 24, '10-21h', '058485', 'details'),
  new Restaurant('Other', 'place', 'Asian kitchen', 2, 10, '12-19', '6255562', 'efwgrwrwgw')];
  }

  ngOnInit() {
  }

}
