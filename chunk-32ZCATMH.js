import {
  computed,
  signal,
  ɵɵdefineInjectable
} from "./chunk-XTEA2TIV.js";

// src/app/theme/services/theme.service.ts
var ThemeService = class _ThemeService {
  isDarkTheme = signal(false);
  theme = computed(() => {
    const isDarkTheme = this.isDarkTheme();
    return {
      icon: isDarkTheme ? "light_mode" : "dark_mode",
      label: isDarkTheme ? "Modo Claro" : "Modo Oscuro"
    };
  });
  constructor() {
  }
  toggleTheme() {
    this.isDarkTheme.update((value) => !value);
    localStorage.setItem("theme", this.isDarkTheme() ? "dark" : "light");
    this.updateTheme();
  }
  updateTheme() {
    const body = document.body;
    this.isDarkTheme() ? body.setAttribute("data-theme", "dark") : body.setAttribute("data-theme", "light");
  }
  loadUserTheme() {
    const savedTheme = localStorage.getItem("theme");
    this.isDarkTheme.set(savedTheme ? savedTheme === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches);
    this.updateTheme();
  }
  static \u0275fac = function ThemeService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ThemeService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ThemeService, factory: _ThemeService.\u0275fac, providedIn: "root" });
};

export {
  ThemeService
};
//# sourceMappingURL=chunk-32ZCATMH.js.map
