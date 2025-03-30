import { inject } from "@angular/core";

import { patchState, signalStore, withMethods, withProps, withState } from "@ngrx/signals";
import { mapResponse, tapResponse } from "@ngrx/operators";

import { AuthService } from "../services/auth.service";
import { AuthState, AuthStatus } from "../interfaces/auth.store.interface";
import { catchError, Observable, of, switchMap } from "rxjs";
import { AuthResponse, Login } from "../interfaces/auth.interface";
import { UserService } from "../services/user.service";

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
        catchError(() => of(false))
      )
    },
    login(body: Login): Observable<boolean> {
      return this.processAuthReq(authService.login(body));
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
