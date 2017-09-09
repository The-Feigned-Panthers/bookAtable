import { firebaseConfig } from './../../firebase.config';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { TestBed, async, inject } from '@angular/core/testing';
import { SearchService } from './search.service';

describe('Service: Search', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AngularFireModule.initializeApp(firebaseConfig)],
      providers: [SearchService, AngularFireDatabase]
    });
  });

  it('should ...', inject([SearchService], (service: SearchService) => {
    expect(service).toBeTruthy();
  }));
});