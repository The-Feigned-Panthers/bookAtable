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
  constructor() { }

  ngOnInit() {
    this.starStyle = new Array<boolean>(6);
    for (let i = 1; i <= this.restaurant.rating; i++) {
      this.starStyle[i] = true;
    }
  }

}
