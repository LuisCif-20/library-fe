import {
  environment
} from "./chunk-QS57EMBJ.js";
import {
  HttpClient
} from "./chunk-EHYTAPE2.js";
import {
  catchError,
  computed,
  inject,
  map,
  signal,
  throwError,
  ɵɵdefineInjectable
} from "./chunk-XTEA2TIV.js";

// src/app/core/services/configuration.service.ts
var ConfigurationService = class _ConfigurationService {
  configurationUrl = `${environment.API_URL}/configuration`;
  http = inject(HttpClient);
  _configuration = signal(null);
  configuration = computed(() => this._configuration());
  constructor() {
  }
  processRequest(req) {
    return req.pipe(map((configuration) => {
      this._configuration.set(configuration);
      return true;
    }), catchError((error) => throwError(() => error)));
  }
  getConfiguration() {
    return this.processRequest(this.http.get(this.configurationUrl));
  }
  updateConfiguration(data) {
    const formData = new FormData();
    Object.keys(data).forEach((key) => {
      const value = data[key];
      if (value) {
        value instanceof Blob ? formData.append(key, value) : formData.append(key, value.toString());
      }
    });
    return this.processRequest(this.http.put(this.configurationUrl, formData));
  }
  static \u0275fac = function ConfigurationService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ConfigurationService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ConfigurationService, factory: _ConfigurationService.\u0275fac, providedIn: "root" });
};

export {
  ConfigurationService
};
//# sourceMappingURL=chunk-JHHWBRG2.js.map
