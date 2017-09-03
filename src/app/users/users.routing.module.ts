import { UserResolver } from './user/user-resolver.service';
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
          // resolve: { user: UserResolver }
        }
];

@NgModule({
  imports: [RouterModule.forChild(userRoutes)],
  exports: [RouterModule],
  providers: [UserGuardService, UserResolver]
})
export class UsersRouterModule {}
