import { Restaurant } from './../models/restaurant';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class RestaurantsService {

  constructor(private http: Http) { }

  getAll(): Observable<Restaurant[]> {
    return this.http.get(`/api/all`)
      .map(res => <Restaurant[]>res.json());
  }

  getLatest(): Observable<Restaurant[]> {
    return this.http.get(`/api/latest`)
      .map(res => <Restaurant[]>res.json());
  }

  getMostPopular(): Observable<Restaurant[]> {
    return this.http.get(`/api/popular`)
      .map(res => <Restaurant[]>res.json());
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
