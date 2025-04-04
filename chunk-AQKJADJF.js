import {
  AuthService
} from "./chunk-M62AKXZU.js";
import {
  patchState,
  signalStore,
  withMethods,
  withProps,
  withState
} from "./chunk-OJMWA2H5.js";
import {
  environment
} from "./chunk-QBPE6MBL.js";
import {
  HttpClient
} from "./chunk-EHYTAPE2.js";
import {
  EMPTY,
  __objRest,
  catchError,
  finalize,
  inject,
  map,
  of,
  switchMap,
  tap,
  throwError,
  ɵɵdefineInjectable
} from "./chunk-XTEA2TIV.js";

// node_modules/@ngrx/operators/fesm2022/ngrx-operators.mjs
function mapResponse(observer) {
  return (source$) => source$.pipe(map((value) => observer.next(value)), catchError((error) => of(observer.error(error))));
}
function tapResponse(observerOrNext, error, complete) {
  const observer = typeof observerOrNext === "function" ? {
    next: observerOrNext,
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    error,
    complete
  } : observerOrNext;
  return (source) => source.pipe(tap({
    next: observer.next,
    complete: observer.complete
  }), catchError((error2) => {
    observer.error(error2);
    return EMPTY;
  }), observer.finalize ? finalize(observer.finalize) : (source$) => source$);
}

// src/app/auth/interfaces/auth.store.interface.ts
var AuthStatus;
(function(AuthStatus2) {
  AuthStatus2[AuthStatus2["CHECKING"] = 0] = "CHECKING";
  AuthStatus2[AuthStatus2["AUTHENTICATED"] = 1] = "AUTHENTICATED";
  AuthStatus2[AuthStatus2["NOT_AUTHENTICATED"] = 2] = "NOT_AUTHENTICATED";
})(AuthStatus || (AuthStatus = {}));

// src/app/auth/services/user.service.ts
var UserService = class _UserService {
  USER_URL = `${environment.API_URL}/users`;
  httpClient = inject(HttpClient);
  constructor() {
  }
  getUserInfo() {
    const url = `${this.USER_URL}/me`;
    return this.httpClient.get(url);
  }
  static \u0275fac = function UserService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UserService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _UserService, factory: _UserService.\u0275fac, providedIn: "root" });
};

// src/app/auth/stores/auth.store.ts
var initialState = {
  user: null,
  accessToken: null,
  authStatus: AuthStatus.CHECKING
};
var AuthStore = signalStore({
  providedIn: "root"
}, withState(initialState), withProps(() => ({
  authService: inject(AuthService),
  userService: inject(UserService)
})), withMethods((_a) => {
  var _b = _a, { authService, userService } = _b, store = __objRest(_b, ["authService", "userService"]);
  return {
    processAuthReq(req) {
      return req.pipe(switchMap(({ token }) => {
        patchState(store, { accessToken: token });
        return userService.getUserInfo().pipe(mapResponse({
          next: (user) => {
            patchState(store, { user, authStatus: AuthStatus.AUTHENTICATED });
            return true;
          },
          error: () => {
            patchState(store, { accessToken: null });
            return false;
          }
        }));
      }), catchError(() => {
        patchState(store, { authStatus: AuthStatus.NOT_AUTHENTICATED });
        return of(false);
      }));
    },
    login(body) {
      return this.processAuthReq(authService.login(body));
    },
    logout() {
      return authService.logout().pipe(tapResponse({
        next: () => patchState(store, { user: null, accessToken: null, authStatus: AuthStatus.NOT_AUTHENTICATED }),
        error: (error) => throwError(() => error)
      }));
    },
    checkAuth() {
      return this.processAuthReq(authService.refreshToken());
    },
    refreshToken() {
      return authService.refreshToken().pipe(tapResponse({
        next: ({ token }) => patchState(store, { accessToken: token }),
        error: () => patchState(store, { accessToken: null, user: null, authStatus: AuthStatus.NOT_AUTHENTICATED })
      }));
    }
  };
}));

export {
  AuthStatus,
  AuthStore
};
//# sourceMappingURL=chunk-AQKJADJF.js.map
