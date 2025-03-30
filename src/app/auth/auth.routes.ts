import { Routes } from '@angular/router';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { degreesResolver } from '../shared/resolvers/degrees.resolver';

const routes: Routes = [
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: 'sign-in',
        loadComponent: () => import('./pages/login-page/login-page.component')
      },
      {
        path: 'sign-up',
        resolve: {
          degrees: degreesResolver
        },
        loadComponent: () => import('./pages/register-page/register-page.component')
      },
      {
        path: 'reset-password',
        loadComponent: () => import('./pages/reset-password-page/reset-password-page.component')
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'sign-in'
      },
      {
        path: '**',
        redirectTo: '/404'
      }
    ]
  }
];

export default routes;
