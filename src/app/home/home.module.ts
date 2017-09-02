import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    SharedModule,
  ],
  declarations: [
    HomeComponent
]
})
export class HomeModule { }
