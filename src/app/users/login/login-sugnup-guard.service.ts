import { UserService } from './../../core/services/user.service';
import { Observable } from 'rxjs/Observable';
import { Router, CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class LoginSignupGuardService implements CanActivate {
    constructor(private userService: UserService, private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (this.userService.isLoggedIn) {
            this.router.navigate(['home']);
            return false;
            }
        return true;
    }
}
