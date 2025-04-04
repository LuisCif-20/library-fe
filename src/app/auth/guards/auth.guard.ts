import { inject } from '@angular/core';
import { CanMatchFn } from '@angular/router';

import { AuthStore } from '../stores/auth.store';
import { AuthStatus } from '../interfaces/auth.store.interface';

export const authGuard: CanMatchFn = (route, segments) => {
  const authStore = inject(AuthStore);
  if (authStore.authStatus() === AuthStatus.AUTHENTICATED) return true;
  return false;
};
