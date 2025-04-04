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

// src/app/library/services/publisher.service.ts
var PublisherService = class _PublisherService {
  PUBLISHER_URL = `${environment.API_URL}/publishers`;
  httpClient = inject(HttpClient);
  constructor() {
  }
  getPublishers(page, size) {
    let params = new HttpParams();
    if (page != void 0 && page >= 0) {
      params = params.set("page", page);
    }
    if (size && size >= 1) {
      params = params.set("size", size);
    }
    return this.httpClient.get(this.PUBLISHER_URL, { params });
  }
  createPublisher(body) {
    return this.httpClient.post(this.PUBLISHER_URL, body).pipe(catchError((error) => throwError(() => error)));
  }
  updatePublisher(id, body) {
    const url = `${this.PUBLISHER_URL}/${id}`;
    return this.httpClient.put(url, body).pipe(catchError((error) => throwError(() => error)));
  }
  deletePublisher(id) {
    const url = `${this.PUBLISHER_URL}/${id}`;
    return this.httpClient.delete(url).pipe(catchError((error) => throwError(() => error)));
  }
  static \u0275fac = function PublisherService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PublisherService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PublisherService, factory: _PublisherService.\u0275fac, providedIn: "root" });
};

export {
  PublisherService
};
//# sourceMappingURL=chunk-PV6T3JMZ.js.map
