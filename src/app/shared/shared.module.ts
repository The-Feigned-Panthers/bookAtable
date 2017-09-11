import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchByPipe } from './../pipes/searchBy.pipe';
import { RestaurantPartialComponent } from './../restaurants/list-restaurants/restaurant-partial/restaurant-partial.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
        FormsModule,
        ReactiveFormsModule,
        AngularFireDatabaseModule,
        AngularFireAuthModule
  ],
  declarations: [
    HeaderComponent,
    NotFoundComponent,
    FooterComponent,
    RestaurantPartialComponent,
    SearchByPipe,
],
providers: [
],
  exports: [
    CommonModule,
    HeaderComponent,
    FooterComponent,
    RestaurantPartialComponent,
    NotFoundComponent,
    SearchByPipe,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ]
})
export class SharedModule {

 }
