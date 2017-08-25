import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class UserService {

    user: Observable<firebase.User>;
    private id: string;
    constructor(public afAuth: AngularFireAuth) {
        this.afAuth.authState.subscribe(auth => {
            this.id = auth.uid;
        });
     }
    getUser() {
        console.log(this.id);
        return firebase.database().ref('/users/' + this.id).once('value')
            .then((snapshot) => {
                const user = {};
                const username = snapshot.val().username;
                const firstname = snapshot.val().firstname;
                const lastname = snapshot.val().lastname;
                const email = snapshot.val().email;
                const type = snapshot.val().type;
                const bookings = snapshot.val().bookings || [];
                return {
                    username,
                    firstname,
                    lastname,
                    email,
                    type,
                    bookings
                };
            });
    }

}


