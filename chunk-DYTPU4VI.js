import {
  environment
} from "./chunk-QBPE6MBL.js";
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

// src/app/library/services/book.service.ts
var BookService = class _BookService {
  BOOK_URL = `${environment.API_URL}/books`;
  httpClient = inject(HttpClient);
  constructor() {
  }
  getBooks(filters) {
    let params = new HttpParams();
    Object.entries(filters).forEach(([key, value]) => {
      if (value !== null && value !== void 0 && value !== "") {
        Array.isArray(value) ? params = params.set(key, value.join(",")) : params = params.set(key, value.toString());
      }
    });
    return this.httpClient.get(this.BOOK_URL, { params });
  }
  getBookById(id) {
    const url = `${this.BOOK_URL}/${id}`;
    return this.httpClient.get(url);
  }
  createBook(body) {
    const formData = new FormData();
    Object.keys(body).forEach((key) => {
      const value = body[key];
      value instanceof Blob && value ? formData.append(key, value) : formData.append(key, value.toString());
    });
    return this.httpClient.post(this.BOOK_URL, formData).pipe(catchError((error) => throwError(() => error)));
  }
  updateBook(id, body) {
    const formData = new FormData();
    Object.keys(body).forEach((key) => {
      const value = body[key];
      if (value) {
        value instanceof Blob ? formData.append(key, value) : formData.append(key, value.toString());
      }
    });
    const url = `${this.BOOK_URL}/${id}`;
    return this.httpClient.put(url, formData).pipe(catchError((error) => throwError(() => error)));
  }
  deleteBook(id) {
    const url = `${this.BOOK_URL}/${id}`;
    return this.httpClient.delete(url).pipe(catchError((error) => throwError(() => error)));
  }
  static \u0275fac = function BookService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BookService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _BookService, factory: _BookService.\u0275fac, providedIn: "root" });
};

export {
  BookService
};
//# sourceMappingURL=chunk-DYTPU4VI.js.map
