import { Restaurant } from './../../models/restaurant';
import { RestaurantsService } from './../../core/services/restaurants.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-restaurants',
  templateUrl: './list-restaurants.component.html',
  styleUrls: ['./list-restaurants.component.css']
})
export class ListRestaurantsComponent implements OnInit {

  private restaurants: Restaurant[];
  private filterProperty: string;

  constructor(private service: RestaurantsService) {
  }

  getAll() {
    this.service.getAll()
      .subscribe(res => {
        this.restaurants = res;
      });
  }

  ngOnInit() {
    this.getAll();
    this.filterProperty = 'name';
  }

  setProperty(property: string) {
    this.filterProperty = property;
  }

}
