import { RestaurantsService } from './../../core/services/restaurants.service';
import { Restaurant } from './../../models/restaurant';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-restaurant',
  templateUrl: './create-restaurant.component.html',
  styleUrls: ['./create-restaurant.component.css']
})
export class CreateRestaurantComponent implements OnInit {

  constructor(private service: RestaurantsService) { }

  ngOnInit() {
  }

  create(name, details, city, area, street, number, type, bill, weekdays, weekends, contact) {
    const address = {
      city: city,
      area: area,
      street: street,
      number: number
    };
    const restaurant = new Restaurant(name, address, type, bill, weekdays, weekends, contact, details);
    this.service.addRestaurant(restaurant);
  }
}
