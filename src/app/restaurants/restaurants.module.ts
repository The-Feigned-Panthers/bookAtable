import { RestaurantsListResolver } from './restaurants-list-resolver';
import { RestaurantsGuardService } from './restaurants-guard.service';
import { SortByPipe } from './../pipes/sort-by.pipe';
import { BookingComponent } from './details-restaurant/booking/booking.component';
import { SharedModule } from './../shared/shared.module';
import { ReviewsComponent } from './details-restaurant/reviews/reviews.component';
import { OverviewComponent } from './details-restaurant/overview/overview.component';
import { RestaurantsRoutingModule } from './restaurants.routing';
import { RestaurantPartialComponent } from './list-restaurants/restaurant-partial/restaurant-partial.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { ListRestaurantsComponent } from './list-restaurants/list-restaurants.component';
import { DetailsRestaurantComponent } from './details-restaurant/details-restaurant.component';
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
    DetailsRestaurantComponent,
    OverviewComponent,
    ReviewsComponent,
    BookingComponent,
    UploadPhotoComponent,
    EditComponent,
    SortByPipe
],
  providers: [RestaurantsGuardService, RestaurantsListResolver],
})
export class RestaurantsModule { }
