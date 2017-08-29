import { User } from './../../models/user';
import { Router } from '@angular/router';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class UserService {

    user: Observable<firebase.User>;
    public id: string;
    constructor(public afAuth: AngularFireAuth, private db: AngularFireDatabase, private router: Router) {
        this.user = this.afAuth.authState;
     }

    getUser() {
        return this.db.list(`users`, {
            query: {
              orderByChild: 'id',
              equalTo: this.id,
        }});
    }

    login(email, pass) {
        this.afAuth.auth.signInWithEmailAndPassword(email, pass)
        .then((success) => {
          // console.log(success);
          this.id = success.uid;
          const userId = success.uid;
          alert(userId);
          this.router.navigateByUrl('/home');
        })
        .catch((error: any) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          alert(errorMessage);
          // console.log(errorCode);
        });
    }

    logout() {
        this.afAuth.auth.signOut()
        .then((success) => {
            this.id = undefined;
            this.user = undefined;
        })
        .catch((error: any) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          alert(errorMessage);
          console.log(errorCode);
        });
    }
}


