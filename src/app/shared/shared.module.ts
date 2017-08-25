import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FooterComponent } from './footer/footer.component';
// import { UserService } from '../services/user.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    HeaderComponent,
    NotFoundComponent,
    FooterComponent
],
providers: [
  // UserService,
],
  exports: [
    CommonModule,
    HeaderComponent,
    FooterComponent
  ]
})
export class SharedModule { }
