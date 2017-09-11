import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable()
export class ContactsService {

    constructor(public db: AngularFireDatabase) { }

    saveForm(message) {
        this.db.database.ref('/contacts').push(message);
    }
}
