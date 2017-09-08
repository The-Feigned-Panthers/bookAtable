import { RestaurantsService } from './../../core/services/restaurants.service';
import { Restaurant } from './../../models/restaurant';
import { User } from './../../models/user';
import { FirebaseObjectObservable } from 'angularfire2/database';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../core/services/user.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  currentUser: User;
  userRestaurants: Restaurant[];
  constructor(private userService: UserService, private router: Router, private route: ActivatedRoute,
  private restaurantService: RestaurantsService) {
    this.userRestaurants = [];
  }

  ngOnInit() {
    // this.route.snapshot.data
    //   .subscribe((data: {user: User}) => {
    //     console.log(data.user);
    //     this.currentUser = data.user;
    //   });

  //   this.userService.afAuth.authState.subscribe(user => {
  //     if (user) {
  //       const id: string = user.uid;
  //       this.userService.getUser(id).map(us => {
  //         this.currentUser = us;
  //     }).subscribe(tr => this.getUserRestaurants());
  //   }
  // });
  this.currentUser = this.userService.appUser;
  if (!this.currentUser) {
    setTimeout(this.getUserRestaurants(), 1000);
  } else {
    this.getUserRestaurants();
  }
}

getUserRestaurants() {
  if (this.currentUser.restaurants) {
    const names = Object.keys(this.currentUser.restaurants);
    names.forEach((name) => {
      this.userRestaurants.push(this.restaurantService.restaurants.find((res) => res.name === name));
    });
  } else { return; }
}

getUserBookings() {
  
}
}
