import { UserService } from './../../../core/services/user.service';
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
  hour: string;
  minute: string;

  minutes: string[] = [
    '00', '10', '20', '30', '40', '50'
  ];

  hours: string[] = [
    '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22'
  ];
  constructor(private UserService: UserService) {
   }

  ngOnInit() {
    this.booking = new Booking('', '', '', '', '');
    this.booking.time = this.hour + ':' + this.minute;
    this.booking.userId = this.UserService.userId;
    this.booking.restaurantName = this.restaurant.name;
  }

}
