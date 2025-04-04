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

// src/app/shared/services/degree.service.ts
var DegreeService = class _DegreeService {
  DEGREE_URL = `${environment.API_URL}/degrees`;
  httpClient = inject(HttpClient);
  constructor() {
  }
  getDegrees(page, size) {
    let params = new HttpParams();
    if (page != void 0 && page >= 0) {
      params = params.set("page", page);
    }
    if (size && size >= 1) {
      params = params.set("size", size);
    }
    return this.httpClient.get(this.DEGREE_URL, { params });
  }
  createDegree(body) {
    return this.httpClient.post(this.DEGREE_URL, body).pipe(catchError((error) => throwError(() => error)));
  }
  updateDegree(id, body) {
    const url = `${this.DEGREE_URL}/${id}`;
    return this.httpClient.put(url, body).pipe(catchError((error) => throwError(() => error)));
  }
  deleteDegree(id) {
    const url = `${this.DEGREE_URL}/${id}`;
    return this.httpClient.delete(url).pipe(catchError((error) => throwError(() => error)));
  }
  static \u0275fac = function DegreeService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DegreeService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _DegreeService, factory: _DegreeService.\u0275fac, providedIn: "root" });
};

export {
  DegreeService
};
//# sourceMappingURL=chunk-ZWKJZWXZ.js.map
