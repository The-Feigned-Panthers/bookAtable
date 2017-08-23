import { ListRestaurantsComponent } from './list-restaurants/list-restaurants.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'restaurants',
    component: ListRestaurantsComponent
  },
  {
    path: '',
    redirectTo: 'restaurants',
    pathMatch: 'full'
  }
];

export const RestaurantsRoutes = RouterModule.forChild(routes);
