import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { RouterModule, Router } from '@angular/router';

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { LoginRoutingModule } from './users/login/login.routing.module';
import { SignupRoutingModule } from './users/signup/signup.routing.module';
import { AppRoutingModule } from './app.routing';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { firebaseConfig } from './firebase.config';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { SignupComponent } from './users/signup/signup.component';
import { LoginComponent } from './users/login/login.component';
import { PasswordMatchDirective } from './users/signup/password-match.directive';
import { ContactsComponent } from './contacts/contacts.component';
import { DateCheckDirective } from './restaurants/details-restaurant/booking/date-check.directive';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    SharedModule,
    CoreModule.forRoot(),
    LoginRoutingModule,
    SignupRoutingModule,
    AppRoutingModule,
    CommonModule
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    PasswordMatchDirective,
    DateCheckDirective,
    ContactsComponent
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
