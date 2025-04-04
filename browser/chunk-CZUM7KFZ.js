import {
  FormControlDirective,
  NgControlStatus,
  NgSelectOption,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-CM5EFMYB.js";
import {
  NgClass,
  input,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-XTEA2TIV.js";

// src/app/forms/components/select-input/select-input.component.ts
var _c0 = (a0) => ({ "text-error": a0 });
var _c1 = (a0) => ({ "input-error": a0 });
function SelectInputComponent_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 4);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r1 = ctx.$implicit;
    \u0275\u0275property("value", option_r1.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(option_r1.label);
  }
}
function SelectInputComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 5);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.label());
  }
}
var SelectInputComponent = class _SelectInputComponent {
  control = input.required();
  options = input.required();
  legend = input.required();
  placeholder = input("Selecciona una opcion...");
  label = input("");
  constructor() {
  }
  get isInvalid() {
    return this.control().invalid && (this.control().touched || this.control().dirty);
  }
  static \u0275fac = function SelectInputComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SelectInputComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SelectInputComponent, selectors: [["select-input"]], inputs: { control: [1, "control"], options: [1, "options"], legend: [1, "legend"], placeholder: [1, "placeholder"], label: [1, "label"] }, decls: 9, vars: 11, consts: [[1, "fieldset"], [1, "fieldset-legend", 3, "ngClass"], [1, "select", 3, "ngClass", "formControl"], ["value", "", "disabled", "", 3, "selected"], [3, "value"], [1, "fieldset-label", "text-error", "text-[8px]"]], template: function SelectInputComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "fieldset", 0)(1, "legend", 1);
      \u0275\u0275text(2);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "select", 2)(4, "option", 3);
      \u0275\u0275text(5);
      \u0275\u0275elementEnd();
      \u0275\u0275repeaterCreate(6, SelectInputComponent_For_7_Template, 2, 2, "option", 4, \u0275\u0275repeaterTrackByIndex);
      \u0275\u0275elementEnd();
      \u0275\u0275template(8, SelectInputComponent_Conditional_8_Template, 2, 1, "p", 5);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(7, _c0, ctx.isInvalid));
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(ctx.legend());
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(9, _c1, ctx.isInvalid))("formControl", ctx.control());
      \u0275\u0275advance();
      \u0275\u0275property("selected", ctx.control().value === "");
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(ctx.placeholder());
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.options());
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.label() && ctx.isInvalid ? 8 : -1);
    }
  }, dependencies: [
    NgClass,
    ReactiveFormsModule,
    NgSelectOption,
    \u0275NgSelectMultipleOption,
    SelectControlValueAccessor,
    NgControlStatus,
    FormControlDirective
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SelectInputComponent, { className: "SelectInputComponent", filePath: "src/app/forms/components/select-input/select-input.component.ts", lineNumber: 16 });
})();

export {
  SelectInputComponent
};
//# sourceMappingURL=chunk-CZUM7KFZ.js.map
