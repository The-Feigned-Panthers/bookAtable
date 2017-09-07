import { User } from './../../models/user';
import { Router } from '@angular/router';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class UserService {
    user: Observable<firebase.User>;
    userId: string;
    username: string;
    redirectUrl = '/home';
    usertype: string;
    constructor(public afAuth: AngularFireAuth, private db: AngularFireDatabase, private router: Router) {
        this.user = this.afAuth.authState;
        this.user.subscribe(us => {
            if (us) {
                this.userId = us.uid;
                this.username = us.displayName;
            }
        });
    }

    getUser(id) {
        return this.db.object(`users/${id}`);
    }

    login(email, pass) {
        this.afAuth.auth.signInWithEmailAndPassword(email, pass)
            .then((success) => {
                this.usertype = 'Owner';
                this.router.navigateByUrl(this.redirectUrl);
            })
            .catch((error: any) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode);
            });
    }

    logout() {
        this.afAuth.auth.signOut()
            .then((success) => {
                // this.userId = undefined;
                // this.user = undefined;
                // this.username = undefined;
                this.router.navigate(['/home']);
            })
            .catch((error: any) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage);
                console.log(errorCode);
            });
    }
}


