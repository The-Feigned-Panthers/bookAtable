import { firebaseConfig } from './../../firebase.config';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { TestBed, async, inject } from '@angular/core/testing';
import { ContactsService } from './contacts.service';

describe('Service: Contacts', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AngularFireModule.initializeApp(firebaseConfig)],
      providers: [ContactsService, AngularFireDatabase]
    });
  });

  it('should ...', inject([ContactsService], (service: ContactsService) => {
    expect(service).toBeTruthy();
  }));
});