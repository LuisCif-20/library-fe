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

// src/app/library/services/reservation.service.ts
var ReservationService = class _ReservationService {
  RESERV_URL = `${environment.API_URL}/reservations`;
  httpClient = inject(HttpClient);
  constructor() {
  }
  getMyRerservations(page, size) {
    let params = new HttpParams();
    if (page != void 0 && page >= 0) {
      params = params.set("page", page);
    }
    if (size && size >= 1) {
      params = params.set("size", size);
    }
    const url = `${environment.API_URL}/me`;
    return this.httpClient.get(url, { params });
  }
  createReservation(bookId) {
    return this.httpClient.post(this.RESERV_URL, { bookId }).pipe(catchError((error) => throwError(() => error)));
  }
  static \u0275fac = function ReservationService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ReservationService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ReservationService, factory: _ReservationService.\u0275fac, providedIn: "root" });
};

export {
  ReservationService
};
//# sourceMappingURL=chunk-64AIT5GY.js.map
