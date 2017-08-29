import { FirebaseListObservable } from 'angularfire2/database';
import { UserService } from './../../core/services/user.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
// import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user: Observable<firebase.User>;
  username: string;
  constructor(public afAuth: AngularFireAuth, private service: UserService) {
   }

  logout() {
    this.service.logout();
  }

  searchField() {
    // TODO Display search field instead of text 'search'
  }

  ngOnInit() {
    this.user = this.service.user;
  }
}
