import { User } from './../../models/user';
import { UserService } from './../../core/services/user.service';
import { Observable } from 'rxjs/Observable';
import { Router, CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Injectable, Inject } from '@angular/core';

@Injectable()
export class UserGuardService implements CanActivate {
    userService: UserService;
    constructor( @Inject(UserService) userService: UserService, private router: Router) {
        this.userService = userService;
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const username = route.params['username'];
        if (this.userService.isLoggedIn) {
            console.log("has logged user");
            if (username === this.userService.username) {
                return true;
            }
            this.router.navigate(['home']);
            return false;
        }
        this.router.navigate(['login']);
        return false;
    }
}
