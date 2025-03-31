import { Routes } from '@angular/router';
import { publicRoutesGuard } from './auth/guard/public-routes.guard';

export const routes: Routes = [
  {
    path: 'auth',
    canMatch: [publicRoutesGuard],
    loadChildren: () => import('./auth/auth.routes')
  },
  {
    path: 'library',
    loadChildren: () => import('./library/library.routes')
  },
  {
    path: '404',
    loadComponent: () => import('./shared/pages/error404-page/error404-page.component')
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'library'
  },
  {
    path: '**',
    redirectTo: '404'
  }
];
