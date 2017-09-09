import { RestaurantsService } from './../../../core/services/restaurants.service';
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
  bookingIndex: number;
  currentUser;
  minutes: string[] = [
    '00', '10', '20', '30', '40', '50'
  ];

  hours: string[] = [
    '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22'
  ];
  constructor(private userService: UserService, private restaurantsService: RestaurantsService) {
  }

  ngOnInit() {
    this.booking = new Booking({firstName: '', lastName: '', email: ''}, '', '', '', '');
    this.userService.getUser(this.userService.userId).subscribe((dbUser) => {
      this.currentUser = dbUser;
    } );
    this.booking.restaurantName = this.restaurant.name;
    this.restaurantName = this.restaurant.name;
  }

  book(hour: string, minute: string) {
    this.booking.time = hour + ':' + minute;
    this.booking.user.firstName = this.currentUser.firstname;
    this.booking.user.lastName = this.currentUser.lastname;
    this.booking.user.email = this.currentUser.email;
    const id = this.restaurantsService.saveBookingInBookings(this.booking).key;
    this.restaurantsService.saveBookingInRestaurant(this.restaurantName, this.booking);
    this.userService.bookATable(id);
    this.booking = new Booking({firstName: '', lastName: '', email: ''}, '', '', '', '');
  }

}
