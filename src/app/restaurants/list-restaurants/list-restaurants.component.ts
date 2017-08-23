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

  constructor(private service: RestaurantsService) {
    this.getAll();
  }

  getLatest() {
    this.service.getAll().subscribe(res => {
      this.restaurants = res.sort((a, b) => {
          return a.addedAt > b.addedAt ? -1 : a.addedAt < b.addedAt ? 1 : 0;
        });
    });
  }

  getMostPopular() {
    this.service.getAll().subscribe(res => {
      this.restaurants = res.sort((a, b) => b.rating - a.rating).slice(0, 4);
    });
  }

  getAll() {
    this.service.getAll().subscribe(res => {
        this.restaurants = res;
    });
  }

  ngOnInit() {
  }

}
