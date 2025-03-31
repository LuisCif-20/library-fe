import { Routes } from '@angular/router';
import { LibraryLayoutComponent } from './layouts/library-layout/library-layout.component';

const routes: Routes = [
  {
    path: '',
    component: LibraryLayoutComponent,
    children: [
      {
        path: 'books',
        loadComponent: () => import('./pages/books-page/books-page.component')
      },
      {
        path: 'books/:id',
        loadComponent: () => import('./pages/book-by-id-page/book-by-id-page.component')
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'books'
      },
      {
        path: '',
        loadChildren: () => import('../librarian/librarian.routes')
      },
      {
        path: '**',
        redirectTo: '/404'
      }
    ]
  }
];

export default routes;
