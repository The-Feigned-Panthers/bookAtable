// import { AngularFireAuth } from 'angularfire2/auth';
import { FirebaseObjectObservable } from 'angularfire2/database';
import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../../core/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  private currentUser: {};

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.afAuth.authState.subscribe(user => {
      if (user) {
        const id: string = user.uid;
      this.userService.getUser(id).subscribe(us => {
        this.currentUser = us;
      });
    }
  });
}
}
