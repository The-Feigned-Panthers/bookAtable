import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class UserService {

    user: Observable<firebase.User>;
    constructor(public afAuth: AngularFireAuth) { }
    // set user(user) {
    //     this.user = this.afAuth.authState;
    // }
    // get user() {
    //     return this.user;
    // }
}
