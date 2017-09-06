import { Restaurant } from './../../../models/restaurant';
import { Booking } from './../../../models/booking';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  @Input()
  restaurant: Restaurant;
  booking: Booking;
  userId: string;
  restaurantName: string;
  hours: string;
  minutes: string;
  constructor() { }

  ngOnInit() {
    this.booking = new Booking('', '', '', '', '');
    this.booking.time = this.hours + ':' + this.minutes;
    this.booking.userId = '';
    this.booking.restaurantName = this.restaurant.name;
    // const minutes = [
    //   '00', '10', '20', '30', '40', '50'
    // ];
  }

}
