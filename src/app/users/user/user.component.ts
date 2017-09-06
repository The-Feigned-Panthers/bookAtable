import { User } from './../../models/user';
import { FirebaseObjectObservable } from 'angularfire2/database';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../core/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  currentUser: {};

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    // this.route.data
    //   .subscribe((data: {user: User}) => {
    //     console.log(data.user);
    //     this.currentUser = data.user;
    //   });

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
