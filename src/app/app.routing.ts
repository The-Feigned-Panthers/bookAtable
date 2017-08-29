import { HomeComponent } from './home/home.component';
import { LoginComponent } from './users/login/login.component';
import { ListRestaurantsComponent } from './restaurants/list-restaurants/list-restaurants.component';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: 'restaurants', loadChildren: './restaurants/restaurants.module#RestaurantsModule' },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {path: 'users', loadChildren: './users/users.module#UsersModule'},

  { path: 'login', component: LoginComponent },
  { path: '**', component: NotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
