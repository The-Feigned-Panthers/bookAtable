import { SharedModule } from './../shared/shared.module';
// import { CoreModule } from './../core/core.module';
// import { LoginComponent } from './login/login.component';
import { UsersRouterModule } from './users.routing.module';
import { NgModule } from '@angular/core';
import { UserComponent } from './user/user.component';
// import { SignupComponent } from './signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    SharedModule,
    UsersRouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    // LoginComponent,
    // SignupComponent,
    UserComponent
  ],
  providers: []
})
export class UsersModule { }
