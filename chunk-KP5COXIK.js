import {
  ReservationService
} from "./chunk-64AIT5GY.js";
import {
  ItemsPerPageComponent,
  PaginationComponent
} from "./chunk-6WHIMD2A.js";
import {
  rxMethod
} from "./chunk-4EGLECZR.js";
import {
  patchState,
  signalStore,
  withMethods,
  withProps,
  withState
} from "./chunk-OJMWA2H5.js";
import "./chunk-CM5EFMYB.js";
import {
  environment
} from "./chunk-QS57EMBJ.js";
import "./chunk-EHYTAPE2.js";
import {
  __objRest,
  catchError,
  computed,
  inject,
  input,
  of,
  pipe,
  switchMap,
  throwError,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-XTEA2TIV.js";

// src/app/student/store/reserves.store.ts
var initialState = {
  reserves: [],
  hasNext: false,
  hasPrevious: false,
  page: 0,
  size: 5
};
var ReservationStore = signalStore({
  providedIn: "root"
}, withState(initialState), withProps(() => ({
  reservationService: inject(ReservationService)
})), withMethods((_a) => {
  var _b = _a, { reservationService } = _b, store = __objRest(_b, ["reservationService"]);
  return {
    getReserves() {
      return reservationService.getMyRerservations(store.page(), store.size()).pipe(switchMap(({ hasNext, hasPrevious, data }) => {
        if (!data.length && hasPrevious) {
          patchState(store, { page: store.page() - 1 });
          return this.getReserves();
        }
        patchState(store, { hasNext, hasPrevious, reserves: data });
        return of(void 0);
      }), catchError((error) => {
        patchState(store, initialState);
        return throwError(() => error);
      }));
    },
    patchInitialState() {
      patchState(store, initialState);
    },
    patchPage(page) {
      patchState(store, { page });
    },
    patchSize(size) {
      patchState(store, { size });
    }
  };
}));

// src/app/student/components/reservation-card/reservation-card.component.ts
var ReservationCardComponent = class _ReservationCardComponent {
  reserve = input.required();
  src = computed(() => `${environment.AWS_URL}/${this.reserve().book.imageUrl}`);
  static \u0275fac = function ReservationCardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ReservationCardComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReservationCardComponent, selectors: [["app-reservation-card"]], inputs: { reserve: [1, "reserve"] }, decls: 8, vars: 4, consts: [[1, "card", "bg-base-200", "h-full", "w-full", "shadow-md"], [1, "h-48", "overflow-hidden"], [1, "h-full", "object-cover", "object-center", 3, "src", "alt"], [1, "card-body"], [1, "badge", "badge-xs", "badge-secondary", "truncate"], [1, "card-title"]], template: function ReservationCardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "figure", 1);
      \u0275\u0275element(2, "img", 2);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "div", 3)(4, "span", 4);
      \u0275\u0275text(5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "h2", 5);
      \u0275\u0275text(7);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275property("src", ctx.src(), \u0275\u0275sanitizeUrl)("alt", ctx.reserve().book.title);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.reserve().expirationDate);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.reserve().book.title);
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReservationCardComponent, { className: "ReservationCardComponent", filePath: "src/app/student/components/reservation-card/reservation-card.component.ts", lineNumber: 11 });
})();

// src/app/student/pages/reserves-page/reserves-page.component.ts
function ReservesPageComponent_For_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275element(1, "app-reservation-card", 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const reserve_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("reserve", reserve_r1);
  }
}
var ReservesPageComponent = class _ReservesPageComponent {
  reservationStore = inject(ReservationStore);
  getReserves = rxMethod(pipe(switchMap(() => this.reservationStore.getReserves())));
  reserves = computed(() => this.reservationStore.reserves());
  page = computed(() => this.reservationStore.page());
  size = computed(() => this.reservationStore.size());
  constructor() {
  }
  ngOnInit() {
    this.getReserves();
  }
  ngOnDestroy() {
    this.reservationStore.patchInitialState();
  }
  changePage(delta) {
    this.reservationStore.patchPage(this.page() + delta);
    this.reserves();
  }
  changeSize(size) {
    this.reservationStore.patchSize(size);
    this.reserves();
  }
  static \u0275fac = function ReservesPageComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ReservesPageComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReservesPageComponent, selectors: [["app-reserves-page"]], decls: 9, vars: 4, consts: [[1, "flex", "flex-col", "mt-10"], [1, "font-bold", "text-3xl", "text-center"], [1, "flex", "flex-row", "justify-between", "my-10"], [3, "setSize", "size"], [3, "next", "previous", "page", "hasNext", "hasPrevious"], [1, "grid", "grid-cols-1", "md:grid-cols-4"], [1, "m-2"], [3, "reserve"]], template: function ReservesPageComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h2", 1);
      \u0275\u0275text(2, "Reservaciones");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "div", 2)(4, "items-per-page", 3);
      \u0275\u0275listener("setSize", function ReservesPageComponent_Template_items_per_page_setSize_4_listener($event) {
        return ctx.changeSize($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "app-pagination", 4);
      \u0275\u0275listener("next", function ReservesPageComponent_Template_app_pagination_next_5_listener() {
        return ctx.changePage(1);
      })("previous", function ReservesPageComponent_Template_app_pagination_previous_5_listener() {
        return ctx.changePage(-1);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "div", 5);
      \u0275\u0275repeaterCreate(7, ReservesPageComponent_For_8_Template, 2, 1, "div", 6, \u0275\u0275repeaterTrackByIndex);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275property("size", ctx.size());
      \u0275\u0275advance();
      \u0275\u0275property("page", ctx.page())("hasNext", ctx.reservationStore.hasNext())("hasPrevious", ctx.reservationStore.hasPrevious());
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.reserves());
    }
  }, dependencies: [
    ItemsPerPageComponent,
    PaginationComponent,
    ReservationCardComponent
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReservesPageComponent, { className: "ReservesPageComponent", filePath: "src/app/student/pages/reserves-page/reserves-page.component.ts", lineNumber: 19 });
})();
export {
  ReservesPageComponent as default
};
//# sourceMappingURL=chunk-KP5COXIK.js.map
