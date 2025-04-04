import {
  computed,
  signal,
  ɵɵdefineInjectable
} from "./chunk-XTEA2TIV.js";

// src/app/shared/services/alert.service.ts
var AlertService = class _AlertService {
  _alert = signal(null);
  alert = computed(() => this._alert());
  constructor() {
  }
  showAlert(message, type) {
    const icon = type === "success" ? "task_alt" : type;
    this._alert.set({ message, type, icon });
    setTimeout(() => {
      this._alert.set(null);
    }, 2500);
  }
  static \u0275fac = function AlertService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AlertService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AlertService, factory: _AlertService.\u0275fac, providedIn: "root" });
};

export {
  AlertService
};
//# sourceMappingURL=chunk-VVQ2XORH.js.map
