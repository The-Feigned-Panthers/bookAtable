/* tslint:disable:no-unused-variable */
import { RestaurantsService } from './../core/services/restaurants.service';
import { BookingComponent } from './../restaurants/details-restaurant/booking/booking.component';
import { ReviewsComponent } from './../restaurants/details-restaurant/reviews/reviews.component';
import { OverviewComponent } from './../restaurants/details-restaurant/overview/overview.component';
import { UserService } from './../core/services/user.service';
import { firebaseConfig } from './../firebase.config';
import { DetailsRestaurantComponent } from './../restaurants/details-restaurant/details-restaurant.component';
import { element } from 'protractor';
import { ToastrService, ToastrModule } from 'ngx-toastr';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, Router } from '@angular/router';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { SearchByPipe } from './searchBy.pipe';
import { Restaurant } from '../models/restaurant';

describe('Pipe: SearchBy', () => {
  let component: DetailsRestaurantComponent;
  let fixture: ComponentFixture<DetailsRestaurantComponent>;
  const restaurant1 = new Restaurant('Test',
    { city: 'city', area: 'area', street: 'street', number: '15' },
    'Bistro', 14, '09:00-23:00', '09:00-23:00', '+3598888888', 'details', 'owner');
  const restaurant2 = new Restaurant('Rest',
    { city: 'city', area: 'area', street: 'street', number: '15' },
    'Bistro', 14, '09:00-23:00', '09:00-23:00', '+3598888888', 'details', 'owner');
  const restaurant3 = new Restaurant('Restaurant',
    { city: 'city', area: 'area', street: 'street', number: '15' },
    'Bistro', 14, '09:00-23:00', '09:00-23:00', '+3598888888', 'details', 'owner');
  const route = { get params() { return Observable.from([{ 'name': 'Test' }]); } };
  const service = {
    getDetails(name) {
      return Observable.from([restaurant1]);
    },
    start() {
      return;
    }
  };
  const mockRouter = {
    navigate: jasmine.createSpy('navigate')
  };

  let pipe = new SearchByPipe();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule,
        AngularFireModule.initializeApp(firebaseConfig),
        ToastrModule.forRoot()],
      declarations: [DetailsRestaurantComponent, OverviewComponent, ReviewsComponent, BookingComponent],
      providers: [UserService, { provide: RestaurantsService, useValue: service }, { provide: Router, useValue: mockRouter },
        AngularFireAuth, { provide: ActivatedRoute, useValue: route }, AngularFireDatabase, ToastrService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsRestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should find restaurant with passed name', () => {
    const result = pipe.transform([restaurant1], ['Test', ['name']]);
    expect(result[0].name).toEqual('Test');
  });

  it('should find specific number of restaurants containing search pattern in their names', () => {
    const result = pipe.transform([restaurant1, restaurant2, restaurant3], ['Rest', ['name']]);
    expect(result.length).toEqual(2);
  });

  it('should not return restaurants with empty search pattern', () => {
    const result = pipe.transform([restaurant1], ['', ['name']]);
    expect(result).toBeUndefined();
  });
});