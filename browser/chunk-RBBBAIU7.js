import {
  RouterLink
} from "./chunk-7L6NANUY.js";
import {
  HoverStyleDirective
} from "./chunk-JABWA3HV.js";
import {
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵtext
} from "./chunk-XTEA2TIV.js";

// src/app/shared/components/home-button/home-button.component.ts
var HomeButtonComponent = class _HomeButtonComponent {
  static \u0275fac = function HomeButtonComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HomeButtonComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HomeButtonComponent, selectors: [["home-button"]], decls: 4, vars: 0, consts: [["data-tip", "Ir a Inicio", 1, "tooltip", "tooltip-bottom"], ["hoverStyle", "", "routerLink", "/", 1, "btn", "btn-circle", "btn-secondary", "text-white"]], template: function HomeButtonComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "button", 1)(2, "span");
      \u0275\u0275text(3, "home");
      \u0275\u0275elementEnd()()();
    }
  }, dependencies: [
    RouterLink,
    HoverStyleDirective
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HomeButtonComponent, { className: "HomeButtonComponent", filePath: "src/app/shared/components/home-button/home-button.component.ts", lineNumber: 15 });
})();

export {
  HomeButtonComponent
};
//# sourceMappingURL=chunk-RBBBAIU7.js.map
