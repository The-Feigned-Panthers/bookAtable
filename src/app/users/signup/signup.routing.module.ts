import { SignupComponent } from './signup.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const loginRoutes: Routes = [
    {
        path: 'signup',
        // canActivate: [LoginSignupGuardService],
        component: SignupComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(loginRoutes)],
    exports: [RouterModule],
    providers: []
})
export class SignupRoutingModule { }
