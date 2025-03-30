import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthStore } from '../store/auth.store';

export const addAccessTokenInterceptor: HttpInterceptorFn = (req, next) => {
  const authStore = inject(AuthStore);
  const token = authStore.accessToken();
  if (token) {
    const clone = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${token}`)
    });
    return next(clone);
  }
  return next(req);
};
