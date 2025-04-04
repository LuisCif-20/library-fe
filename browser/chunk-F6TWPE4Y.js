import {
  NgClass,
  input,
  output,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction4,
  ɵɵtext
} from "./chunk-XTEA2TIV.js";

// src/app/shared/components/modal/modal.component.ts
var _c0 = [[["", "body", ""]]];
var _c1 = ["[body]"];
var _c2 = (a0, a1, a2, a3) => ({ "w-75 md:w-150": a0, "max-w-75 md:max-w-150": a1, "h-135": a2, "max-h-135": a3 });
var ModalComponent = class _ModalComponent {
  fullWidth = input(false);
  fullHeight = input(false);
  closeModal = output();
  static \u0275fac = function ModalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ModalComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ModalComponent, selectors: [["app-modal"]], inputs: { fullWidth: [1, "fullWidth"], fullHeight: [1, "fullHeight"] }, outputs: { closeModal: "closeModal" }, ngContentSelectors: _c1, decls: 7, vars: 6, consts: [[1, "fixed", "inset-0", "bg-black/50", "z-10", "overflow-y-auto", 3, "click"], [1, "min-h-screen", "flex", "items-center", "justify-center", "p-[35px]"], [1, "relative", "bg-base-200", "p-5", "rounded-lg", "shadow-lg", "md:ml-75", 3, "click", "ngClass"], [1, "absolute", "top-1", "right-1", "btn", "btn-circle", "btn-ghost", "scale-75", 3, "click"], [1, "material-icons"]], template: function ModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef(_c0);
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275listener("click", function ModalComponent_Template_div_click_0_listener() {
        return ctx.closeModal.emit();
      });
      \u0275\u0275elementStart(1, "div", 1)(2, "div", 2);
      \u0275\u0275listener("click", function ModalComponent_Template_div_click_2_listener($event) {
        return $event.stopPropagation();
      });
      \u0275\u0275projection(3);
      \u0275\u0275elementStart(4, "button", 3);
      \u0275\u0275listener("click", function ModalComponent_Template_button_click_4_listener() {
        return ctx.closeModal.emit();
      });
      \u0275\u0275elementStart(5, "span", 4);
      \u0275\u0275text(6, "close");
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction4(1, _c2, ctx.fullWidth(), !ctx.fullWidth(), ctx.fullHeight(), !ctx.fullHeight()));
    }
  }, dependencies: [NgClass], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ModalComponent, { className: "ModalComponent", filePath: "src/app/shared/components/modal/modal.component.ts", lineNumber: 12 });
})();

export {
  ModalComponent
};
//# sourceMappingURL=chunk-F6TWPE4Y.js.map
