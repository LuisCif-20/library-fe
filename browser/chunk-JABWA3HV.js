import {
  ElementRef,
  Renderer2,
  inject,
  signal,
  ɵɵdefineDirective,
  ɵɵlistener
} from "./chunk-XTEA2TIV.js";

// src/app/shared/directives/hover-style.directive.ts
var HoverStyleDirective = class _HoverStyleDirective {
  outlinedClass = "material-icons-outlined";
  filledClass = "material-icons";
  element = inject(ElementRef);
  renderer = inject(Renderer2);
  span = signal(null);
  constructor() {
  }
  ngOnInit() {
    this.span.set(this.element.nativeElement.querySelector("span"));
    if (this.span()) {
      this.renderer.addClass(this.span(), this.outlinedClass);
    }
  }
  toggleOutline(isMouseOutside) {
    if (!this.span())
      return;
    const classToAdd = isMouseOutside ? this.outlinedClass : this.filledClass;
    const classToRemove = isMouseOutside ? this.filledClass : this.outlinedClass;
    this.renderer.removeClass(this.span(), classToRemove);
    this.renderer.addClass(this.span(), classToAdd);
  }
  onMouseEnter() {
    this.toggleOutline(false);
  }
  onMouseLeave() {
    this.toggleOutline(true);
  }
  static \u0275fac = function HoverStyleDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HoverStyleDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _HoverStyleDirective, selectors: [["", "hoverStyle", ""]], hostBindings: function HoverStyleDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("mouseenter", function HoverStyleDirective_mouseenter_HostBindingHandler() {
        return ctx.onMouseEnter();
      })("mouseleave", function HoverStyleDirective_mouseleave_HostBindingHandler() {
        return ctx.onMouseLeave();
      });
    }
  } });
};

export {
  HoverStyleDirective
};
//# sourceMappingURL=chunk-JABWA3HV.js.map
