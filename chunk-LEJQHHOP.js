import {
  checkAuthGuard
} from "./chunk-S6LEFLHM.js";
import "./chunk-2SQF422D.js";
import "./chunk-6FVHQWOD.js";
import {
  RouterOutlet
} from "./chunk-7L6NANUY.js";
import "./chunk-OJMWA2H5.js";
import "./chunk-QS57EMBJ.js";
import "./chunk-EHYTAPE2.js";
import {
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart
} from "./chunk-XTEA2TIV.js";

// src/app/student/layouts/student-layout/student-layout.component.ts
var StudentLayoutComponent = class _StudentLayoutComponent {
  static \u0275fac = function StudentLayoutComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StudentLayoutComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StudentLayoutComponent, selectors: [["app-student-layout"]], decls: 2, vars: 0, consts: [[1, "w-full", "h-full", "p-5"]], template: function StudentLayoutComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "router-outlet");
      \u0275\u0275elementEnd();
    }
  }, dependencies: [RouterOutlet], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StudentLayoutComponent, { className: "StudentLayoutComponent", filePath: "src/app/student/layouts/student-layout/student-layout.component.ts", lineNumber: 12 });
})();

// src/app/student/student.routes.ts
var routes = [
  {
    path: "",
    component: StudentLayoutComponent,
    canActivateChild: [checkAuthGuard],
    children: [
      {
        path: "reserves",
        loadComponent: () => import("./chunk-KP5COXIK.js")
      }
    ]
  }
];
var student_routes_default = routes;
export {
  student_routes_default as default
};
//# sourceMappingURL=chunk-LEJQHHOP.js.map
