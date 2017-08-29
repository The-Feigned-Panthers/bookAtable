import { UserComponent } from './user/user.component';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [

  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: ':username',
    component: UserComponent
  },
];

export const UsersRoutes = RouterModule.forChild(routes);
