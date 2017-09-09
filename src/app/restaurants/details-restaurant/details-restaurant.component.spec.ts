import { element } from 'protractor';
import { ToastrService, ToastrModule } from 'ngx-toastr';
import { AngularFireAuth } from 'angularfire2/auth';
import { UserService } from './../../core/services/user.service';
import { Restaurant } from './../../models/restaurant';
import { firebaseConfig } from './../../firebase.config';
import { AngularFireDatabase } from 'angularfire2/database';
import { FormsModule } from '@angular/forms';
import { BookingComponent } from './booking/booking.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { OverviewComponent } from './overview/overview.component';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, Router } from '@angular/router';
import { RestaurantsService } from './../../core/services/restaurants.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { DetailsRestaurantComponent } from './details-restaurant.component';

describe('DetailsRestaurantComponent', () => {
  let component: DetailsRestaurantComponent;
  let fixture: ComponentFixture<DetailsRestaurantComponent>;
  const restaurant = new Restaurant('Test',
    { city: 'city', area: 'area', street: 'street', number: '15' },
    'Bistro', 14, '09:00-23:00', '09:00-23:00', '+3598888888', 'details', 'owner');
  const route = { get params() { return Observable.from([{ 'name': 'Test' }]); } };
  const service = {
    getDetails(name) {
      return Observable.from([restaurant]);
    },
    start() {
      return;
    }
  };
  const mockRouter = {
    navigate: jasmine.createSpy('navigate')
  };

  let debugElement: DebugElement;
  let element: HTMLElement;

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

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set restaurant name correctly', () => {
    component.ngOnInit();
    expect(component.name).toEqual('Test');
  });

  it('should set restaurant property of component', () => {
    component.ngOnInit();
    expect(component.restaurant).toEqual(restaurant);
  });

  it('should set h1 correctly', () => {
    debugElement = fixture.debugElement.query(By.css('h1'));
    element = debugElement.nativeElement;
    expect(element.textContent).toContain(component.restaurant.name);
  });

  it('should set img correctly', () => {
    debugElement = fixture.debugElement.query(By.css('img'));
    element = debugElement.nativeElement;
    expect(element.getAttribute('src')).toContain(component.restaurant.photo);
  });

  it('should show tabs', () => {
    debugElement = fixture.debugElement.query(By.css('#myTab'));
    element = debugElement.nativeElement;
    expect(element).toBeDefined();
    expect(element.children.length).toEqual(4);
  });

  it('tabs element should contain overview tab', () => {
    debugElement = fixture.debugElement.query(By.css('#overview'));
    element = debugElement.nativeElement;
    expect(element).toBeDefined();
  });

  it('tabs element should contain reviews tab', () => {
    debugElement = fixture.debugElement.query(By.css('#reviews'));
    element = debugElement.nativeElement;
    expect(element).toBeDefined();
  });

  it('tabs element should contain bookings tab', () => {
    debugElement = fixture.debugElement.query(By.css('#booking'));
    element = debugElement.nativeElement;
    expect(element).toBeDefined();
  });
});
