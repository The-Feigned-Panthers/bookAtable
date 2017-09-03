import { Observable } from 'rxjs/Observable';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from './../../core/services/user.service';

@Injectable()
export class UserResolver implements Resolve<User> {
    public savedUser: User;
    constructor(private userServise: UserService, private router: Router) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User>|Promise<User>|User {
        if (this.savedUser) {
            return this.savedUser;
        }
        const id = this.userServise.userId;
        console.log(id);
        return this.userServise.getUser(id)
            .map(user => {
                if (user) {
                    console.log(user);
                    this.savedUser = user;
                    return user;
                }
                this.router.navigate(['home']);
                return null;
            })
            .catch(err => Observable.throw(err));
    }
}
