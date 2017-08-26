import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../../core/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input()
  public user;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUser()
      .then(user => this.user = user);
  }

}
