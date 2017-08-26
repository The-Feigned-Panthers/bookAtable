import { SharedModule } from './../shared/shared.module';
import { CoreModule } from './../core/core.module';
import { LoginComponent } from './login/login.component';
import { UsersRoutes } from './users.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../core/services/user.service';

@NgModule({
  imports: [
    CoreModule,
    SharedModule,
    UsersRoutes,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [LoginComponent, SignupComponent, UserComponent],
  providers: [UserService]
})
export class UsersModule { }
