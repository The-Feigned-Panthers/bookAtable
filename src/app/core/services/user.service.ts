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
    reidrectUrl = '/home';
    isLoggedIn = false;
    constructor(public afAuth: AngularFireAuth, private db: AngularFireDatabase, private router: Router) {
        this.user = this.afAuth.authState;
        console.log('From UserService ' + this.isLoggedIn);
     }

    getUser(id) {
        console.log('From getUser ' + this.isLoggedIn);
        // console.log('userID' + this.userId);
        // console.log(id);
        return this.db.object(`users/${id}`);
    }

    login(email, pass) {
        this.afAuth.auth.signInWithEmailAndPassword(email, pass)
        .then((success) => {
          const userId = success.uid;
          this.isLoggedIn = true;
          this.router.navigateByUrl(this.reidrectUrl);
          console.log('From login ' + this.isLoggedIn);
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
            this.userId = undefined;
            this.user = undefined;
            this.isLoggedIn = false;
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


