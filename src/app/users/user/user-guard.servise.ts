import { UserService } from './../../core/services/user.service';
import { Observable } from 'rxjs/Observable';
import { Router, CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class UserGuardService implements CanActivate {
    constructor(private userService: UserService, private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const username = route.params['username'];
        if (this.userService.isLoggedIn) {
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
