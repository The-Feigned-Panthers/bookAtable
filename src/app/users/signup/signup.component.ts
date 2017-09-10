import { UserService } from './../../core/services/user.service';
import { ToastrService } from 'ngx-toastr';
import { User } from './../../models/user';
import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  appUser: User;
  userPassword: string;
  passwordCheck: string;
  constructor(private router: Router, private toastr: ToastrService, private userService: UserService) {
    this.appUser = new User('', '', '', '', '');
  }

  signupWithEmail() {
    this.userService.signup(this.appUser, this.userPassword);
  }

}
