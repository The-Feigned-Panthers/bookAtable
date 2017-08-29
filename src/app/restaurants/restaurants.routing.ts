import { RestaurantsGuardService } from './restaurants-guard.service';
import { CreateRestaurantComponent } from './create-restaurant/create-restaurant.component';
import { DetailsRestaurantComponent } from './details-restaurant/details-restaurant.component';
import { ListRestaurantsComponent } from './list-restaurants/list-restaurants.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ListRestaurantsComponent
  },
  {
    path: 'create',
    component: CreateRestaurantComponent
  },
  {
    path: ':name',
    component: DetailsRestaurantComponent,
    canActivate: [RestaurantsGuardService]
  }
];

export const RestaurantsRoutes = RouterModule.forChild(routes);
