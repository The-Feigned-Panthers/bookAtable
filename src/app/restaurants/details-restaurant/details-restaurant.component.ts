import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { Restaurant } from './../../models/restaurant';
import { RestaurantsService } from './../../core/services/restaurants.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details-restaurant',
  templateUrl: './details-restaurant.component.html',
  styleUrls: ['./details-restaurant.component.css']
})
export class DetailsRestaurantComponent implements OnInit {
  private restaurant: Restaurant;
  private name: string;
  private isOnOverview: boolean;

  constructor(private service: RestaurantsService, private route: ActivatedRoute) {
    this.isOnOverview = true;
   }

  ngOnInit() {
    this.route.params
      .map(params => params['name'])
      .do(name => this.name = name)
      .flatMap(name => {
        return this.service.getDetails(name);
      })
      .subscribe(res => this.restaurant = res);
  }

  goToOverview() {
    this.isOnOverview = true;
  }

  goToReviews() {
    this.isOnOverview = false;
  }
}
