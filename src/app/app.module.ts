import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { LoginRoutingModule } from './users/login/login.routing.module';
import { SignupRoutingModule } from './users/signup/signup.routing.module';
import { AppRoutingModule } from './app.routing';

import { AngularFireModule } from 'angularfire2';
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
    AngularFireModule.initializeApp(firebaseConfig),
    SharedModule,
    CoreModule.forRoot(),
    ToastrModule.forRoot(),
    LoginRoutingModule,
    SignupRoutingModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    ContactsComponent,
    LoginComponent,
    SignupComponent,
    PasswordMatchDirective,
    DateCheckDirective,
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
