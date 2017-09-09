import { RestaurantsService } from './../../core/services/restaurants.service';
import { UserService } from './../../core/services/user.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { Router } from '@angular/router';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';
import { firebaseConfig } from './../../firebase.config';
import { AngularFireModule } from 'angularfire2';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SignupComponent } from './signup.component';

describe('SignupComponent', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;
  const mockRouter = {
    navigate: jasmine.createSpy('navigate')
  };

  const restaurantsServiceMock = {
    start() {
      return;
    }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AngularFireModule.initializeApp(firebaseConfig), FormsModule, ToastrModule.forRoot()],
      declarations: [ SignupComponent ],
      providers: [UserService, AngularFireAuth, AngularFireDatabase,
        {provide: Router, useValue: mockRouter}, ToastrService,
        {provide: RestaurantsService, useValue: restaurantsServiceMock}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
