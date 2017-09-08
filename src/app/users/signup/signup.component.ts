import { UserService } from './../../core/services/user.service';
import { ToastrService } from 'ngx-toastr';
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
  constructor(private afAuth: AngularFireAuth, private af: AngularFireDatabase, private router: Router,
    private toastr: ToastrService, private userService: UserService) {

    this.user = this.afAuth.authState;
    this.appUser = new User('', '', '', '', '');
  }

    signupWithEmail() {
      this.userService.signup(this.appUser, this.userPassword);
    }

}
