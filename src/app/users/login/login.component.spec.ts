import { RestaurantsService } from './../../core/services/restaurants.service';
import { ToastrService, ToastrModule } from 'ngx-toastr';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { firebaseConfig } from './../../firebase.config';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { UserService } from './../../core/services/user.service';
import { AngularFireModule } from 'angularfire2';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
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
      declarations: [ LoginComponent ],
      providers: [UserService, AngularFireAuth, AngularFireDatabase,
        {provide: Router, useValue: mockRouter}, ToastrService,
        {provide: RestaurantsService, useValue: restaurantsServiceMock}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
