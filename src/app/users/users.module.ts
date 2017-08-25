import { LoginComponent } from './login/login.component';
import { UsersRoutes } from './users.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    UsersRoutes,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [LoginComponent, SignupComponent, UserComponent]
})
export class UsersModule { }
