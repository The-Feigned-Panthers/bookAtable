import { LoginComponent } from './login/login.component';
import { UsersRoutes } from './users.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';

@NgModule({
  imports: [
    CommonModule,
    UsersRoutes
  ],
  declarations: [LoginComponent]
})
export class UsersModule { }
