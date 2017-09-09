import { Booking } from './../../models/booking';
import { Upload } from './../../models/upload';
import { Review } from './../../models/review';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Restaurant } from './../../models/restaurant';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import * as firebase from 'firebase';

@Injectable()
export class RestaurantsService {
  private basePath = '/imgs';
  private uploadTask: firebase.storage.UploadTask;
  uploads: FirebaseListObservable<Upload[]>;
  firebaseRestaurants: Observable<Restaurant[]>;
  restaurants: Restaurant[];
  constructor(public db: AngularFireDatabase) {
    this.firebaseRestaurants = this.getAll();
    this.firebaseRestaurants.subscribe(rest => {
      if (rest) {
        this.restaurants = rest;
        console.log(this.restaurants);
      }
    });
   }
  start() {
    return;
  }
  getAll(): Observable<Restaurant[]> {
    return this.db.list('/places');
  }

  getDetails(name: string): Observable<Restaurant> {
    return this.db.object(`/places/${name}`);
  }

  addReview(name: string, review: Review, index: number) {
    this.db.database.ref(`/places/${name}`)
      .child('reviews')
      .child(`${index}`)
      .set(review);
  }

  addVoter(name: string, userId: string, index: number) {
    this.db.database.ref(`/places/${name}/voters`)
      .child(index.toString())
      .set(userId);
  }

  updateRestaurant(restaurant: Restaurant) {
    this.db.database.ref('/places')
      .child(restaurant.name)
      .set(restaurant);
    this.db.database.ref('/users');
  }

  uploadPhoto(name: string, upload: Upload) {
    const storageRef = firebase.storage().ref();
    const uploadTask = storageRef.child(`${this.basePath}/${name}/pic_${new Date().toDateString()}`).put(upload.file);
    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot) =>  {
      },
      (error) => {
        console.log(error);
      },
      () => {
        upload.url = uploadTask.snapshot.downloadURL;
        upload.name = upload.file.name;
        this.saveFileData(name, upload);
      }
    );
  }

  private saveFileData(name, upload: Upload) {
    this.db.database.ref('/places').child(`/${name}/photo`).set(upload.url);
  }

  deleteRestaurant(name: string) {

  }

  saveBookingInRestaurant(name: string, booking: Booking, index: number) {
    this.db.database.ref('/places')
      .child(`/${name}/bookings/${index.toString()}`)
      .set(booking);
  }

  saveBookingInBookings(booking: Booking) {
    return this.db.database.ref('/bookings').push(booking);
  }
}
