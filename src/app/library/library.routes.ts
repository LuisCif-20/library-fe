import { Routes } from '@angular/router';
import { LibraryLayoutComponent } from './layouts/library-layout/library-layout.component';
import { authorsResolver } from './resolvers/authors.resolver';
import { publishersResolver } from './resolvers/publishers.resolver';
import { bookByIdResolver } from './resolvers/book-by-id.resolver';
import { roleGuard } from '../auth/guards/role.guard';

const routes: Routes = [
  {
    path: '',
    component: LibraryLayoutComponent,
    children: [
      {
        path: 'books',
        resolve: {
          authors: authorsResolver,
          publishers: publishersResolver
        },
        loadComponent: () => import('./pages/books-page/books-page.component')
      },
      {
        path: 'books/:id',
        resolve: {
          book: bookByIdResolver,
          authors: authorsResolver,
          publishers: publishersResolver
        },
        loadComponent: () => import('./pages/book-by-id-page/book-by-id-page.component')
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'books'
      },
      {
        path: '',
        canMatch: [roleGuard],
        data: {
          role: 'LIBRARIAN'
        },
        loadChildren: () => import('../librarian/librarian.routes')
      },
      {
        path: '',
        canMatch: [roleGuard],
        data: {
          role: 'STUDENT'
        },
        loadChildren: () => import('../student/student.routes')
      },
      {
        path: '**',
        redirectTo: '/404'
      }
    ]
  }
];

export default routes;
