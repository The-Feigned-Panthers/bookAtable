import { firebaseConfig } from './../firebase.config';
import { AngularFireDatabase } from 'angularfire2/database';
import { ContactsService } from './../core/services/contacts.service';
import { CoreModule } from './../core/core.module';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ContactsComponent } from './contacts.component';

describe('ContactsComponent', () => {
  let component: ContactsComponent;
  let fixture: ComponentFixture<ContactsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule,
        CoreModule.forRoot(),
        AngularFireModule.initializeApp(firebaseConfig)],
      declarations: [ContactsComponent],
      providers: [ContactsService, AngularFireDatabase]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
