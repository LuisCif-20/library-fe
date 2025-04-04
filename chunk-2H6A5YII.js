import {
  HomeButtonComponent
} from "./chunk-RBBBAIU7.js";
import {
  DegreeService
} from "./chunk-ZWKJZWXZ.js";
import {
  ThemeSwitcherComponent
} from "./chunk-Y2IFBUIC.js";
import "./chunk-32ZCATMH.js";
import {
  Router,
  RouterLink,
  RouterOutlet
} from "./chunk-7L6NANUY.js";
import "./chunk-JABWA3HV.js";
import "./chunk-QBPE6MBL.js";
import "./chunk-EHYTAPE2.js";
import {
  DestroyRef,
  RuntimeError,
  assertInInjectionContext,
  assertNotInReactiveContext,
  computed,
  inject,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-XTEA2TIV.js";

// node_modules/@angular/core/fesm2022/rxjs-interop.mjs
function toSignal(source, options) {
  ngDevMode && assertNotInReactiveContext(toSignal, "Invoking `toSignal` causes new subscriptions every time. Consider moving `toSignal` outside of the reactive context and read the signal value where needed.");
  const requiresCleanup = !options?.manualCleanup;
  requiresCleanup && !options?.injector && assertInInjectionContext(toSignal);
  const cleanupRef = requiresCleanup ? options?.injector?.get(DestroyRef) ?? inject(DestroyRef) : null;
  const equal = makeToSignalEqual(options?.equal);
  let state;
  if (options?.requireSync) {
    state = signal({
      kind: 0
      /* StateKind.NoValue */
    }, {
      equal
    });
  } else {
    state = signal({
      kind: 1,
      value: options?.initialValue
    }, {
      equal
    });
  }
  const sub = source.subscribe({
    next: (value) => state.set({
      kind: 1,
      value
    }),
    error: (error) => {
      if (options?.rejectErrors) {
        throw error;
      }
      state.set({
        kind: 2,
        error
      });
    }
    // Completion of the Observable is meaningless to the signal. Signals don't have a concept of
    // "complete".
  });
  if (options?.requireSync && state().kind === 0) {
    throw new RuntimeError(601, (typeof ngDevMode === "undefined" || ngDevMode) && "`toSignal()` called with `requireSync` but `Observable` did not emit synchronously.");
  }
  cleanupRef?.onDestroy(sub.unsubscribe.bind(sub));
  return computed(() => {
    const current = state();
    switch (current.kind) {
      case 1:
        return current.value;
      case 2:
        throw current.error;
      case 0:
        throw new RuntimeError(601, (typeof ngDevMode === "undefined" || ngDevMode) && "`toSignal()` called with `requireSync` but `Observable` did not emit synchronously.");
    }
  }, {
    equal: options?.equal
  });
}
function makeToSignalEqual(userEquality = Object.is) {
  return (a, b) => a.kind === 1 && b.kind === 1 && userEquality(a.value, b.value);
}

// src/app/auth/components/page-toogle/page-toogle.component.ts
var PageToogleComponent = class _PageToogleComponent {
  router = inject(Router);
  route = toSignal(this.router.events);
  authPage = computed(() => this.returnAuthPage(this.route().url || ""));
  data = computed(() => this.returnData(this.authPage()));
  constructor() {
  }
  returnAuthPage(url) {
    return url.split("/").at(-1);
  }
  returnData(authPage) {
    switch (authPage) {
      case "reset-password":
        return ["\xBFYa no lo necesitas?", "sign-in", "Inicia Sesi\xF3n"];
      case "sign-up":
        return ["\xBFYa tienes cuenta?", "sign-in", "Inicia Sesi\xF3n"];
      default:
        return ["\xBFNo tienes cuenta?", "sign-up", "Registrate"];
    }
  }
  static \u0275fac = function PageToogleComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PageToogleComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PageToogleComponent, selectors: [["auth-page-toogle"]], decls: 4, vars: 3, consts: [[1, "text-sm"], [1, "link", "link-success", 3, "routerLink"]], template: function PageToogleComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "span", 0);
      \u0275\u0275text(1);
      \u0275\u0275elementStart(2, "a", 1);
      \u0275\u0275text(3);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.data()[0], " ");
      \u0275\u0275advance();
      \u0275\u0275property("routerLink", ctx.data()[1]);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(ctx.data()[2]);
    }
  }, dependencies: [RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PageToogleComponent, { className: "PageToogleComponent", filePath: "src/app/auth/components/page-toogle/page-toogle.component.ts", lineNumber: 15 });
})();

// src/app/auth/layouts/auth-layout/auth-layout.component.ts
var AuthLayoutComponent = class _AuthLayoutComponent {
  static \u0275fac = function AuthLayoutComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuthLayoutComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AuthLayoutComponent, selectors: [["app-auth-layout"]], decls: 9, vars: 0, consts: [[1, "background", "flex", "justify-center", "items-center", "min-h-screen", "p-[35px]"], [1, "w-75", "md:w-175", "h-115", "grid", "grid-cols-1", "md:grid-cols-2", "gap-0"], [1, "rounded-l-2xl", "hidden", "md:block", "bg-cover", "bg-center", "bg-no-repeat", 2, "background-image", "url(https://prensacomunitaria.org/wp-content/uploads/2022/05/CUNOC.jpg)"], [1, "bg-base-100", "rounded-2xl", "md:rounded-r-2xl", "md:rounded-l-none", "p-8", "md:p-10"], [1, "h-full", "flex", "flex-col", "justify-between"], [1, "mt-auto", "text-center"], [1, "fixed", "top-[35px]", "left-[35px]", "z-5"], [1, "fixed", "top-[35px]", "right-[35px]", "z-5"]], template: function AuthLayoutComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275element(2, "div", 2);
      \u0275\u0275elementStart(3, "div", 3)(4, "div", 4);
      \u0275\u0275element(5, "router-outlet")(6, "auth-page-toogle", 5);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275element(7, "home-button", 6)(8, "theme-switcher", 7);
    }
  }, dependencies: [
    RouterOutlet,
    PageToogleComponent,
    HomeButtonComponent,
    ThemeSwitcherComponent
  ], styles: ["\n\n.background[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      45deg,\n      #424A69,\n      #00053c,\n      #1C398E);\n  background-size: 300% 300%;\n  animation: _ngcontent-%COMP%_gradientShift 10s ease infinite;\n}\n@keyframes _ngcontent-%COMP%_gradientShift {\n  0% {\n    background-position: 0% 100%;\n  }\n  50% {\n    background-position: 100% 0%;\n  }\n  100% {\n    background-position: 0% 100%;\n  }\n}\n/*# sourceMappingURL=auth-layout.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AuthLayoutComponent, { className: "AuthLayoutComponent", filePath: "src/app/auth/layouts/auth-layout/auth-layout.component.ts", lineNumber: 19 });
})();

// src/app/shared/resolvers/degrees.resolver.ts
var degreesResolver = (route, state) => {
  const degreeService = inject(DegreeService);
  return degreeService.getDegrees();
};

// src/app/auth/auth.routes.ts
var routes = [
  {
    path: "",
    component: AuthLayoutComponent,
    children: [
      {
        path: "sign-in",
        loadComponent: () => import("./chunk-5DN5OCHE.js")
      },
      {
        path: "sign-up",
        resolve: {
          degrees: degreesResolver
        },
        loadComponent: () => import("./chunk-6F6N5QFA.js")
      },
      {
        path: "reset-password",
        loadComponent: () => import("./chunk-DWYSZJXE.js")
      },
      {
        path: "",
        pathMatch: "full",
        redirectTo: "sign-in"
      },
      {
        path: "**",
        redirectTo: "/404"
      }
    ]
  }
];
var auth_routes_default = routes;
export {
  auth_routes_default as default
};
/*! Bundled license information:

@angular/core/fesm2022/rxjs-interop.mjs:
  (**
   * @license Angular v19.2.4
   * (c) 2010-2025 Google LLC. https://angular.io/
   * License: MIT
   *)
*/
//# sourceMappingURL=chunk-2H6A5YII.js.map
