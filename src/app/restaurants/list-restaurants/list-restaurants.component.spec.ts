import { AngularFireDatabase } from 'angularfire2/database';
import { RestaurantPartialComponent } from './restaurant-partial/restaurant-partial.component';
import { SortByPipe } from './../../pipes/sort-by.pipe';
import { Restaurant } from './../../models/restaurant';
import { RestaurantsService } from './../../core/services/restaurants.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { ListRestaurantsComponent } from './list-restaurants.component';
import { FirebaseApp, AngularFireModule } from 'angularfire2';
import { firebaseConfig } from '../../firebase.config';


describe('ListRestaurantsComponent', () => {
  let component: ListRestaurantsComponent;
  let fixture: ComponentFixture<ListRestaurantsComponent>;
  const restaurant = new Restaurant('Test',
  { city: 'city', area: 'area', street: 'street', number: '15' },
  'Bistro', 14, '09:00-23:00', '09:00-23:00', '+3598888888', 'details', 'owner');

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AngularFireModule.initializeApp(firebaseConfig)],
      declarations: [ ListRestaurantsComponent, RestaurantPartialComponent, SortByPipe ],
      providers: [RestaurantsService, AngularFireDatabase]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListRestaurantsComponent);
    component = fixture.componentInstance;
    component.restaurants = [restaurant];
        fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
