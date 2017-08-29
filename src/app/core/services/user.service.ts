import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class UserService {

    user: Observable<firebase.User>;
    private id: string;
    constructor(public afAuth: AngularFireAuth, private db: AngularFireDatabase) {
     }

    getUser() {
        return this.afAuth.authState.map(auth => {
            this.id = auth.uid;
            console.log(this.id);
        return this.db.object(`/users/${this.id}`, { preserveSnapshot: true });
        });

    }
}


