import { RestaurantsService } from '../core/services/restaurants.service';
import { Observable } from 'rxjs/Observable';
import { Restaurant } from './../models/restaurant';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class RestaurantsListResolver implements Resolve<any> {
    constructor(private service: RestaurantsService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Restaurant[]> {
        console.log('in resolver');
        return this.service.getAll().map((res, i) => {
            return res;
        });
    }
}