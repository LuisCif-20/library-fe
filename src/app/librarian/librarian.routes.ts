import { Routes } from '@angular/router';
import { checkAuthGuard } from '../auth/guards/check-auth.guard';

const routes: Routes = [
  {
    path: '',
    canActivateChild: [checkAuthGuard],
    children: [

    ]
  }
];

export default routes;
