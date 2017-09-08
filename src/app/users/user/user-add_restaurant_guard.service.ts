import { UserService } from './../../core/services/user.service';
import { Observable } from 'rxjs/Observable';
import { Router, CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class UserAddRestaurantGuardService implements CanActivate {
    constructor(private userService: UserService, private router: Router) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        return this.userService.getUser(this.userService.userId).map(firebaseUser => {
            if (firebaseUser) {
                if (firebaseUser.usertype === 'owner') {
                    return true;
                }
                this.router.navigate(['home']);
                return false;
            }
        });
    }
}
