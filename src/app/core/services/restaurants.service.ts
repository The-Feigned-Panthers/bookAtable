import { Upload } from './../../models/upload';
import { Review } from './../../models/review';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Restaurant } from './../../models/restaurant';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import * as firebase from 'firebase';

@Injectable()
export class RestaurantsService {
  private basePath = '/imgs';
  private uploadTask: firebase.storage.UploadTask;
  uploads: FirebaseListObservable<Upload[]>;
  constructor(private http: Http, public db: AngularFireDatabase) { }

  getAll(): Observable<Restaurant[]> {
    return this.db.list('/places');
  }

  getDetails(name: string): Observable<Restaurant> {
    return this.db.object(`/places/${name}`);
  }

  addRestaurant(restaurant: Restaurant) {
    this.db.database.ref('/places').child(restaurant.name).set(restaurant);
  }

  rateRestaurant(restaurant: Restaurant) {
    this.db.database.ref('/places').child(restaurant.name).set(restaurant);
  }

  addReview(restaurant: Restaurant) {
    this.db.database.ref('/places').child(restaurant.name).set(restaurant);
  }

  updateRestaurant(name: string) {

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

  bookATable(name: string) {

  }
}
