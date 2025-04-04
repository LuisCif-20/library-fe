import {
  ThemeService
} from "./chunk-32ZCATMH.js";
import {
  HoverStyleDirective
} from "./chunk-JABWA3HV.js";
import {
  NgClass,
  computed,
  inject,
  input,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-XTEA2TIV.js";

// src/app/shared/interfaces/position.types.ts
var POSITION_VARIANTS = {
  top: "tooltip-top",
  left: "tooltip-left",
  right: "tooltip-right",
  bottom: "tooltip-bottom"
};

// src/app/theme/components/theme-switcher/theme-switcher.component.ts
var ThemeSwitcherComponent = class _ThemeSwitcherComponent {
  tooltipPosition = input("bottom");
  themeService = inject(ThemeService);
  theme = computed(() => this.themeService.theme());
  positionClass = computed(() => POSITION_VARIANTS[this.tooltipPosition()]);
  constructor() {
  }
  onToggleTheme() {
    this.themeService.toggleTheme();
  }
  static \u0275fac = function ThemeSwitcherComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ThemeSwitcherComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ThemeSwitcherComponent, selectors: [["theme-switcher"]], inputs: { tooltipPosition: [1, "tooltipPosition"] }, decls: 4, vars: 3, consts: [[1, "tooltip", 3, "ngClass"], ["hoverStyle", "", 1, "btn", "btn-circle", "bg-transparent", "border-none", "shadow-none", 3, "click"], [1, "text-white"]], template: function ThemeSwitcherComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "button", 1);
      \u0275\u0275listener("click", function ThemeSwitcherComponent_Template_button_click_1_listener() {
        return ctx.onToggleTheme();
      });
      \u0275\u0275elementStart(2, "span", 2);
      \u0275\u0275text(3);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275property("ngClass", ctx.positionClass());
      \u0275\u0275attribute("data-tip", ctx.theme().label);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.theme().icon);
    }
  }, dependencies: [
    NgClass,
    HoverStyleDirective
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ThemeSwitcherComponent, { className: "ThemeSwitcherComponent", filePath: "src/app/theme/components/theme-switcher/theme-switcher.component.ts", lineNumber: 17 });
})();

export {
  ThemeSwitcherComponent
};
//# sourceMappingURL=chunk-Y2IFBUIC.js.map
