import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'home',
  component: AppComponent
 },
];

export const AppRoutes = RouterModule.forRoot(routes);
