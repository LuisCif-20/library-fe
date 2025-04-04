import {
  codePattern
} from "./chunk-RZM3WV2J.js";
import {
  ItemsPerPageComponent,
  PaginationComponent
} from "./chunk-6WHIMD2A.js";
import {
  ModalComponent
} from "./chunk-F6TWPE4Y.js";
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
import {
  TextInputComponent
} from "./chunk-TBE3URDR.js";
import "./chunk-XHQ3PMRC.js";
import {
  FormGroupDirective,
  NgControlStatusGroup,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-CM5EFMYB.js";
import {
  AlertService
} from "./chunk-VVQ2XORH.js";
import {
  HoverStyleDirective
} from "./chunk-JABWA3HV.js";
import {
  environment
} from "./chunk-QS57EMBJ.js";
import {
  HttpClient,
  HttpParams,
  HttpStatusCode
} from "./chunk-EHYTAPE2.js";
import {
  CurrencyPipe,
  __objRest,
  catchError,
  computed,
  inject,
  input,
  of,
  output,
  pipe,
  signal,
  switchMap,
  throwError,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate2
} from "./chunk-XTEA2TIV.js";

// src/app/librarian/services/loan.service.ts
var LoanService = class _LoanService {
  LOANS_URL = `${environment.API_URL}/loans`;
  httpClient = inject(HttpClient);
  constructor() {
  }
  getLoans(page, size) {
    let params = new HttpParams();
    if (page != void 0 && page >= 0) {
      params = params.set("page", page);
    }
    if (size && size >= 1) {
      params = params.set("size", size);
    }
    return this.httpClient.get(this.LOANS_URL, { params });
  }
  createLoan(body) {
    return this.httpClient.post(this.LOANS_URL, body).pipe(catchError((error) => throwError(() => error)));
  }
  deleteLoan(id) {
    const url = `${this.LOANS_URL}/${id}`;
    return this.httpClient.delete(url).pipe(catchError((error) => throwError(() => error)));
  }
  static \u0275fac = function LoanService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LoanService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _LoanService, factory: _LoanService.\u0275fac, providedIn: "root" });
};

// src/app/librarian/stores/loans.store.ts
var initialState = {
  loans: [],
  hasNext: false,
  hasPrevious: false,
  page: 0,
  size: 5
};
var LoanssStore = signalStore({
  providedIn: "root"
}, withState(initialState), withProps(() => ({
  loanService: inject(LoanService)
})), withMethods((_a) => {
  var _b = _a, { loanService } = _b, store = __objRest(_b, ["loanService"]);
  return {
    getLoans() {
      return loanService.getLoans(store.page(), store.size()).pipe(switchMap(({ hasNext, hasPrevious, data }) => {
        if (!data.length && hasPrevious) {
          patchState(store, { page: store.page() - 1 });
          return this.getLoans();
        }
        patchState(store, { hasNext, hasPrevious, loans: data });
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

// src/app/librarian/services/payment.service.ts
var PaymentService = class _PaymentService {
  PAYMENTS_URL = `${environment.API_URL}/payments`;
  httpClient = inject(HttpClient);
  constructor() {
  }
  createPayment(body) {
    return this.httpClient.post(this.PAYMENTS_URL, body).pipe(catchError((error) => throwError(() => error)));
  }
  static \u0275fac = function PaymentService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PaymentService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PaymentService, factory: _PaymentService.\u0275fac, providedIn: "root" });
};

// src/app/librarian/components/loan-modal/loan-modal.component.ts
var LoanModalComponent = class _LoanModalComponent {
  action = input("loan");
  closeModal = output();
  saveLoan = output();
  LoanService = inject(LoanService);
  alertService = inject(AlertService);
  paymentService = inject(PaymentService);
  formBuilder = inject(NonNullableFormBuilder);
  loanForm = this.formBuilder.group({
    carnet: this.formBuilder.control("", [Validators.required]),
    bookCode: this.formBuilder.control("", [Validators.required, Validators.pattern(codePattern)])
  });
  isLoading = signal(false);
  constructor() {
  }
  ngOnInit() {
  }
  onCreateLoan(body) {
    this.LoanService.createLoan(body).subscribe({
      next: () => {
        this.saveLoan.emit();
        this.closeModal.emit();
        this.alertService.showAlert("Prestamo realizado.", "success");
      },
      error: (error) => {
        const status = error.status;
        status === HttpStatusCode.NotFound ? this.alertService.showAlert("Libro o estudante no encontrado.", "error") : this.alertService.showAlert("No se cumple con algunos requisitos.", "error");
      }
    });
  }
  onCreatePayment(body) {
    this.paymentService.createPayment(body).subscribe({
      next: () => {
        this.saveLoan.emit();
        this.closeModal.emit();
        this.alertService.showAlert("Se ha registrado tu devolucion.", "success");
      },
      error: (error) => {
        const status = error.status;
        status === HttpStatusCode.NotFound ? this.alertService.showAlert("Libro o estudante no encontrado.", "error") : this.alertService.showAlert("No se cumple con algunos requisitos.", "error");
      }
    });
  }
  onRegisterAction() {
    if (this.loanForm.invalid) {
      this.loanForm.markAllAsTouched();
      this.alertService.showAlert("Formulario invalido, porfavor llena los campos", "error");
      return;
    }
    this.isLoading.set(true);
    const { carnet, bookCode } = this.loanForm.getRawValue();
    const date = (/* @__PURE__ */ new Date()).toISOString().split("T").shift();
    this.action() === "payment" ? this.onCreatePayment({ carnet, bookCode, paidDate: date }) : this.onCreateLoan({ carnet, bookCode, loanDate: date });
    this.isLoading.set(false);
  }
  static \u0275fac = function LoanModalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LoanModalComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoanModalComponent, selectors: [["loan-modal"]], inputs: { action: [1, "action"] }, outputs: { closeModal: "closeModal", saveLoan: "saveLoan" }, decls: 9, vars: 6, consts: [[3, "closeModal", "fullWidth"], ["body", "", 1, "flex", "flex-col", "max-h-full", "overflow-y-auto", 3, "ngSubmit", "formGroup"], [1, "flex-none", "font-bold", "text-3xl", "text-center", "my-5"], [1, "grow", "grid", "grid-cols-1", "md:grid-cols-6", "overflow-y-auto"], ["legend", "Carnet", "placeholder", "XXXXXXXXX", "label", "Este campo es obligatorio.", "mask", "000000000", 1, "m-3", "md:col-span-3", 3, "control"], ["legend", "Codigo del Libro", "placeholder", "XXX-ABC", "label", "Este campo es obligatorio.", "mask", "000-AAA", 1, "m-3", "md:col-span-3", 3, "control", "dropCharacter"], ["type", "submit", 1, "mx-auto", "mt-5", "btn", "bg-yb", "hover:bg-yb/85", "text-white", 3, "disabled"]], template: function LoanModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-modal", 0);
      \u0275\u0275listener("closeModal", function LoanModalComponent_Template_app_modal_closeModal_0_listener() {
        return ctx.closeModal.emit();
      });
      \u0275\u0275elementStart(1, "form", 1);
      \u0275\u0275listener("ngSubmit", function LoanModalComponent_Template_form_ngSubmit_1_listener() {
        return ctx.onRegisterAction();
      });
      \u0275\u0275elementStart(2, "span", 2);
      \u0275\u0275text(3, "Carrera");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 3);
      \u0275\u0275element(5, "text-input", 4)(6, "text-input", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "button", 6);
      \u0275\u0275text(8, " Guardar ");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275property("fullWidth", true);
      \u0275\u0275advance();
      \u0275\u0275property("formGroup", ctx.loanForm);
      \u0275\u0275advance(4);
      \u0275\u0275property("control", ctx.loanForm.controls.carnet);
      \u0275\u0275advance();
      \u0275\u0275property("control", ctx.loanForm.controls.carnet)("dropCharacter", false);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.isLoading());
    }
  }, dependencies: [
    ReactiveFormsModule,
    \u0275NgNoValidate,
    NgControlStatusGroup,
    FormGroupDirective,
    ModalComponent,
    TextInputComponent
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoanModalComponent, { className: "LoanModalComponent", filePath: "src/app/librarian/components/loan-modal/loan-modal.component.ts", lineNumber: 22 });
})();

// src/app/librarian/components/create-loan-modal/create-loan-modal.component.ts
function CreateLoanModalComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "loan-modal", 1);
    \u0275\u0275listener("closeModal", function CreateLoanModalComponent_Conditional_4_Template_loan_modal_closeModal_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showModal.set(false));
    })("saveLoan", function CreateLoanModalComponent_Conditional_4_Template_loan_modal_saveLoan_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.getLoans());
    });
    \u0275\u0275elementEnd();
  }
}
var CreateLoanModalComponent = class _CreateLoanModalComponent {
  loansStore = inject(LoanssStore);
  getLoans = rxMethod(pipe(switchMap(() => this.loansStore.getLoans())));
  showModal = signal(false);
  static \u0275fac = function CreateLoanModalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CreateLoanModalComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CreateLoanModalComponent, selectors: [["create-loan-modal"]], decls: 5, vars: 1, consts: [["hoverStyle", "", 1, "btn", "rounded-full", "btn-secondary", "text-white", 3, "click"], [3, "closeModal", "saveLoan"]], template: function CreateLoanModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "button", 0);
      \u0275\u0275listener("click", function CreateLoanModalComponent_Template_button_click_0_listener() {
        return ctx.showModal.set(true);
      });
      \u0275\u0275elementStart(1, "span");
      \u0275\u0275text(2, "bookmark_add");
      \u0275\u0275elementEnd();
      \u0275\u0275text(3, " Realizar Prestamo\n");
      \u0275\u0275elementEnd();
      \u0275\u0275template(4, CreateLoanModalComponent_Conditional_4_Template, 1, 0, "loan-modal");
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.showModal() ? 4 : -1);
    }
  }, dependencies: [
    LoanModalComponent,
    HoverStyleDirective
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CreateLoanModalComponent, { className: "CreateLoanModalComponent", filePath: "src/app/librarian/components/create-loan-modal/create-loan-modal.component.ts", lineNumber: 17 });
})();

// src/app/librarian/components/create-payment-modal/create-payment-modal.component.ts
function CreatePaymentModalComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "loan-modal", 2);
    \u0275\u0275listener("closeModal", function CreatePaymentModalComponent_Conditional_4_Template_loan_modal_closeModal_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showModal.set(false));
    })("saveLoan", function CreatePaymentModalComponent_Conditional_4_Template_loan_modal_saveLoan_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.getLoans());
    });
    \u0275\u0275elementEnd();
  }
}
var CreatePaymentModalComponent = class _CreatePaymentModalComponent {
  loansStore = inject(LoanssStore);
  getLoans = rxMethod(pipe(switchMap(() => this.loansStore.getLoans())));
  showModal = signal(false);
  static \u0275fac = function CreatePaymentModalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CreatePaymentModalComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CreatePaymentModalComponent, selectors: [["create-payment-modal"]], decls: 5, vars: 1, consts: [["hoverStyle", "", 1, "btn", "rounded-full", "btn-primary", "text-white", 3, "click"], ["action", "payment"], ["action", "payment", 3, "closeModal", "saveLoan"]], template: function CreatePaymentModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "button", 0);
      \u0275\u0275listener("click", function CreatePaymentModalComponent_Template_button_click_0_listener() {
        return ctx.showModal.set(true);
      });
      \u0275\u0275elementStart(1, "span");
      \u0275\u0275text(2, "payments");
      \u0275\u0275elementEnd();
      \u0275\u0275text(3, " Registrar Devolucion\n");
      \u0275\u0275elementEnd();
      \u0275\u0275template(4, CreatePaymentModalComponent_Conditional_4_Template, 1, 0, "loan-modal", 1);
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.showModal() ? 4 : -1);
    }
  }, dependencies: [
    LoanModalComponent,
    HoverStyleDirective
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CreatePaymentModalComponent, { className: "CreatePaymentModalComponent", filePath: "src/app/librarian/components/create-payment-modal/create-payment-modal.component.ts", lineNumber: 17 });
})();

// src/app/librarian/components/loans-table/loans-table.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function LoansTableComponent_For_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "th");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "div", 2)(5, "div", 3)(6, "div", 4);
    \u0275\u0275element(7, "img", 5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div")(9, "div", 6);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 7);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(13, "td")(14, "div", 2)(15, "div", 3)(16, "div", 4);
    \u0275\u0275element(17, "img", 5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div")(19, "div", 6);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 7);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(23, "td");
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "td", 8)(27, "button", 9);
    \u0275\u0275listener("click", function LoansTableComponent_For_16_Template_button_click_27_listener() {
      const loan_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onDelete(loan_r2.id));
    });
    \u0275\u0275elementStart(28, "span");
    \u0275\u0275text(29, "delete");
    \u0275\u0275elementEnd();
    \u0275\u0275text(30, " Eliminar ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const loan_r2 = ctx.$implicit;
    const \u0275$index_26_r4 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275$index_26_r4 + 1 + ctx_r2.loansStore.size() * ctx_r2.loansStore.page());
    \u0275\u0275advance(5);
    \u0275\u0275property("src", ctx_r2.getUrl(loan_r2.book.imageUrl), \u0275\u0275sanitizeUrl)("alt", loan_r2.book.title);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(loan_r2.book.author);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(loan_r2.book.publicationDate);
    \u0275\u0275advance(5);
    \u0275\u0275property("src", ctx_r2.getUrl(loan_r2.student.imageUrl), \u0275\u0275sanitizeUrl)("alt", loan_r2.student.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(loan_r2.student.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", loan_r2.student.carnet, " - ", loan_r2.student.isSanctioned ? "Sancionado" : "Sin Sancion", "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(25, 11, loan_r2.debt, "Q "));
  }
}
var LoansTableComponent = class _LoansTableComponent {
  loans = input([]);
  loansStore = inject(LoanssStore);
  loanService = inject(LoanService);
  alertService = inject(AlertService);
  getLoans = rxMethod(pipe(switchMap(() => this.loansStore.getLoans())));
  constructor() {
  }
  getUrl(image) {
    return `${environment.AWS_URL}/${image}`;
  }
  onDelete(id) {
    this.loanService.deleteLoan(id).subscribe({
      next: () => {
        this.alertService.showAlert("El prestamo fue eliminado.", "success");
        this.getLoans();
      },
      error: () => {
        this.alertService.showAlert("El prestamo no existe.", "warning");
      }
    });
  }
  static \u0275fac = function LoansTableComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LoansTableComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoansTableComponent, selectors: [["loans-table"]], inputs: { loans: [1, "loans"] }, decls: 17, vars: 0, consts: [[1, "overflow-x-auto", "h-full", "md:w-auto", "sm:w-full"], [1, "table", "table-pin-rows"], [1, "flex", "items-center", "gap-3"], [1, "avatar"], [1, "mask", "mask-squircle", "h-12", "w-12"], [3, "src", "alt"], [1, "font-bold"], [1, "text-sm", "opacity-50"], [1, "flex", "flex-row"], ["hoverStyle", "", 1, "btn", "btn-error", "ml-2", "text-white", 3, "click"]], template: function LoansTableComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "table", 1)(2, "thead")(3, "tr")(4, "th");
      \u0275\u0275text(5, "No.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "th");
      \u0275\u0275text(7, "Libro");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "th");
      \u0275\u0275text(9, "Estudiante");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "th");
      \u0275\u0275text(11, "Deuda");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "th");
      \u0275\u0275text(13, "Acciones");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(14, "tbody");
      \u0275\u0275repeaterCreate(15, LoansTableComponent_For_16_Template, 31, 14, "tr", null, _forTrack0);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(15);
      \u0275\u0275repeater(ctx.loans());
    }
  }, dependencies: [
    HoverStyleDirective,
    CurrencyPipe
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoansTableComponent, { className: "LoansTableComponent", filePath: "src/app/librarian/components/loans-table/loans-table.component.ts", lineNumber: 21 });
})();

// src/app/librarian/pages/loans-page/loans-page.component.ts
function LoansPageComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "loans-table", 7);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("loans", ctx_r0.loans());
  }
}
var LoansPageComponent = class _LoansPageComponent {
  laonsStore = inject(LoanssStore);
  getLoans = rxMethod(pipe(switchMap(() => this.laonsStore.getLoans())));
  loans = computed(() => this.laonsStore.loans());
  page = computed(() => this.laonsStore.page());
  size = computed(() => this.laonsStore.size());
  constructor() {
  }
  ngOnInit() {
    this.getLoans();
  }
  ngOnDestroy() {
    this.laonsStore.patchInitialState();
  }
  changePage(delta) {
    this.laonsStore.patchPage(this.page() + delta);
    this.getLoans();
  }
  changeSize(size) {
    this.laonsStore.patchSize(size);
    this.getLoans();
  }
  static \u0275fac = function LoansPageComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LoansPageComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoansPageComponent, selectors: [["app-loans-page"]], decls: 10, vars: 5, consts: [[1, "flex", "flex-col", "mt-10"], [1, "font-bold", "text-3xl", "text-center"], [1, "flex", "flex-row", "justify-center", "mt-5"], [1, "mx-2"], [1, "flex", "flex-row", "justify-between", "my-10"], [3, "setSize", "size"], [3, "next", "previous", "page", "hasNext", "hasPrevious"], [1, "flex", "justify-center", "px-3", "overflow-y-hidden", "mb-5", 3, "loans"]], template: function LoansPageComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h2", 1);
      \u0275\u0275text(2, "Prestamos");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "div", 2);
      \u0275\u0275element(4, "create-loan-modal", 3)(5, "create-payment-modal", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "div", 4)(7, "items-per-page", 5);
      \u0275\u0275listener("setSize", function LoansPageComponent_Template_items_per_page_setSize_7_listener($event) {
        return ctx.changeSize($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "app-pagination", 6);
      \u0275\u0275listener("next", function LoansPageComponent_Template_app_pagination_next_8_listener() {
        return ctx.changePage(1);
      })("previous", function LoansPageComponent_Template_app_pagination_previous_8_listener() {
        return ctx.changePage(-1);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275template(9, LoansPageComponent_Conditional_9_Template, 1, 1, "loans-table", 7);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275property("size", ctx.size());
      \u0275\u0275advance();
      \u0275\u0275property("page", ctx.page())("hasNext", ctx.laonsStore.hasNext())("hasPrevious", ctx.laonsStore.hasPrevious());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.loans().length ? 9 : -1);
    }
  }, dependencies: [
    CreateLoanModalComponent,
    CreatePaymentModalComponent,
    ItemsPerPageComponent,
    PaginationComponent,
    LoansTableComponent
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoansPageComponent, { className: "LoansPageComponent", filePath: "src/app/librarian/pages/loans-page/loans-page.component.ts", lineNumber: 23 });
})();
export {
  LoansPageComponent as default
};
//# sourceMappingURL=chunk-WXRWU5ZJ.js.map
