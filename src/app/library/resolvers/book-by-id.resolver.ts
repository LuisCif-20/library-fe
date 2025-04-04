import { ResolveFn, Router } from '@angular/router';
import { Book } from '../interfaces/book.interface';
import { inject } from '@angular/core';
import { BookService } from '../services/book.service';
import { catchError, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { AlertService } from 'src/app/shared/services/alert.service';

export const bookByIdResolver: ResolveFn<Book> = (route, state) => {
  const bookService = inject(BookService);
  const router = inject(Router);
  const alertService = inject(AlertService);
  return bookService.getBookById(route.paramMap.get('id')!).pipe(
    catchError((error: HttpErrorResponse) => {
      alertService.showAlert('El libro no existe', 'warning');
      router.navigateByUrl('/library');
      return throwError(() => error);
    })
  );
};
