import { LoginComponent } from './login/login.component';
import { UsersRoutes } from './users.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  imports: [
    CommonModule,
    UsersRoutes
  ],
  declarations: [LoginComponent, SignupComponent, UserComponent]
})
export class UsersModule { }
