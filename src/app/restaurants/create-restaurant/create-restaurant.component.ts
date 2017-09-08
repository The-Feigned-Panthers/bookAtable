import { ToastrService } from 'ngx-toastr';
import { User } from './../../models/user';
import { UserService } from './../../core/services/user.service';
import { Router } from '@angular/router';
import { RestaurantsService } from './../../core/services/restaurants.service';
import { Restaurant } from './../../models/restaurant';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-restaurant',
  templateUrl: './create-restaurant.component.html',
  styleUrls: ['./create-restaurant.component.css']
})
export class CreateRestaurantComponent implements OnInit {
  currentUser: User;
  restaurant: Restaurant;
  constructor(private restaurantService: RestaurantsService, private userService: UserService, private router: Router,
    private toastr: ToastrService) {
    this.restaurant = new Restaurant('', {}, '', '', '', '', '', '', {});
  }

  ngOnInit() {
    this.userService.afAuth.authState.subscribe(user => {
      if (user) {
          this.currentUser = user.uid;
      }
    });
  }

  create() {
    this.restaurant.owner = this.currentUser;
    this.restaurantService.updateRestaurant(this.restaurant);
    this.router.navigateByUrl(`/restaurants/${this.restaurant.name}`)
      .then(res => this.toastr.success('New restaurant created'));
  }
}
