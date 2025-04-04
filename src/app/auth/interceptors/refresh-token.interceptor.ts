import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthStore } from '../stores/auth.store';
import { catchError, switchMap, throwError } from 'rxjs';

export const refreshTokenInterceptor: HttpInterceptorFn = (req, next) => {
  const authStore = inject(AuthStore);
  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error.status === 401 && authStore.accessToken()) {
        return authStore.refreshToken().pipe(
          switchMap(() => {
            const newReq = req.clone();
            return next(newReq);
          })
        );
      }
      return throwError(() => error);
    })
  );
};
