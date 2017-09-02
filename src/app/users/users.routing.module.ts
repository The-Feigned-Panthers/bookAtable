import { UserGuardService } from './user/user-guard.servise';
import { NgModule } from '@angular/core';
import { UserComponent } from './user/user.component';
import { Routes, RouterModule } from '@angular/router';

const userRoutes: Routes = [
        {
          path: ':username',
          canActivate: [UserGuardService],
          component: UserComponent
        }
];

@NgModule({
  imports: [RouterModule.forChild(userRoutes)],
  exports: [RouterModule],
  providers: [UserGuardService]
})
export class UsersRouterModule {}
