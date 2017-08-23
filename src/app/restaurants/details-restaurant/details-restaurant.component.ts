import { Restaurant } from './../../models/restaurant';
import { RestaurantsService } from './../../services/restaurants.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details-restaurant',
  templateUrl: './details-restaurant.component.html',
  styleUrls: ['./details-restaurant.component.css']
})
export class DetailsRestaurantComponent implements OnInit {
  private restaurant: Restaurant;
  constructor(private service: RestaurantsService) {
    this.service.getDetails('Don Domat').subscribe(res => {
      this.restaurant = res;
    });
   }

  ngOnInit() {
  }

}
