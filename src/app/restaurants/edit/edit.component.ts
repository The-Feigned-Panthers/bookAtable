import { Restaurant } from './../../models/restaurant';
import { RestaurantsService } from './../../core/services/restaurants.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  @Input()
  restaurant: Restaurant;

  constructor(private restaurantService: RestaurantsService) { }

  ngOnInit() {
  }

  delete() {
    this.restaurant.visible = false;
    this.restaurantService.updateRestaurant(this.restaurant);
  }
  edit(details, city, area, street, number, type, bill, weekdays, weekends, contact) {
    this.restaurant.details = details;
    this.restaurant.address.city = city;
    this.restaurant.address.area = area;
    this.restaurant.address.street = street;
    this.restaurant.address.number = number;
    this.restaurant.averageBill = bill;
    this.restaurant.openingHoursWeekdays = weekdays;
    this.restaurant.openingHoursWeekends = weekends;
    this.restaurant.contact = contact;
    this.restaurantService.updateRestaurant(this.restaurant);
  }

}
