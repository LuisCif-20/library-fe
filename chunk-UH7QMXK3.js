import {
  checkAuthGuard
} from "./chunk-24GWL7QT.js";
import "./chunk-AQKJADJF.js";
import "./chunk-M62AKXZU.js";
import {
  RouterOutlet
} from "./chunk-7L6NANUY.js";
import "./chunk-OJMWA2H5.js";
import "./chunk-QBPE6MBL.js";
import "./chunk-EHYTAPE2.js";
import {
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart
} from "./chunk-XTEA2TIV.js";

// src/app/librarian/layouts/librarian-layout/librarian-layout.component.ts
var LibrarianLayoutComponent = class _LibrarianLayoutComponent {
  static \u0275fac = function LibrarianLayoutComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LibrarianLayoutComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LibrarianLayoutComponent, selectors: [["app-librarian-layout"]], decls: 2, vars: 0, consts: [[1, "w-full", "h-full", "p-5"]], template: function LibrarianLayoutComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "router-outlet");
      \u0275\u0275elementEnd();
    }
  }, dependencies: [RouterOutlet], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LibrarianLayoutComponent, { className: "LibrarianLayoutComponent", filePath: "src/app/librarian/layouts/librarian-layout/librarian-layout.component.ts", lineNumber: 12 });
})();

// src/app/librarian/librarian.routes.ts
var routes = [
  {
    path: "",
    component: LibrarianLayoutComponent,
    canActivateChild: [checkAuthGuard],
    children: [
      {
        path: "authors",
        loadComponent: () => import("./chunk-QW4FOOZO.js")
      },
      {
        path: "publishers",
        loadComponent: () => import("./chunk-LH55536J.js")
      },
      {
        path: "degrees",
        loadComponent: () => import("./chunk-YGLSQQCY.js")
      },
      {
        path: "loans",
        loadComponent: () => import("./chunk-QJZH3EA5.js")
      },
      {
        path: "configuration",
        loadComponent: () => import("./chunk-TSMLD6UH.js")
      }
    ]
  }
];
var librarian_routes_default = routes;
export {
  librarian_routes_default as default
};
//# sourceMappingURL=chunk-UH7QMXK3.js.map
