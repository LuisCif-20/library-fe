import {
  environment
} from "./chunk-QBPE6MBL.js";
import {
  HttpClient
} from "./chunk-EHYTAPE2.js";
import {
  catchError,
  inject,
  map,
  throwError,
  ɵɵdefineInjectable
} from "./chunk-XTEA2TIV.js";

// src/app/auth/services/auth.service.ts
var AuthService = class _AuthService {
  AUTH_URL = `${environment.API_URL}/auth`;
  httpClient = inject(HttpClient);
  constructor() {
  }
  login(body) {
    const url = `${this.AUTH_URL}/login`;
    return this.httpClient.post(url, body);
  }
  logout() {
    const url = `${this.AUTH_URL}/logout`;
    return this.httpClient.post(url, null);
  }
  register(body) {
    const url = `${this.AUTH_URL}/register`;
    return this.httpClient.post(url, body).pipe(map(() => true), catchError((error) => throwError(() => error)));
  }
  refreshToken() {
    const url = `${this.AUTH_URL}/refresh`;
    return this.httpClient.post(url, null);
  }
  static \u0275fac = function AuthService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuthService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthService, factory: _AuthService.\u0275fac, providedIn: "root" });
};

export {
  AuthService
};
//# sourceMappingURL=chunk-M62AKXZU.js.map
