import { RestaurantsRoutes } from './restaurants.routing';
import { RestaurantsService } from './../services/restaurants.service';
import { RestaurantPartialComponent } from './list-restaurants/restaurant-partial/restaurant-partial.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListRestaurantsComponent } from './list-restaurants/list-restaurants.component';
import { DetailsRestaurantComponent } from './details-restaurant/details-restaurant.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RestaurantsRoutes
  ],
  declarations: [
    ListRestaurantsComponent,
    RestaurantPartialComponent,
    DetailsRestaurantComponent
],
  providers: [RestaurantsService],
})
export class RestaurantsModule { }
