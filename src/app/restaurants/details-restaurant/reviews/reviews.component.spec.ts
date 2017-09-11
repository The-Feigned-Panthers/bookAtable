import { User } from './../../../models/user';
import { Review } from './../../../models/review';
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
  let debugElement: DebugElement;
  let element: HTMLElement;

  const restaurant = new Restaurant('Test',
  { city: 'city', area: 'area', street: 'street', number: '15' },
  'Bistro', 14, '09:00-23:00', '09:00-23:00', '+3598888888', 'details', 'owner');

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
    component.restaurant = restaurant;
    component.restaurant.reviews.push(new Review('user', 'Hi!'));
    fixture.detectChanges();
  });

  afterEach(() => {
    component.restaurant.reviews = [];
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render average rating correctly', () => {
    debugElement = fixture.debugElement.query(By.css('h2'));
    element = debugElement.nativeElement;
    expect(element).toBeDefined();
    expect(element.textContent).toContain(restaurant.rating.average.toPrecision(3));
  });

  it('should render all reviews of restaurant correctly', () => {
    debugElement = fixture.debugElement.query(By.css('.review-info'));
    element = debugElement.nativeElement;

    expect(element.classList.length).toEqual(restaurant.reviews.length);
  });

  it('should render username of review correctly', () => {
    debugElement = fixture.debugElement.query(By.css('.review-info'));
    element = debugElement.nativeElement;
    expect(element).toBeDefined();
    expect(element.textContent).toContain(restaurant.reviews[0].user);
  });

  it('should render date of review correctly', () => {
    debugElement = fixture.debugElement.query(By.css('.review-info'));
    element = debugElement.nativeElement;
    expect(element).toBeDefined();
    expect(element.textContent).toContain(restaurant.reviews[0].date);
  });

  it('should render message of review correctly', () => {
    debugElement = fixture.debugElement.query(By.css('.review-message'));
    element = debugElement.nativeElement;
    expect(element).toBeDefined();
    expect(element.textContent).toContain(restaurant.reviews[0].message);
  });
});
