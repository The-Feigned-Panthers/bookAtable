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

  constructor() { }

  ngOnInit() {
    console.log(this.restaurant.reviews);
  }

}
