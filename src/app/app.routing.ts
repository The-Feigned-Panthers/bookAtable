import { HomeComponent } from './home/home.component';
import { LoginComponent } from './users/login/login.component';
import { ListRestaurantsComponent } from './restaurants/list-restaurants/list-restaurants.component';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './shared/not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'restaurants', component: ListRestaurantsComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', component: NotFoundComponent }

];

export const AppRoutes = RouterModule.forRoot(routes);
