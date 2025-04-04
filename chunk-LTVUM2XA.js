import {
  ReactiveFormsModule
} from "./chunk-CM5EFMYB.js";
import {
  NgClass,
  input,
  output,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-XTEA2TIV.js";

// src/app/forms/components/image-input/image-input.component.ts
var _c0 = (a0) => ({ "text-error": a0 });
var _c1 = (a0) => ({ "input-error": a0 });
function ImageInputComponent_Conditional_4_Template(rf, ctx) {
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
var ImageInputComponent = class _ImageInputComponent {
  control = input.required();
  legend = input.required();
  placeholder = input();
  label = input();
  imageUrl = output();
  constructor() {
  }
  get isInvalid() {
    return this.control().invalid && (this.control().touched || this.control().dirty);
  }
  catchImage(event) {
    const fileList = event.target.files;
    if (fileList) {
      const file = fileList[0];
      if (file) {
        this.imageUrl.emit(URL.createObjectURL(file));
        this.control().setValue(file);
      }
    }
  }
  static \u0275fac = function ImageInputComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ImageInputComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ImageInputComponent, selectors: [["image-input"]], inputs: { control: [1, "control"], legend: [1, "legend"], placeholder: [1, "placeholder"], label: [1, "label"] }, outputs: { imageUrl: "imageUrl" }, decls: 5, vars: 8, consts: [[1, "fieldset"], [1, "fieldset-legend", 3, "ngClass"], ["type", "file", 1, "file-input", 3, "change", "ngClass"], [1, "fieldset-label", "text-error", "text-[8px]"]], template: function ImageInputComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "fieldset", 0)(1, "legend", 1);
      \u0275\u0275text(2);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "input", 2);
      \u0275\u0275listener("change", function ImageInputComponent_Template_input_change_3_listener($event) {
        return ctx.catchImage($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(4, ImageInputComponent_Conditional_4_Template, 2, 1, "p", 3);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(4, _c0, ctx.isInvalid));
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(ctx.legend());
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(6, _c1, ctx.isInvalid));
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.label() && ctx.isInvalid ? 4 : -1);
    }
  }, dependencies: [
    NgClass,
    ReactiveFormsModule
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ImageInputComponent, { className: "ImageInputComponent", filePath: "src/app/forms/components/image-input/image-input.component.ts", lineNumber: 14 });
})();

export {
  ImageInputComponent
};
//# sourceMappingURL=chunk-LTVUM2XA.js.map
