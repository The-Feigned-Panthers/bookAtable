import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
// import { UsersModule } from './users/users.module';
import { HomeModule } from './home/home.module';
// import { RestaurantsModule } from './restaurants/restaurants.module';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { firebaseConfig } from './firebase.config';

import { AppComponent } from './app.component';
// import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
// import { AngularFireAuth } from 'angularfire2/auth';



@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    // RestaurantsModule,
    // UsersModule,
    SharedModule,
    HomeModule,
    CoreModule.forRoot()
  ],
  declarations: [
    AppComponent,
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
