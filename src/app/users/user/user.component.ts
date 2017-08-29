import { FirebaseListObservable } from 'angularfire2/database';
import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../../core/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  private currentUser: FirebaseListObservable<any[]>;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUser().subscribe(users => {
    this.currentUser = users[0];
      });
  }

}
