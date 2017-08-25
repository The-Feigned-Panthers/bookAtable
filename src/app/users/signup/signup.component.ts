import { User } from './../../models/user';
import { Component } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  user: Observable<firebase.User>;

  constructor(public afAuth: AngularFireAuth, public af: AngularFireDatabase, private router: Router) {
    this.user = this.afAuth.authState;
  }

    signupWithEmail(email, pass, username, firstname, lastname, type) {
      console.log(type);
      this.afAuth.auth.createUserWithEmailAndPassword(email, pass)
        .then((success) => {
          success.updateProfile({displayName: username, photoUrl: null});
          // console.log(success);
          const id = success.uid;
          // alert(id);
          const appUser = new User(id , username, firstname, lastname, email, type);
          firebase.database().ref('/users/' + id).set(appUser);
          this.router.navigateByUrl('/home');
        }
      )
        .catch((error: any) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          alert(errorMessage);
          console.log(errorCode);
        });
    }

}
