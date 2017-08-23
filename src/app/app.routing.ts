import { HomeComponent } from './home/home.component';
import { LoginComponent } from './users/login/login.component';
import { ListRestaurantsComponent } from './restaurants/list-restaurants/list-restaurants.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: '#restaurants',
    component: ListRestaurantsComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
];

export const AppRoutes = RouterModule.forRoot(routes);
