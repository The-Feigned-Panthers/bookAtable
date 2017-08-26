import { CoreModule } from './../core/core.module';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    SharedModule,
    CoreModule,
    RouterModule
  ],
  declarations: [
    HomeComponent
],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
