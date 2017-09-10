import { RestaurantPartialComponent } from './../restaurants/list-restaurants/restaurant-partial/restaurant-partial.component';
import { firebaseConfig } from './../firebase.config';
import { SearchByPipe } from './../pipes/searchBy.pipe';
import { AngularFireDatabase } from 'angularfire2/database';
import { RestaurantsService } from './../core/services/restaurants.service';
import { AngularFireModule } from 'angularfire2';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HomeComponent } from './home.component';
import { Restaurant } from '../models/restaurant';

describe('SearchComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  const restaurant = new Restaurant('Test',
  { city: 'city', area: 'area', street: 'street', number: '15' },
  'Bistro', 14, '09:00-23:00', '09:00-23:00', '+3598888888', 'details', 'owner');

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AngularFireModule.initializeApp(firebaseConfig),],
      declarations: [ HomeComponent, SearchByPipe, RestaurantPartialComponent ],
      providers: [RestaurantsService, AngularFireDatabase]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    component.searchStr = 'te';
    component.restaurants = [restaurant];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
