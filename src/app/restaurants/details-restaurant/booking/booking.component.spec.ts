import { Observable } from 'rxjs/Observable';
import { Restaurant } from './../../../models/restaurant';
import { Booking } from './../../../models/booking';
import { RestaurantsService } from './../../../core/services/restaurants.service';
import { firebaseConfig } from './../../../firebase.config';
import { ToastrService, ToastrModule } from 'ngx-toastr';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { UserService } from './../../../core/services/user.service';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BookingComponent } from './booking.component';

describe('BookingComponent', () => {
  let component: BookingComponent;
  let fixture: ComponentFixture<BookingComponent>;
  const mockRouter = {
    navigate: jasmine.createSpy('navigate')
  };

  const restServiceMock = {
    saveBookingInRestaurant(name: string, id: string) {
      return;
    },
    saveBookingInBookings(booking: Booking) {
      return;
    }
  };

  const user = {
    username: 'test'
  };

  const usersServiceMock = {
    bookATable(id) {
      return;
    },
    getUser() {
      return Observable.of(user);
    }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, AngularFireModule.initializeApp(firebaseConfig),
        ToastrModule.forRoot()],
      declarations: [BookingComponent],
      providers: [{ provide: UserService, useValue: usersServiceMock }, { provide: RestaurantsService, useValue: restServiceMock },
        AngularFireDatabase, AngularFireAuth, { provide: Router, useValue: mockRouter },
        ToastrService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingComponent);
    component = fixture.componentInstance;
    component.restaurant = new Restaurant('Test',
      { city: 'city', area: 'area', street: 'street', number: '15' },
      'Bistro', 14, '09:00-23:00', '09:00-23:00', '+3598888888', 'details', 'owner');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
