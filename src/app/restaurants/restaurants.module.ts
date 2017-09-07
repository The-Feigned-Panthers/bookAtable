import { RestaurantsListResolver } from './restaurants-list-resolver';
import { RestaurantsGuardService } from './restaurants-guard.service';
import { SortByRatingPipe } from './../pipes/sort-by-rating.pipe';
import { BookingComponent } from './details-restaurant/booking/booking.component';
// import { CoreModule } from './../core/core.module';
import { SharedModule } from './../shared/shared.module';
import { ReviewsComponent } from './details-restaurant/reviews/reviews.component';
import { OverviewComponent } from './details-restaurant/overview/overview.component';
import { RestaurantsRoutingModule } from './restaurants.routing';
import { RestaurantPartialComponent } from './list-restaurants/restaurant-partial/restaurant-partial.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { ListRestaurantsComponent } from './list-restaurants/list-restaurants.component';
import { DetailsRestaurantComponent } from './details-restaurant/details-restaurant.component';
// import { CreateRestaurantComponent } from './create-restaurant/create-restaurant.component';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { UploadPhotoComponent } from './upload-photo/upload-photo.component';
import { EditComponent } from './edit/edit.component';

@NgModule({
  imports: [
    SharedModule,
    FormsModule,
    Ng2OrderModule,
    RestaurantsRoutingModule
  ],
  declarations: [
    ListRestaurantsComponent,
    RestaurantPartialComponent,
    DetailsRestaurantComponent,
    OverviewComponent,
    ReviewsComponent,
    // CreateRestaurantComponent,
    BookingComponent,
    UploadPhotoComponent,
    EditComponent,
    SortByRatingPipe
],
  providers: [RestaurantsGuardService, RestaurantsListResolver],
})
export class RestaurantsModule { }
