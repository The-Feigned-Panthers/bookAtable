import { FirebaseListObservable } from 'angularfire2/database';
import { UserService } from './../../core/services/user.service';
import { SearchService } from '../../core/services/search.service';
import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { ToastsManager } from 'ng2-toastr';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user: Observable<firebase.User>;
  username: string;
  constructor(private userService: UserService, private searchService: SearchService, public toastr: ToastsManager, vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vcr);
  }

  logout() {
    this.userService.logout();
    this.toastr.success('Logged out!', 'Success');
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
