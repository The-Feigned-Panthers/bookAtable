import { PasswordMatchDirective } from './password-match.directive';
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
  appUser: User;
  userPassword: string;
  passwordCheck: string;
  constructor(private afAuth: AngularFireAuth, private af: AngularFireDatabase, private router: Router) {
    this.user = this.afAuth.authState;
    this.appUser = new User('', '', '', '', '');
  }

    signupWithEmail() {
      // console.log(type);
      this.afAuth.auth.createUserWithEmailAndPassword(this.appUser.email, this.userPassword)
        .then((success) => {
          success.updateProfile({displayName: this.appUser.username, photoUrl: null});
          const id = success.uid;
          firebase.database().ref('/users/' + id).set(this.appUser);
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
