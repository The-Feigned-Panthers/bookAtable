import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user: Observable<firebase.User>;
  constructor(public afAuth: AngularFireAuth) {
    this.user = this.afAuth.authState;
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
  ngOnInit() {
  }
}