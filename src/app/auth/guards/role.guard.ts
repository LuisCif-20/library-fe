import { inject } from '@angular/core';
import { CanMatchFn } from '@angular/router';
import { AuthStore } from '../stores/auth.store';

export const roleGuard: CanMatchFn = (route, segments) => {
  const authStore = inject(AuthStore);
  const user = authStore.user();
  if (!user) return false;
  const allowedRole: string = route.data?.["role"];
  if (user.role.name === allowedRole) {
    return true;
  }
  return true;
};
