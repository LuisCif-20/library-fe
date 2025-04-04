import { Routes } from '@angular/router';
import { checkAuthGuard } from '../auth/guards/check-auth.guard';
import { LibrarianLayoutComponent } from './layouts/librarian-layout/librarian-layout.component';

const routes: Routes = [
  {
    path: '',
    component: LibrarianLayoutComponent,
    canActivateChild: [checkAuthGuard],
    children: [
      {
        path: 'authors',
        loadComponent: () => import('./pages/authors-page/authors-page.component')
      },
      {
        path: 'publishers',
        loadComponent: () => import('./pages/publishers-page/publishers-page.component')
      },
      {
        path: 'degrees',
        loadComponent: () => import('./pages/degrees-page/degrees-page.component')
      },
      {
        path: 'loans',
        loadComponent: () => import('./pages/loans-page/loans-page.component')
      },
      {
        path: 'configuration',
        loadComponent: () => import('./pages/configuration-page/configuration-page.component')
      }
    ]
  }
];

export default routes;
