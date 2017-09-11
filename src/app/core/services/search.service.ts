import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class SearchService {

    constructor(private db: AngularFireDatabase) { }

    getbRestaurantsByName(start, end): FirebaseListObservable<any> {
        return this.db.list('/places', {
            query: {
                orderByChild: 'name',
                limitToFirst: 10,
                startAt: start,
                endAt: end
            }
        });
    }
}