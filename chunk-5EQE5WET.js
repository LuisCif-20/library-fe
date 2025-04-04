import {
  PublisherService
} from "./chunk-BONXBZQM.js";
import {
  ConfigurationService
} from "./chunk-JHHWBRG2.js";
import {
  ThemeSwitcherComponent
} from "./chunk-Y2IFBUIC.js";
import "./chunk-32ZCATMH.js";
import {
  BookService
} from "./chunk-CMHSZZHP.js";
import {
  AuthStore
} from "./chunk-2SQF422D.js";
import "./chunk-6FVHQWOD.js";
import {
  Router,
  RouterOutlet
} from "./chunk-7L6NANUY.js";
import {
  AuthorService
} from "./chunk-CERM4BQR.js";
import "./chunk-OJMWA2H5.js";
import {
  AlertService
} from "./chunk-VVQ2XORH.js";
import {
  HoverStyleDirective
} from "./chunk-JABWA3HV.js";
import {
  environment
} from "./chunk-QS57EMBJ.js";
import "./chunk-EHYTAPE2.js";
import {
  catchError,
  computed,
  inject,
  input,
  map,
  output,
  signal,
  throwError,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-XTEA2TIV.js";

// src/app/shared/components/navbar/navbar.component.ts
var NavbarComponent = class _NavbarComponent {
  openSidebar = output();
  awsUrl = environment.AWS_URL;
  configurationService = inject(ConfigurationService);
  logo = computed(() => `${this.awsUrl}/${this.configurationService.configuration().logo}`);
  name = computed(() => this.configurationService.configuration().name);
  static \u0275fac = function NavbarComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NavbarComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NavbarComponent, selectors: [["app-navbar"]], outputs: { openSidebar: "openSidebar" }, decls: 10, vars: 3, consts: [[1, "navbar", "bg-rb", "h-[75px]"], [1, "flex-none"], ["toggle", "", 1, "btn", "btn-circle", "bg-transparent", "shadow-none", "border-none", "text-white", 3, "click"], [1, "material-icons"], ["height", "50", "width", "50", 1, "ml-3", "mr-5", 3, "src", "alt"], [1, "flex-1", "text-white"], [1, "font-bold"], ["tooltipPosition", "left", 1, "flex-none"]], template: function NavbarComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "button", 2);
      \u0275\u0275listener("click", function NavbarComponent_Template_button_click_2_listener() {
        return ctx.openSidebar.emit();
      });
      \u0275\u0275elementStart(3, "span", 3);
      \u0275\u0275text(4, "menu");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(5, "img", 4);
      \u0275\u0275elementStart(6, "div", 5)(7, "span", 6);
      \u0275\u0275text(8);
      \u0275\u0275elementEnd()();
      \u0275\u0275element(9, "theme-switcher", 7);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275property("src", ctx.logo(), \u0275\u0275sanitizeUrl)("alt", ctx.name());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.name());
    }
  }, dependencies: [ThemeSwitcherComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NavbarComponent, { className: "NavbarComponent", filePath: "src/app/shared/components/navbar/navbar.component.ts", lineNumber: 14 });
})();

// src/app/shared/static/sidebar-options.static.ts
var sharedSidebarOptions = [
  {
    label: "Libros",
    icon: "auto_stories",
    route: "/library/books"
  }
];
var librarianSidebarOptions = [
  ...sharedSidebarOptions,
  {
    label: "Autores",
    icon: "contact_page",
    route: "/library/authors"
  },
  {
    label: "Carreras",
    icon: "school",
    route: "/library/degrees"
  },
  {
    label: "Prestamos",
    icon: "style",
    route: "/library/loans"
  },
  {
    label: "Editoriales",
    icon: "rate_review",
    route: "/library/publishers"
  },
  {
    label: "Estudiantes",
    icon: "supervised_user_circle",
    route: "/library/students"
  },
  // {
  //   label: 'Cargar Datos',
  //   icon: 'upload',
  //   route: '/library/data-upload'
  // },
  {
    label: "Configuracion",
    icon: "settings_suggest",
    route: "/library/configuration"
  },
  {
    label: "Panel de Control",
    icon: "analytics",
    route: "/library/dashboard"
  }
];
var studentSidebarOptions = [
  ...sharedSidebarOptions,
  {
    label: "Reservas",
    icon: "book",
    route: "/library/reserves"
  }
];

// src/app/shared/components/sidebar-options/sidebar-options.component.ts
function SidebarOptionsComponent_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 1)(1, "a", 5);
    \u0275\u0275listener("click", function SidebarOptionsComponent_For_2_Template_a_click_1_listener() {
      const sidebarOption_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.redirectTo(sidebarOption_r2.route));
    });
    \u0275\u0275elementStart(2, "span", 6);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const sidebarOption_r2 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(sidebarOption_r2.icon);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", sidebarOption_r2.label, " ");
  }
}
var SidebarOptionsComponent = class _SidebarOptionsComponent {
  closeSidebar = output();
  router = inject(Router);
  authStore = inject(AuthStore);
  alertService = inject(AlertService);
  user = computed(() => this.authStore.user());
  sidebarOptions = computed(() => {
    const user = this.authStore.user();
    if (!user)
      return sharedSidebarOptions;
    if (user.role.name === "LIBRARIAN")
      return librarianSidebarOptions;
    return studentSidebarOptions;
  });
  constructor() {
  }
  redirectTo(route) {
    this.router.navigateByUrl(route);
    this.closeSidebar.emit();
  }
  handleAuth() {
    if (!this.user()) {
      this.router.navigateByUrl("/auth");
      return;
    }
    this.authStore.logout().subscribe({
      next: () => {
        this.alertService.showAlert("Hasta pronto!!!", "success");
        this.router.navigateByUrl("/");
        this.closeSidebar.emit();
      }
    });
  }
  static \u0275fac = function SidebarOptionsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SidebarOptionsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SidebarOptionsComponent, selectors: [["sidebar-options"]], outputs: { closeSidebar: "closeSidebar" }, decls: 8, vars: 2, consts: [[1, "flex", "flex-col", "w-full", "h-full", "md:pt-5"], [1, "hover:hover:bg-yb/25", "rounded", "text-md", "font-bold", "text-white", "cursor-pointer"], [1, "mt-auto", "hover:hover:bg-yb/25", "rounded", "text-md", "font-bold", "text-white", "cursor-pointer"], [1, "h-[40px]", "pl-3", "flex", "items-center", 3, "click"], [1, "material-icons", "mr-5"], ["hoverStyle", "", 1, "h-[40px]", "pl-3", "flex", "items-center", 3, "click"], [1, "mr-5"]], template: function SidebarOptionsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "ul", 0);
      \u0275\u0275repeaterCreate(1, SidebarOptionsComponent_For_2_Template, 5, 2, "li", 1, \u0275\u0275repeaterTrackByIndex);
      \u0275\u0275elementStart(3, "li", 2)(4, "a", 3);
      \u0275\u0275listener("click", function SidebarOptionsComponent_Template_a_click_4_listener() {
        return ctx.handleAuth();
      });
      \u0275\u0275elementStart(5, "span", 4);
      \u0275\u0275text(6);
      \u0275\u0275elementEnd();
      \u0275\u0275text(7);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.sidebarOptions());
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.user() ? "logout" : "login");
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.user() ? "Cerrar Sesi\xF3n" : "Iniciar Sesi\xF3n", " ");
    }
  }, dependencies: [HoverStyleDirective], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SidebarOptionsComponent, { className: "SidebarOptionsComponent", filePath: "src/app/shared/components/sidebar-options/sidebar-options.component.ts", lineNumber: 16 });
})();

// src/app/shared/components/sidebar/sidebar.component.ts
var _c0 = [[["", "menu", ""]]];
var _c1 = ["[menu]"];
var SidebarComponent = class _SidebarComponent {
  isOpen = input.required();
  awsUrl = environment.AWS_URL;
  configurationService = inject(ConfigurationService);
  logo = computed(() => `${this.awsUrl}/${this.configurationService.configuration().logo}`);
  static \u0275fac = function SidebarComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SidebarComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SidebarComponent, selectors: [["app-sidebar"]], inputs: { isOpen: [1, "isOpen"] }, ngContentSelectors: _c1, decls: 5, vars: 5, consts: [[1, "fixed", "top-0", "left-0", "h-full", "w-75", "transform", "transition-transform", "md:translate-x-0"], [1, "h-full", "w-full", "bg-rb", "text-white", "flex", "flex-col", "p-3"], ["tooltipPosition", "left", 1, "ml-auto", "hidden", "md:block"], ["height", "175", "width", "175", "alt", "Logo", 1, "mx-auto", "my-3", "hidden", "md:block", 3, "src"]], template: function SidebarComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef(_c0);
      \u0275\u0275elementStart(0, "aside", 0)(1, "div", 1);
      \u0275\u0275element(2, "theme-switcher", 2)(3, "img", 3);
      \u0275\u0275projection(4);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275classProp("-translate-x-full", !ctx.isOpen())("shadow-xl", ctx.isOpen());
      \u0275\u0275advance(3);
      \u0275\u0275property("src", ctx.logo(), \u0275\u0275sanitizeUrl);
    }
  }, dependencies: [ThemeSwitcherComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SidebarComponent, { className: "SidebarComponent", filePath: "src/app/shared/components/sidebar/sidebar.component.ts", lineNumber: 14 });
})();

// src/app/library/layouts/library-layout/library-layout.component.ts
function LibraryLayoutComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275listener("click", function LibraryLayoutComponent_Conditional_3_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.isOpen.set(false));
    });
    \u0275\u0275elementEnd();
  }
}
var LibraryLayoutComponent = class _LibraryLayoutComponent {
  isOpen = signal(false);
  static \u0275fac = function LibraryLayoutComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LibraryLayoutComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LibraryLayoutComponent, selectors: [["app-library-layout"]], decls: 8, vars: 2, consts: [[1, "flex", "flex-col", "h-screen"], [1, "relative", "z-5"], [1, "md:hidden", 3, "openSidebar"], [1, "fixed", "inset-0", "bg-black", "opacity-50", "md:hidden"], [3, "isOpen"], ["menu", "", 1, "h-full", "w-full", 3, "closeSidebar"], [1, "flex-1", "md:ml-75", "overflow-y-auto"], [1, "fixed", "inset-0", "bg-black", "opacity-50", "md:hidden", 3, "click"]], template: function LibraryLayoutComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "app-navbar", 2);
      \u0275\u0275listener("openSidebar", function LibraryLayoutComponent_Template_app_navbar_openSidebar_2_listener() {
        return ctx.isOpen.set(true);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(3, LibraryLayoutComponent_Conditional_3_Template, 1, 0, "div", 3);
      \u0275\u0275elementStart(4, "app-sidebar", 4)(5, "sidebar-options", 5);
      \u0275\u0275listener("closeSidebar", function LibraryLayoutComponent_Template_sidebar_options_closeSidebar_5_listener() {
        return ctx.isOpen.set(false);
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(6, "div", 6);
      \u0275\u0275element(7, "router-outlet");
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.isOpen() ? 3 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("isOpen", ctx.isOpen());
    }
  }, dependencies: [
    RouterOutlet,
    NavbarComponent,
    SidebarComponent,
    SidebarOptionsComponent
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LibraryLayoutComponent, { className: "LibraryLayoutComponent", filePath: "src/app/library/layouts/library-layout/library-layout.component.ts", lineNumber: 18 });
})();

// src/app/library/resolvers/authors.resolver.ts
var authorsResolver = (route, state) => {
  const authorService = inject(AuthorService);
  return authorService.getAuthors().pipe(map((res) => [
    ...res.data.map((value) => ({
      value: value.id,
      label: value.name
    }))
  ]));
};

// src/app/library/resolvers/publishers.resolver.ts
var publishersResolver = (route, state) => {
  const publisherService = inject(PublisherService);
  return publisherService.getPublishers().pipe(map((res) => [
    ...res.data.map((value) => ({
      value: value.id,
      label: value.name
    }))
  ]));
};

// src/app/library/resolvers/book-by-id.resolver.ts
var bookByIdResolver = (route, state) => {
  const bookService = inject(BookService);
  const router = inject(Router);
  const alertService = inject(AlertService);
  return bookService.getBookById(route.paramMap.get("id")).pipe(catchError((error) => {
    alertService.showAlert("El libro no existe", "warning");
    router.navigateByUrl("/library");
    return throwError(() => error);
  }));
};

// src/app/auth/guards/role.guard.ts
var roleGuard = (route, segments) => {
  const authStore = inject(AuthStore);
  const user = authStore.user();
  if (!user)
    return false;
  const allowedRole = route.data?.["role"];
  if (user.role.name === allowedRole) {
    return true;
  }
  return true;
};

// src/app/library/library.routes.ts
var routes = [
  {
    path: "",
    component: LibraryLayoutComponent,
    children: [
      {
        path: "books",
        resolve: {
          authors: authorsResolver,
          publishers: publishersResolver
        },
        loadComponent: () => import("./chunk-HBLEK53G.js")
      },
      {
        path: "books/:id",
        resolve: {
          book: bookByIdResolver,
          authors: authorsResolver,
          publishers: publishersResolver
        },
        loadComponent: () => import("./chunk-QEOFLTCU.js")
      },
      {
        path: "",
        pathMatch: "full",
        redirectTo: "books"
      },
      {
        path: "",
        canMatch: [roleGuard],
        data: {
          role: "LIBRARIAN"
        },
        loadChildren: () => import("./chunk-J7UE64MJ.js")
      },
      {
        path: "",
        canMatch: [roleGuard],
        data: {
          role: "STUDENT"
        },
        loadChildren: () => import("./chunk-LEJQHHOP.js")
      },
      {
        path: "**",
        redirectTo: "/404"
      }
    ]
  }
];
var library_routes_default = routes;
export {
  library_routes_default as default
};
//# sourceMappingURL=chunk-5EQE5WET.js.map
