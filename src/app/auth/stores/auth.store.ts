import { inject } from "@angular/core";

import { patchState, signalStore, withMethods, withProps, withState } from "@ngrx/signals";
import { mapResponse, tapResponse } from "@ngrx/operators";

import { AuthService } from "../services/auth.service";
import { AuthState, AuthStatus } from "../interfaces/auth.store.interface";
import { catchError, Observable, of, switchMap, throwError } from "rxjs";
import { AuthResponse, Login } from "../interfaces/auth.interface";
import { UserService } from "../services/user.service";
import { HttpErrorResponse } from "@angular/common/http";

const initialState: AuthState = {
  user: null,
  accessToken: null,
  authStatus: AuthStatus.CHECKING
}

export const AuthStore = signalStore(
  {
    providedIn: 'root'
  },
  withState<AuthState>(initialState),
  withProps(() => ({
    authService: inject(AuthService),
    userService: inject(UserService)
  })),
  withMethods(({ authService, userService, ...store }) => ({
    processAuthReq(req: Observable<AuthResponse>): Observable<boolean> {
      return req.pipe(
        switchMap(({ token }) => {
          patchState(store, { accessToken: token });
          return userService.getUserInfo().pipe(
            mapResponse({
              next: (user) => {
                patchState(store, { user, authStatus: AuthStatus.AUTHENTICATED });
                return true;
              },
              error: () => {
                patchState(store, { accessToken: null });
                return false;
              }
            })
          )
        }),
        catchError(() => {
          patchState(store, { authStatus: AuthStatus.NOT_AUTHENTICATED })
          return of(false);
        })
      )
    },
    login(body: Login): Observable<boolean> {
      return this.processAuthReq(authService.login(body));
    },
    logout(): Observable<void> {
      return authService.logout().pipe(
        tapResponse({
          next: () => patchState(store, { user: null, accessToken: null, authStatus: AuthStatus.NOT_AUTHENTICATED }),
          error: (error: HttpErrorResponse) => throwError(() => error)
        })
      );
    },
    checkAuth(): Observable<boolean> {
      return this.processAuthReq(authService.refreshToken());
    },
    refreshToken(): Observable<AuthResponse> {
      return authService.refreshToken().pipe(
        tapResponse({
          next: ({ token }) => patchState(store, { accessToken: token }),
          error: () => patchState(store, { accessToken: null, user: null, authStatus: AuthStatus.NOT_AUTHENTICATED })
        })
      )
    }
  }))
)
