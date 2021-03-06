import { Restaurant } from './../../models/restaurant';
import { RestaurantsService } from './../../core/services/restaurants.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-restaurants',
  templateUrl: './list-restaurants.component.html',
  styleUrls: ['./list-restaurants.component.css']
})
export class ListRestaurantsComponent implements OnInit {

  restaurants: Restaurant[];
  filterProperty: string;

  constructor(private service: RestaurantsService) {
    if (!this.service.restaurants) {
      setTimeout(() => {
        this.restaurants = this.service.restaurants;
      }, 1000);
    } else {
      this.restaurants = this.service.restaurants;
    }
  }

  getAll() {
    this.service.getAll()
      .subscribe(res => {
        // filter does not work :(
        this.restaurants = res.filter(rests => rests.visible === true);
      });
  }

  ngOnInit() {
    this.filterProperty = 'name';
  }

  setProperty(property: string) {
    this.filterProperty = property;
  }

}
