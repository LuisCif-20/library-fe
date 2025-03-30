import { inject } from "@angular/core";
import { forkJoin, map, Observable } from "rxjs";
import { AuthStore } from "src/app/auth/store/auth.store";

export const combinedInitializer = (): Observable<boolean> => {
  const authStore = inject(AuthStore);
  return forkJoin([
    authStore.checkAuth()
  ]).pipe(
    map(results => results.every(result => result === true))
  );
};
