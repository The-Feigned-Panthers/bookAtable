import { Booking } from './../../models/booking';
import { RestaurantsService } from './../../core/services/restaurants.service';
import { Restaurant } from './../../models/restaurant';
import { User } from './../../models/user';
import { FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2/database';
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
  ownerRestaurants: Restaurant[];
  userBookings: Booking[];
  constructor(private userService: UserService, private router: Router, private route: ActivatedRoute,
  private restaurantService: RestaurantsService) {
    this.ownerRestaurants = [];
    this.currentUser = this.userService.appUser;
    console.log('init')
    console.log(this.userService.appUser)
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
  //     }).subscribe(tr => this.getOwnerRestaurants());
  //   }
  // });
    if (!this.currentUser) {
      setTimeout(() => {
        console.log('waiting');
        if (this.currentUser.usertype === 'owner') {
          this.getOwnerRestaurants();
        }
      }, 1000);
    } else {
      if (this.currentUser.usertype === 'owner') {
        this.getOwnerRestaurants();
      }
      this.getUserBookings();
    }
  }

  getOwnerRestaurants() {
    if (this.currentUser.restaurants) {
      const names = Object.keys(this.currentUser.restaurants);
      names.forEach((name) => {
        this.ownerRestaurants.push(this.restaurantService.restaurants.find((res) => res.name === name));
        // console.log(this.ownerRestaurants);
      });
    } else { return; }
  }

  getUserBookings() {
    if (this.currentUser.bookings) {
      this.userService.getUserbookings()
      .subscribe(bookings => {
        if (bookings) {
          this.userBookings = bookings;
        }
      });
    }
  }
}
