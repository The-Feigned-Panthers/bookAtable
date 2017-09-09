import { RestaurantsService } from './restaurants.service';
import { ToastrService, ToastrModule } from 'ngx-toastr';
import { Router } from '@angular/router';
import { firebaseConfig } from './../../firebase.config';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { TestBed, async, inject } from '@angular/core/testing';
import { UserService } from './user.service';

describe('Service: User', () => {
  const mockRouter = {
    navigate: jasmine.createSpy('navigate')
  };
  const mockRestaurantsService = {
    start() {
      return;
    }
  };
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AngularFireModule.initializeApp(firebaseConfig),
      ToastrModule.forRoot()],
      providers: [UserService, { provide: RestaurantsService, useValue: mockRestaurantsService},
        AngularFireDatabase, AngularFireAuth, { provide: Router, useValue: mockRouter },
      ToastrService]
    });
  });

  it('should ...', inject([UserService], (service: UserService) => {
    expect(service).toBeTruthy();
  }));
});