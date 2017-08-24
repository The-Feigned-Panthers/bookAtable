import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: []
})
export class LoginComponent {

  user: Observable<firebase.User>;
  items: FirebaseListObservable<any[]>;
  msgVal = '';

  constructor(public afAuth: AngularFireAuth, public af: AngularFireDatabase) {
    // this.appUser = af.list('/users', {
    //   query: {
    //     limitToLast: 50
    //   }
    // });
    this.user = this.afAuth.authState;
  }

  // loginAnonimous() {
  //   this.afAuth.auth.signInAnonymously();
  // }

  loginWithEmail(email, pass) {
    this.afAuth.auth.signInWithEmailAndPassword(email, pass)
      .then((success) => {
        console.log(success);
        const userId = success.uid;
      })
      .catch((error: any) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
        console.log(errorCode);
      });
  }

  signupWithEmail(email, pass) {
    this.afAuth.auth.createUserWithEmailAndPassword(email, pass)
      .then((success) => console.log(success))
      .catch((error: any) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
        console.log(errorCode);
      });
  }

  logout() {
    this.afAuth.auth.signOut()
      .then((success) => console.log(success))
      .catch((error: any) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
        console.log(errorCode);
      });
  }

  // Send(desc: string) {
  //   this.items.push({message: desc});
  //   this.msgVal = '';
  // }

}
