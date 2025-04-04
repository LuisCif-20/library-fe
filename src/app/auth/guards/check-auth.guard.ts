import { inject } from '@angular/core';
import { CanActivateChildFn, Router } from '@angular/router';
import { AuthStore } from '../stores/auth.store';
import { AuthStatus } from '../interfaces/auth.store.interface';

export const checkAuthGuard: CanActivateChildFn = (childRoute, state) => {
  const authStore = inject(AuthStore);
  if (authStore.authStatus() === AuthStatus.AUTHENTICATED) return true;
  const router = inject(Router);
  return router.createUrlTree(['/library']);
};
