import { inject } from "@angular/core";
import { forkJoin, map, Observable } from "rxjs";
import { AuthStore } from "src/app/auth/store/auth.store";
import { ConfigurationService } from "../services/configuration.service";

export const combinedInitializer = (): Observable<boolean> => {
  const configurationService = inject(ConfigurationService);
  const authStore = inject(AuthStore);
  return forkJoin([
    configurationService.getConfiguration(),
    authStore.checkAuth()
  ]).pipe(
    map(results => results.every(result => result === true))
  );
};
