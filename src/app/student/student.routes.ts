import { Routes } from '@angular/router';
import { checkAuthGuard } from '../auth/guards/check-auth.guard';
import { StudentLayoutComponent } from './layouts/student-layout/student-layout.component';

const routes: Routes = [
  {
    path: '',
    component: StudentLayoutComponent,
    canActivateChild: [checkAuthGuard],
    children: [
      {
        path: 'reserves',
        loadComponent: () => import('./pages/reserves-page/reserves-page.component')
      }
    ]
  }
];

export default routes;
