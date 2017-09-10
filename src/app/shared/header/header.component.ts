import { ToastrService } from 'ngx-toastr';
import { FirebaseListObservable } from 'angularfire2/database';
import { UserService } from './../../core/services/user.service';
import { SearchService } from '../../core/services/search.service';
import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user: Observable<firebase.User>;
  username: string;
  constructor(private userService: UserService,  private toastr: ToastrService) {
  }

  logout() {
    this.userService.logout();
    this.username = '';
  }

  ngOnInit() {
    this.user = this.userService.user;
    this.user.subscribe(us => {
      if (us) {
        this.username = us.displayName;
      }
    });
  }
}
