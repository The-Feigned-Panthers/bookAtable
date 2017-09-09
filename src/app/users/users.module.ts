import { EditComponent } from './../restaurants/edit/edit.component';
import { UploadPhotoComponent } from './../restaurants/upload-photo/upload-photo.component';
import { CreateRestaurantComponent } from './../restaurants/create-restaurant/create-restaurant.component';
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
    UserComponent,
    CreateRestaurantComponent,
    UploadPhotoComponent,
    EditComponent
  ],
  providers: []
})
export class UsersModule { }
