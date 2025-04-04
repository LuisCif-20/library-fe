import {
  DefaultValueAccessor,
  FormControlDirective,
  NgControlStatus,
  NonNullableFormBuilder,
  RadioControlValueAccessor,
  ReactiveFormsModule
} from "./chunk-CM5EFMYB.js";
import {
  inject,
  input,
  output,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-XTEA2TIV.js";

// src/app/shared/components/pagination/pagination.component.ts
var PaginationComponent = class _PaginationComponent {
  page = input.required();
  hasNext = input.required();
  hasPrevious = input.required();
  next = output();
  previous = output();
  static \u0275fac = function PaginationComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PaginationComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PaginationComponent, selectors: [["app-pagination"]], inputs: { page: [1, "page"], hasNext: [1, "hasNext"], hasPrevious: [1, "hasPrevious"] }, outputs: { next: "next", previous: "previous" }, decls: 12, vars: 3, consts: [[1, "flex", "flex-col", "md:flex-row", "md:items-center"], [1, "mr-5"], [1, "join"], [1, "join-item", "btn", 3, "click", "disabled"], [1, "material-icons"], [1, "join-item", "btn"]], template: function PaginationComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "span", 1);
      \u0275\u0275text(2, "Pagina:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "div", 2)(4, "button", 3);
      \u0275\u0275listener("click", function PaginationComponent_Template_button_click_4_listener() {
        return ctx.previous.emit();
      });
      \u0275\u0275elementStart(5, "span", 4);
      \u0275\u0275text(6, "keyboard_double_arrow_left");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "button", 5);
      \u0275\u0275text(8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "button", 3);
      \u0275\u0275listener("click", function PaginationComponent_Template_button_click_9_listener() {
        return ctx.next.emit();
      });
      \u0275\u0275elementStart(10, "span", 4);
      \u0275\u0275text(11, "keyboard_double_arrow_right");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275property("disabled", !ctx.hasPrevious());
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.page() + 1);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", !ctx.hasNext());
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PaginationComponent, { className: "PaginationComponent", filePath: "src/app/shared/components/pagination/pagination.component.ts", lineNumber: 9 });
})();

// src/app/shared/components/items-per-page/items-per-page.component.ts
var ItemsPerPageComponent = class _ItemsPerPageComponent {
  size = input(5);
  setSize = output();
  formBuilder = inject(NonNullableFormBuilder);
  subs;
  sizeSelected = this.formBuilder.control(this.size());
  ngOnInit() {
    this.subs = this.sizeSelected.valueChanges.subscribe({
      next: (value) => this.setSize.emit(value)
    });
  }
  ngOnDestroy() {
    this.subs?.unsubscribe();
  }
  static \u0275fac = function ItemsPerPageComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ItemsPerPageComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ItemsPerPageComponent, selectors: [["items-per-page"]], inputs: { size: [1, "size"] }, outputs: { setSize: "setSize" }, decls: 8, vars: 8, consts: [[1, "flex", "flex-col", "md:flex-row", "md:items-center"], [1, "mr-5"], [1, "join"], ["type", "radio", "aria-label", "5", 1, "join-item", "btn", "btn-square", 3, "value", "formControl"], ["type", "radio", "aria-label", "10", 1, "join-item", "btn", "btn-square", 3, "value", "formControl"], ["type", "radio", "aria-label", "15", 1, "join-item", "btn", "btn-square", 3, "value", "formControl"], ["type", "radio", "aria-label", "20", 1, "join-item", "btn", "btn-square", 3, "value", "formControl"]], template: function ItemsPerPageComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "span", 1);
      \u0275\u0275text(2, "Mostrar:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "div", 2);
      \u0275\u0275element(4, "input", 3)(5, "input", 4)(6, "input", 5)(7, "input", 6);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275property("value", 5)("formControl", ctx.sizeSelected);
      \u0275\u0275advance();
      \u0275\u0275property("value", 10)("formControl", ctx.sizeSelected);
      \u0275\u0275advance();
      \u0275\u0275property("value", 15)("formControl", ctx.sizeSelected);
      \u0275\u0275advance();
      \u0275\u0275property("value", 20)("formControl", ctx.sizeSelected);
    }
  }, dependencies: [ReactiveFormsModule, DefaultValueAccessor, RadioControlValueAccessor, NgControlStatus, FormControlDirective], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ItemsPerPageComponent, { className: "ItemsPerPageComponent", filePath: "src/app/shared/components/items-per-page/items-per-page.component.ts", lineNumber: 13 });
})();

export {
  PaginationComponent,
  ItemsPerPageComponent
};
//# sourceMappingURL=chunk-6WHIMD2A.js.map
