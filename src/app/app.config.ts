import { ApplicationConfig, provideAppInitializer, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideEnvironmentNgxMask } from 'ngx-mask';


import { routes } from './app.routes';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { combinedInitializer } from './core/initializers/app-initializer';
import { addWithCredentialsInterceptor } from './auth/interceptors/add-with-credentials.interceptor';
import { addAccessTokenInterceptor } from './auth/interceptors/add-access-token.interceptor';
import { refreshTokenInterceptor } from './auth/interceptors/refresh-token.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection(
      {
        eventCoalescing: true
      }
    ),
    provideRouter(routes),
    provideEnvironmentNgxMask(),
    provideHttpClient(
      withFetch(),
      withInterceptors([
        addWithCredentialsInterceptor,
        addAccessTokenInterceptor,
        refreshTokenInterceptor
      ])
    ),
    provideAppInitializer(combinedInitializer)
  ]
};
