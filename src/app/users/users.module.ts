import { SharedModule } from './../shared/shared.module';
import { UsersRouterModule } from './users.routing.module';
import { NgModule } from '@angular/core';
import { UserComponent } from './user/user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    SharedModule,
    UsersRouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    UserComponent
  ],
  providers: []
})
export class UsersModule { }
