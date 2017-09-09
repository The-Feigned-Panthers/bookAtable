import { UserService } from './../../../core/services/user.service';
import { Observable } from 'rxjs/Observable';
import { Restaurant } from './../../../models/restaurant';
import { AngularFireDatabase } from 'angularfire2/database';
import { firebaseConfig } from './../../../firebase.config';
import { RestaurantsService } from './../../../core/services/restaurants.service';
import { AngularFireModule } from 'angularfire2';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ReviewsComponent } from './reviews.component';

describe('ReviewsComponent', () => {
  let component: ReviewsComponent;
  let fixture: ComponentFixture<ReviewsComponent>;
  const serviceMock = {
    updateRestaurant(rest) {
    }
  };

  const userServiceMock = {
    getUser(id) {
      return Observable.of({});
    }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AngularFireModule.initializeApp(firebaseConfig)],
      declarations: [ ReviewsComponent ],
      providers: [{provide: RestaurantsService, useValue: serviceMock},
        {provide: UserService, useValue: userServiceMock},
      AngularFireDatabase]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewsComponent);
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
