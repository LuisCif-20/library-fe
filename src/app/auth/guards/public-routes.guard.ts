import { inject } from '@angular/core';
import { CanMatchFn, Router } from '@angular/router';

import { AuthStore } from '../stores/auth.store';
import { AuthStatus } from '../interfaces/auth.store.interface';

export const publicRoutesGuard: CanMatchFn = (route, segments) => {
  const authStore = inject(AuthStore);
  if (authStore.authStatus() === AuthStatus.NOT_AUTHENTICATED) return true;
  const router = inject(Router);
  return router.createUrlTree(['/']);
};
