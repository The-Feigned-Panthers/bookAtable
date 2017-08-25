import { UsersModule } from './users/users.module';
import { RouterModule } from '@angular/router';
import { AppRoutes } from './app.routing';
import { RestaurantsModule } from './restaurants/restaurants.module';
import { RestaurantsService } from './services/restaurants.service';
import { firebaseConfig } from './firebase.config';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AppComponent } from './app.component';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { HttpModule } from '@angular/http';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './home/home.module';
// import { UserService } from './services/user.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutes,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    RestaurantsModule,
    UsersModule,
    SharedModule,
    HomeModule
  ],
  declarations: [
    AppComponent,
],
  providers: [RestaurantsService,
    // UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
