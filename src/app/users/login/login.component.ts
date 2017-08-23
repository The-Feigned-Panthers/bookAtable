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
export class LoginComponent implements OnInit {

  user: Observable<firebase.User>;
  items: FirebaseListObservable<any[]>;
  msgVal = '';

  constructor(public afAuth: AngularFireAuth, public af: AngularFireDatabase) {
    // this.items = af.list('/messages', {
    //   query: {
    //     limitToLast: 50
    //   }
    // });
    // this.user = this.afAuth.authState;
  }

  loginAnonimous() {
    this.afAuth.auth.signInAnonymously();
  }

  loginWithEmail(email, pass) {
    this.afAuth.auth.signInWithEmailAndPassword(email, pass);
  }

  signupWithEmail(email, pass) {
    this.afAuth.auth.createUserWithEmailAndPassword(email, pass);
  }

  logout() {
    this.afAuth.auth.signOut();
  }

  Send(desc: string) {
    this.items.push({message: desc});
    this.msgVal = '';
  }
  ngOnInit() {
  }

}
