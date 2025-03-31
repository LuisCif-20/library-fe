import { Routes } from '@angular/router';
import { publicRoutesGuard } from './auth/guard/public-routes.guard';

export const routes: Routes = [
  {
    path: 'auth',
    canMatch: [publicRoutesGuard],
    loadChildren: () => import('./auth/auth.routes')
  },
  {
    path: '404',
    loadChildren: () => import('./shared/pages/error404-page/error404-page.component')
  },
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('./library/library.routes')
  },
  {
    path: '**',
    redirectTo: '404'
  }
];
