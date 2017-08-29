import { User } from './../../models/user';
import { UserService } from './../../core/services/user.service';
// import { AngularFireAuth } from 'angularfire2/auth';
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
  private currentUser: User;

  constructor(private service: RestaurantsService, private userServie: UserService, private route: ActivatedRoute) {
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

      // this.userServie.getUser().subscribe(user => {
      //   user
      //     this.currentUser = user;

      // });
  }

  goToOverview() {
    this.isOnOverview = true;
  }

  goToReviews() {
    this.isOnOverview = false;
  }
}
