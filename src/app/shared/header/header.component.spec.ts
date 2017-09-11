import { Observable } from 'rxjs/Observable';
import { ToastrService } from 'ngx-toastr';
import { AngularFireAuth } from 'angularfire2/auth';
import { UserService } from './../../core/services/user.service';
import { RouterTestingModule } from '@angular/router/testing';
/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HeaderComponent } from './header.component';

describe('Header.component.tsComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  const mockedService={
    get user() {
      return Observable.of({});
    }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[RouterTestingModule],
      declarations: [ HeaderComponent ],
      providers:[{provide:UserService,useValue:mockedService}, {provide:ToastrService,useValue:mockedService}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
