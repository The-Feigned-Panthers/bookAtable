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
  constructor(private service: RestaurantsService) { }

  ngOnInit() {
    this.stylizeStars();
  }

  stylizeStars() {
    this.starStyle = new Array<boolean>(6);
    for (let i = 1; i <= this.restaurant.rating.average; i++) {
      this.starStyle[i] = true;
    }
  }

  vote(vote) {
    this.restaurant.rating.voters++;
    this.restaurant.rating.sum = +this.restaurant.rating.sum + vote;
    this.restaurant.rating.average = +this.restaurant.rating.sum / +this.restaurant.rating.voters;
    this.service.updateRestaurant(this.restaurant);
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
    this.service.addReview(this.restaurant.name, newReview, this.reviewIndex);
  }
}
