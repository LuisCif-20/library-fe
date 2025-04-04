import {
  NgxMaskDirective
} from "./chunk-XHQ3PMRC.js";
import {
  DefaultValueAccessor,
  FormControlDirective,
  NgControlStatus,
  ReactiveFormsModule
} from "./chunk-CM5EFMYB.js";
import {
  NgClass,
  input,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-XTEA2TIV.js";

// src/app/forms/components/text-input/text-input.component.ts
var _c0 = (a0) => ({ "text-error": a0 });
var _c1 = (a0) => ({ "input-error": a0 });
function TextInputComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 3);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.label());
  }
}
var TextInputComponent = class _TextInputComponent {
  control = input.required();
  legend = input.required();
  type = input("text");
  placeholder = input();
  label = input();
  mask = input();
  dropCharacter = input(true);
  min = input(0);
  max = input(0);
  step = input(1);
  disabled = input(false);
  constructor() {
  }
  get isInvalid() {
    return this.control().invalid && (this.control().touched || this.control().dirty);
  }
  static \u0275fac = function TextInputComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TextInputComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TextInputComponent, selectors: [["text-input"]], inputs: { control: [1, "control"], legend: [1, "legend"], type: [1, "type"], placeholder: [1, "placeholder"], label: [1, "label"], mask: [1, "mask"], dropCharacter: [1, "dropCharacter"], min: [1, "min"], max: [1, "max"], step: [1, "step"], disabled: [1, "disabled"] }, decls: 5, vars: 17, consts: [[1, "fieldset", 3, "disabled"], [1, "fieldset-legend", 3, "ngClass"], [1, "input", 3, "type", "formControl", "placeholder", "ngClass", "mask", "dropSpecialCharacters", "min", "max", "step"], [1, "fieldset-label", "text-error", "text-[8px]"]], template: function TextInputComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "fieldset", 0)(1, "legend", 1);
      \u0275\u0275text(2);
      \u0275\u0275elementEnd();
      \u0275\u0275element(3, "input", 2);
      \u0275\u0275template(4, TextInputComponent_Conditional_4_Template, 2, 1, "p", 3);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275property("disabled", ctx.disabled());
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(13, _c0, ctx.isInvalid));
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(ctx.legend());
      \u0275\u0275advance();
      \u0275\u0275property("type", ctx.type())("formControl", ctx.control())("placeholder", ctx.placeholder())("ngClass", \u0275\u0275pureFunction1(15, _c1, ctx.isInvalid))("mask", ctx.mask())("dropSpecialCharacters", ctx.dropCharacter())("min", ctx.min())("max", ctx.max())("step", ctx.step());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.label() && ctx.isInvalid ? 4 : -1);
    }
  }, dependencies: [
    NgClass,
    ReactiveFormsModule,
    DefaultValueAccessor,
    NgControlStatus,
    FormControlDirective,
    NgxMaskDirective
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TextInputComponent, { className: "TextInputComponent", filePath: "src/app/forms/components/text-input/text-input.component.ts", lineNumber: 19 });
})();

export {
  TextInputComponent
};
//# sourceMappingURL=chunk-TBE3URDR.js.map
