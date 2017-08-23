import { AngularFireDatabase } from 'angularfire2/database';
import { Restaurant } from './../models/restaurant';
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

  getDetails(name: string) {
    return this.http.get(`/api/${name}`)
      .map(res => res.json());
  }

  addRestaurant() {

  }

  rateRestaurant() {

  }

  updateRestaurant(name: string) {

  }

  deleteRestaurant(name: string) {
    return this.http.delete(`/api/${name}`, )
      .map(res => res.json());
  }

  bookATable(name: string) {

  }
}
