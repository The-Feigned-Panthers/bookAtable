import { UserService } from './../../core/services/user.service';
import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: []
})
export class LoginComponent {

  user: Observable<firebase.User>;

  constructor(public afAuth: AngularFireAuth, public af: AngularFireDatabase, private router: Router, private userService: UserService) {
    this.user = this.afAuth.authState;
  }

  loginWithEmail(email, pass) {
    this.afAuth.auth.signInWithEmailAndPassword(email, pass)
      .then((success) => {
        console.log(success);
        const userId = success.uid;
        this.userService.getUser().then((user) => {
          localStorage.setItem('currentUser', user.username);
        });
        alert(userId);
        this.router.navigateByUrl('/home');
      })
      .catch((error: any) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
        console.log(errorCode);
      });
  }
}
