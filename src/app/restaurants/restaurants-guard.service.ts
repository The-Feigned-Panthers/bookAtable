import { RestaurantsService } from './../core/services/restaurants.service';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable()
export class RestaurantsGuardService implements CanActivate {
    constructor(private restaurantService: RestaurantsService, private router: Router) { }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const name = route.params['name'];
        return this.restaurantService.getDetails(name).map((restaurant) => {
            if (!!restaurant.name) {
                return true;
            }
            this.router.navigate(['home']);
            return false;
        });
    }
}
