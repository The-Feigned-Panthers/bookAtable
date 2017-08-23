import { RestaurantsService } from './../services/restaurants.service';
import { RestaurantPartialComponent } from './list-restaurants/restaurant-partial/restaurant-partial.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListRestaurantsComponent } from './list-restaurants/list-restaurants.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [
    ListRestaurantsComponent,
    RestaurantPartialComponent
],
  providers: [RestaurantsService],
})
export class RestaurantsModule { }
