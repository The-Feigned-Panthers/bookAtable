import { UserService } from './../../../core/services/user.service';
import { Review } from './../../../models/review';
import { User } from './../../../models/user';
import { RestaurantsService } from './../../../core/services/restaurants.service';
import { Restaurant } from './../../../models/restaurant';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
  @Input()
  restaurant: Restaurant;
  starStyle: Array<boolean>;
  reviewIndex: number;
  currentUser: string;
  canVote: boolean;
  wasVoted: boolean;

  constructor(private restaurantService: RestaurantsService, private userService: UserService) {
  }

  ngOnInit() {
    this.stylizeStars();
    this.currentUser = this.userService.userId;
    if (this.restaurant.voters || this.restaurant.voters.indexOf(this.currentUser) < 0) {
      this.canVote = true;
    } else {
      this.canVote = false;
    }
  }

  stylizeStars() {
    this.starStyle = new Array<boolean>(6);
    for (let i = 1; i <= this.restaurant.rating.average; i++) {
      this.starStyle[i] = true;
    }
  }

  vote(vote) {
    this.wasVoted = true;
    this.restaurant.rating.voters++;
    this.restaurant.rating.sum = +this.restaurant.rating.sum + vote;
    this.restaurant.rating.average = +this.restaurant.rating.sum / +this.restaurant.rating.voters;
    this.restaurantService.updateRestaurant(this.restaurant);
    let index = 0;
    if (this.restaurant.voters) {
      index = this.restaurant.voters.length;
    }
    this.restaurantService.addVoter(this.restaurant.name, this.currentUser, index);
    this.stylizeStars();
  }

  addReview(message: string) {
    if (this.restaurant.reviews) {
      this.reviewIndex = this.restaurant.reviews.length;
    } else {
      this.reviewIndex = 0;
    }
    const user = null;
    const newReview = new Review(user, message);
    this.restaurantService.addReview(this.restaurant.name, newReview, this.reviewIndex);
  }
}
