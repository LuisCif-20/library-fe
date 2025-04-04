import {
  environment
} from "./chunk-QS57EMBJ.js";
import {
  HttpClient,
  HttpParams
} from "./chunk-EHYTAPE2.js";
import {
  catchError,
  inject,
  throwError,
  ɵɵdefineInjectable
} from "./chunk-XTEA2TIV.js";

// src/app/library/services/author.service.ts
var AuthorService = class _AuthorService {
  AUTHOR_URL = `${environment.API_URL}/authors`;
  httpClient = inject(HttpClient);
  constructor() {
  }
  getAuthors(page, size) {
    let params = new HttpParams();
    if (page != void 0 && page >= 0) {
      params = params.set("page", page);
    }
    if (size && size >= 1) {
      params = params.set("size", size);
    }
    return this.httpClient.get(this.AUTHOR_URL, { params });
  }
  createAuthor(body) {
    return this.httpClient.post(this.AUTHOR_URL, body).pipe(catchError((error) => throwError(() => error)));
  }
  updateAuthor(id, body) {
    const url = `${this.AUTHOR_URL}/${id}`;
    return this.httpClient.put(url, body).pipe(catchError((error) => throwError(() => error)));
  }
  deleteAuthor(id) {
    const url = `${this.AUTHOR_URL}/${id}`;
    return this.httpClient.delete(url).pipe(catchError((error) => throwError(() => error)));
  }
  static \u0275fac = function AuthorService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuthorService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthorService, factory: _AuthorService.\u0275fac, providedIn: "root" });
};

export {
  AuthorService
};
//# sourceMappingURL=chunk-CERM4BQR.js.map
