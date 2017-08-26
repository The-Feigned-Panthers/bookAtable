import { CoreModule } from './../core/core.module';
import { SharedModule } from './../shared/shared.module';
import { ReviewsComponent } from './details-restaurant/reviews/reviews.component';
import { OverviewComponent } from './details-restaurant/overview/overview.component';
import { RestaurantsRoutes } from './restaurants.routing';
import { RestaurantPartialComponent } from './list-restaurants/restaurant-partial/restaurant-partial.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { ListRestaurantsComponent } from './list-restaurants/list-restaurants.component';
import { DetailsRestaurantComponent } from './details-restaurant/details-restaurant.component';
import { CreateRestaurantComponent } from './create-restaurant/create-restaurant.component';

@NgModule({
  imports: [
    SharedModule,
    CoreModule,
    FormsModule,
    RestaurantsRoutes
  ],
  declarations: [
    ListRestaurantsComponent,
    RestaurantPartialComponent,
    DetailsRestaurantComponent,
    OverviewComponent,
    ReviewsComponent,
    CreateRestaurantComponent
],
  providers: [],
})
export class RestaurantsModule { }
