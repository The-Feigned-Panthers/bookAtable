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
  id;
  constructor(private userService: UserService) {
  }

  loginWithEmail(email, pass) {
    this.userService.login(email, pass);
  }
}
