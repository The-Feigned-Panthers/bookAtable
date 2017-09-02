// import { AuthGuard } from './services/auth-guard.service';
import { UserService } from './services/user.service';
import { RestaurantsService } from './services/restaurants.service';
import { NgModule, Optional, SkipSelf, ModuleWithProviders } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

@NgModule({
  imports: [
  ],
  declarations: [],
  providers: [RestaurantsService, UserService]
})
export class CoreModule {
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('Core module already provided! Please provide it only in the App Module!');
    }
  }

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        RestaurantsService,
        UserService,
        AngularFireAuth,
      ]
    };
}
}
