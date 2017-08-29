/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RestaurantsGuardService } from './restaurants-guard.service';

describe('Service: RestaurantsGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RestaurantsGuardService]
    });
  });

  it('should ...', inject([RestaurantsGuardService], (service: RestaurantsGuardService) => {
    expect(service).toBeTruthy();
  }));
});