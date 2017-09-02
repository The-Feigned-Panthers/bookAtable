import { LoginSignupGuardService } from './../login/login-sugnup-guard.service';
import { SignupComponent } from './signup.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const loginRoutes: Routes = [
    {
        path: 'signup',
        canActivate: [LoginSignupGuardService],
        component: SignupComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(loginRoutes)],
    exports: [RouterModule],
    providers: [LoginSignupGuardService]
})
export class SignupRoutingModule { }
