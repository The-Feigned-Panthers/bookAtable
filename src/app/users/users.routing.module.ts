import { UserAddRestaurantGuardService } from './user/user-add_restaurant_guard.service';
import { CreateRestaurantComponent } from './../restaurants/create-restaurant/create-restaurant.component';
// import { UserResolver } from './user/user-resolver.service';
import { User } from './../models/user';
import { UserGuardService } from './user/user-guard.servise';
import { NgModule } from '@angular/core';
import { UserComponent } from './user/user.component';
import { Routes, RouterModule } from '@angular/router';

const userRoutes: Routes = [
  {
        path: ':username',
        component: UserComponent,
        canActivate: [UserGuardService],
        // resolve: { user: UserResolver },
        // children: [
        //   {
        //     path: 'create',
        //     component: CreateRestaurantComponent,
        //     canActivate: [UserAddRestaurantGuardService]
        //   }
        // ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(userRoutes)],
  exports: [RouterModule],
  providers: [UserGuardService, UserAddRestaurantGuardService,
    // UserResolver
  ]
})
export class UsersRouterModule {}
