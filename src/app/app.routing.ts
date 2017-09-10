import { ContactsComponent } from './contacts/contacts.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './users/login/login.component';
import { ListRestaurantsComponent } from './restaurants/list-restaurants/list-restaurants.component';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { NgModule } from '@angular/core';
import { SignupComponent } from './users/signup/signup.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'restaurants', loadChildren: './restaurants/restaurants.module#RestaurantsModule' },
  { path: 'users', loadChildren: './users/users.module#UsersModule' },
  { path: 'contacts', component: ContactsComponent},
  { path: '**', component: NotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    { preloadingStrategy: PreloadAllModules }
  )],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
