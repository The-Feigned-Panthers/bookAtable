/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Home.component.tsComponent } from './home.component.ts.component';

describe('Home.component.tsComponent', () => {
  let component: Home.component.tsComponent;
  let fixture: ComponentFixture<Home.component.tsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Home.component.tsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Home.component.tsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
