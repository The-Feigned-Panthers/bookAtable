import { Review } from './../../models/review';
import { AngularFireDatabase } from 'angularfire2/database';
import { Restaurant } from './../../models/restaurant';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import * as firebase from 'firebase/app';

@Injectable()
export class RestaurantsService {

  constructor(private http: Http, public af: AngularFireDatabase) { }

  getAll(): Observable<Restaurant[]> {
    return this.af.list('/places');
  }

  getDetails(name: string): Observable<Restaurant> {
    return this.af.object(`/places/${name}`);
  }

  addRestaurant(restaurant: Restaurant) {
    this.af.database.ref('/places').child(restaurant.name).set(restaurant);
  }

  rateRestaurant(restaurant: Restaurant) {
    this.af.database.ref('/places').child(restaurant.name).set(restaurant);
  }

  addReview(restaurant: Restaurant) {
    this.af.database.ref('/places').child(restaurant.name).set(restaurant);
  }

  updateRestaurant(name: string) {

  }

  deleteRestaurant(name: string) {

  }

  bookATable(name: string) {

  }
}
