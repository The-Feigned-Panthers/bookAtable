import { AppRoutingModule } from './../../app.routing';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { firebaseConfig } from './../../firebase.config';
import { AngularFireModule } from 'angularfire2';
import { FormsModule } from '@angular/forms';
import { ToastrService, ToastrModule } from 'ngx-toastr';
import { Router } from '@angular/router';
import { UserService } from './../../core/services/user.service';
import { RestaurantsService } from './../../core/services/restaurants.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CreateRestaurantComponent } from './create-restaurant.component';

describe('CreateRestaurantComponent', () => {
  let component: CreateRestaurantComponent;
  let fixture: ComponentFixture<CreateRestaurantComponent>;
  const mockRouter = {
    navigate: jasmine.createSpy('navigate')
  };
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ToastrModule.forRoot(),
        FormsModule,
        AngularFireModule.initializeApp(firebaseConfig),
      ],
      declarations: [ CreateRestaurantComponent ],
      providers: [RestaurantsService, UserService, {provide: Router, useValue: mockRouter}, 
        ToastrService, AngularFireDatabase, AngularFireAuth]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateRestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
