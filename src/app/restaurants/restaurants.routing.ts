import { DetailsRestaurantComponent } from './details-restaurant/details-restaurant.component';
import { ListRestaurantsComponent } from './list-restaurants/list-restaurants.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'restaurants',
    component: ListRestaurantsComponent,
  },
  {
    path: 'restaurants/:name',
    component: DetailsRestaurantComponent
  }
];

export const RestaurantsRoutes = RouterModule.forChild(routes);
