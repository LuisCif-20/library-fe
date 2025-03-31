import { Routes } from '@angular/router';
import { LibraryLayoutComponent } from './layouts/library-layout/library-layout.component';

const routes: Routes = [
  {
    path: '',
    component: LibraryLayoutComponent,
    children: [

    ]
  }
];

export default routes;
