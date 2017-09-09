import { firebaseConfig } from './../../firebase.config';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { RestaurantsService } from './restaurants.service';
import { TestBed, async, inject } from '@angular/core/testing';

describe('Service: Restaurants', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AngularFireModule.initializeApp(firebaseConfig)],
      providers: [RestaurantsService, AngularFireDatabase]
    });
  });

  it('should ...', inject([RestaurantsService, AngularFireDatabase], (service: RestaurantsService) => {
    expect(service).toBeTruthy();
  }));
});