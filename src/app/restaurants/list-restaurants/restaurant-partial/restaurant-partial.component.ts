import { Restaurant } from './../../../models/restaurant';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-restaurant-partial',
  templateUrl: './restaurant-partial.component.html',
  styleUrls: ['./restaurant-partial.component.css']
})
export class RestaurantPartialComponent implements OnInit {

  @Input() restaurant: Restaurant;

  ngOnInit() {
  }
}
