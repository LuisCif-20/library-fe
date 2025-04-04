import {
  ConfigurationService
} from "./chunk-33JIL4SE.js";
import {
  ThemeService
} from "./chunk-32ZCATMH.js";
import {
  AuthStatus,
  AuthStore
} from "./chunk-AQKJADJF.js";
import "./chunk-M62AKXZU.js";
import {
  Router,
  RouterOutlet,
  bootstrapApplication,
  provideRouter
} from "./chunk-7L6NANUY.js";
import "./chunk-OJMWA2H5.js";
import {
  provideEnvironmentNgxMask
} from "./chunk-XHQ3PMRC.js";
import "./chunk-CM5EFMYB.js";
import {
  AlertService
} from "./chunk-VVQ2XORH.js";
import "./chunk-QBPE6MBL.js";
import {
  provideHttpClient,
  withFetch,
  withInterceptors
} from "./chunk-EHYTAPE2.js";
import {
  NgClass,
  catchError,
  computed,
  forkJoin,
  inject,
  map,
  provideAppInitializer,
  provideZoneChangeDetection,
  switchMap,
  throwError,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-XTEA2TIV.js";

// src/app/auth/guards/public-routes.guard.ts
var publicRoutesGuard = (route, segments) => {
  const authStore = inject(AuthStore);
  if (authStore.authStatus() === AuthStatus.NOT_AUTHENTICATED)
    return true;
  const router = inject(Router);
  return router.createUrlTree(["/"]);
};

// src/app/app.routes.ts
var routes = [
  {
    path: "auth",
    canMatch: [publicRoutesGuard],
    loadChildren: () => import("./chunk-2H6A5YII.js")
  },
  {
    path: "library",
    loadChildren: () => import("./chunk-JHGTENNJ.js")
  },
  {
    path: "404",
    loadComponent: () => import("./chunk-TRD77GBM.js")
  },
  {
    path: "",
    pathMatch: "full",
    redirectTo: "library"
  },
  {
    path: "**",
    redirectTo: "404"
  }
];

// src/app/core/initializers/app-initializer.ts
var combinedInitializer = () => {
  const configurationService = inject(ConfigurationService);
  const authStore = inject(AuthStore);
  return forkJoin([
    configurationService.getConfiguration(),
    authStore.checkAuth()
  ]).pipe(map((results) => results.every((result) => result === true)));
};

// src/app/auth/interceptors/add-with-credentials.interceptor.ts
var addWithCredentialsInterceptor = (req, next) => {
  const clone = req.clone({
    withCredentials: true
  });
  return next(clone);
};

// src/app/auth/interceptors/add-access-token.interceptor.ts
var addAccessTokenInterceptor = (req, next) => {
  const authStore = inject(AuthStore);
  const token = authStore.accessToken();
  if (token) {
    const clone = req.clone({
      headers: req.headers.set("Authorization", `Bearer ${token}`)
    });
    return next(clone);
  }
  return next(req);
};

// src/app/auth/interceptors/refresh-token.interceptor.ts
var refreshTokenInterceptor = (req, next) => {
  const authStore = inject(AuthStore);
  return next(req).pipe(catchError((error) => {
    if (error.status === 401 && authStore.accessToken()) {
      return authStore.refreshToken().pipe(switchMap(() => {
        const newReq = req.clone();
        return next(newReq);
      }));
    }
    return throwError(() => error);
  }));
};

// src/app/app.config.ts
var appConfig = {
  providers: [
    provideZoneChangeDetection({
      eventCoalescing: true
    }),
    provideRouter(routes),
    provideEnvironmentNgxMask(),
    provideHttpClient(withFetch(), withInterceptors([
      addWithCredentialsInterceptor,
      addAccessTokenInterceptor,
      refreshTokenInterceptor
    ])),
    provideAppInitializer(combinedInitializer)
  ]
};

// src/app/shared/interfaces/alert.interface.ts
var ALERT_VARIANTS = {
  info: "alert-info",
  error: "alert-error",
  success: "alert-success",
  warning: "alert-warning"
};

// src/app/shared/components/alert/alert.component.ts
function AlertComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "span", 2);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r0.alertClass());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.alert().icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.alert().message);
  }
}
var AlertComponent = class _AlertComponent {
  alertService = inject(AlertService);
  alert = computed(() => this.alertService.alert());
  alertClass = computed(() => ALERT_VARIANTS[this.alert().type]);
  static \u0275fac = function AlertComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AlertComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AlertComponent, selectors: [["app-alert"]], decls: 1, vars: 1, consts: [[1, "fixed", "bottom-10", "left-1/2", "transform", "-translate-x-1/2", "z-25", "animate-fade-up", "animate-duration-700"], ["role", "alert", 1, "alert", "alert-soft", 3, "ngClass"], [1, "material-icons"]], template: function AlertComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, AlertComponent_Conditional_0_Template, 6, 3, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.alert() ? 0 : -1);
    }
  }, dependencies: [NgClass], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AlertComponent, { className: "AlertComponent", filePath: "src/app/shared/components/alert/alert.component.ts", lineNumber: 15 });
})();

// src/app/app.component.ts
var AppComponent = class _AppComponent {
  themeService = inject(ThemeService);
  constructor() {
  }
  ngOnInit() {
    this.themeService.loadUserTheme();
  }
  static \u0275fac = function AppComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, consts: [[1, "h-screen", "w-screen"]], template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "app-alert");
      \u0275\u0275elementStart(1, "div", 0);
      \u0275\u0275element(2, "router-outlet");
      \u0275\u0275elementEnd();
    }
  }, dependencies: [
    RouterOutlet,
    AlertComponent
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src/app/app.component.ts", lineNumber: 16 });
})();

// src/main.ts
bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));
//# sourceMappingURL=main.js.map
