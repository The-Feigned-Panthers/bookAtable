import { ToastrService } from 'ngx-toastr';
import { User } from './../../models/user';
import { Router } from '@angular/router';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';


@Injectable()
export class UserService {
    user: Observable<firebase.User>;
    userId: string;
    username: string;
    redirectUrl = '/home';
    appUser: User;
    usertype: string;
    constructor(public afAuth: AngularFireAuth, private db: AngularFireDatabase, private router: Router,
        public toastr: ToastrService) {
        this.user = this.afAuth.authState;
        this.user.subscribe(us => {
            if (us) {
                this.userId = us.uid;
                this.username = us.displayName;
                this.getUser(us.uid).subscribe(res => this.appUser = res);
            }
        });
    }

    getUser(id): Observable<User> {
        return this.db.object(`users/${id}`);
    }

    login(email, pass) {
        this.afAuth.auth.signInWithEmailAndPassword(email, pass)
            .then((success) => {
                this.router.navigateByUrl(this.redirectUrl)
                    .then(res => {
                        this.toastr.success('Sign up success!');
                    });
            })
            .catch((error: any) => {
                this.toastr.error(error.message);
            });
    }

    logout() {
        this.afAuth.auth.signOut()
            .then((success) => {
                this.userId = undefined;
                this.username = undefined;
                this.router.navigate(['/home']);
            })
            .catch((error: any) => {
                this.toastr.error(error.message);
            });
    }

    signup(user, password) {
        this.afAuth.auth.createUserWithEmailAndPassword(user.email, password)
        .then((success) => {
          success.updateProfile({displayName: user.username, photoUrl: null});
          const id = success.uid;
          firebase.database().ref('/users/' + id).set(user);
          this.toastr.success('Sign up success!');
          this.router.navigateByUrl('/home');
        }
      )
        .catch((error: any) => {
          this.toastr.error(error.message);
        });
    }

    addRestaurant(restaurantName: string) {
        this.db.database.ref(`/users/${this.userId}/restaurants/${restaurantName}`).set(true);
    }

    bookATable(bookingId: string) {
        this.db.database.ref(`/users/${this.userId}/bookings/${bookingId}`).set(true);
    }

    getUserbookings() {
        return this.db.list('/bookings', { query: {
            orderByChild: 'userId',
            equalTo: this.userId
        }});
    }
}


