import {
  DegreeService
} from "./chunk-ZWKJZWXZ.js";
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
import "./chunk-QBPE6MBL.js";
import {
  HttpStatusCode
} from "./chunk-EHYTAPE2.js";
import {
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
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-XTEA2TIV.js";

// src/app/librarian/stores/degrees.store.ts
var initialState = {
  degrees: [],
  hasNext: false,
  hasPrevious: false,
  page: 0,
  size: 5
};
var DegreesStore = signalStore({
  providedIn: "root"
}, withState(initialState), withProps(() => ({
  degreeService: inject(DegreeService)
})), withMethods((_a) => {
  var _b = _a, { degreeService } = _b, store = __objRest(_b, ["degreeService"]);
  return {
    getDegrees() {
      return degreeService.getDegrees(store.page(), store.size()).pipe(switchMap(({ hasNext, hasPrevious, data }) => {
        if (!data.length && hasPrevious) {
          patchState(store, { page: store.page() - 1 });
          return this.getDegrees();
        }
        patchState(store, { hasNext, hasPrevious, degrees: data });
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

// src/app/librarian/components/degree-modal/degree-modal.component.ts
var DegreeModalComponent = class _DegreeModalComponent {
  degree = input();
  closeModal = output();
  saveDegree = output();
  degreeService = inject(DegreeService);
  alertService = inject(AlertService);
  formBuilder = inject(NonNullableFormBuilder);
  degreeForm = this.formBuilder.group({
    name: this.formBuilder.control("", [Validators.required]),
    code: this.formBuilder.control("", [Validators.required])
  });
  isLoading = signal(false);
  constructor() {
  }
  ngOnInit() {
    if (this.degree()) {
      const { name, code } = this.degree();
      this.degreeForm.patchValue({
        name,
        code: code.toString()
      });
      this.degreeForm.updateValueAndValidity();
    }
  }
  onCreateDegree(body) {
    this.degreeService.createDegree(body).subscribe({
      next: () => {
        this.saveDegree.emit();
        this.closeModal.emit();
        this.alertService.showAlert("Author creado con exito.", "success");
      },
      error: (error) => {
        const status = error.status;
        status === HttpStatusCode.BadRequest ? this.alertService.showAlert("Datos duplicados o invalidos.", "error") : this.alertService.showAlert("Algo salio mal.", "error");
      }
    });
  }
  onUpdateDegree(body) {
    this.degreeService.updateDegree(this.degree().id, body).subscribe({
      next: () => {
        this.saveDegree.emit();
        this.closeModal.emit();
        this.alertService.showAlert("Author actualizado con exito.", "success");
      },
      error: (error) => {
        const status = error.status;
        status === HttpStatusCode.BadRequest ? this.alertService.showAlert("Datos duplicados o invalidos.", "error") : this.alertService.showAlert("Algo salio mal.", "error");
      }
    });
  }
  onSaveDegree() {
    if (this.degreeForm.invalid) {
      this.degreeForm.markAllAsTouched();
      this.alertService.showAlert("Formulario invalido, porfavor llena los campos", "error");
      return;
    }
    this.isLoading.set(true);
    const { name, code } = this.degreeForm.getRawValue();
    this.degree() ? this.onUpdateDegree({ name, code: Number(code) }) : this.onCreateDegree({ name, code: Number(code) });
    this.isLoading.set(false);
  }
  static \u0275fac = function DegreeModalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DegreeModalComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DegreeModalComponent, selectors: [["degree-modal"]], inputs: { degree: [1, "degree"] }, outputs: { closeModal: "closeModal", saveDegree: "saveDegree" }, decls: 9, vars: 6, consts: [[3, "closeModal", "fullWidth"], ["body", "", 1, "flex", "flex-col", "max-h-full", "overflow-y-auto", 3, "ngSubmit", "formGroup"], [1, "flex-none", "font-bold", "text-3xl", "text-center", "my-5"], [1, "grow", "grid", "grid-cols-1", "md:grid-cols-6", "overflow-y-auto"], ["legend", "Nombre", "placeholder", "Degree", "label", "Este campo es obligatorio.", 1, "m-3", "md:col-span-3", 3, "control"], ["legend", "Codigo", "placeholder", "XXXX", "label", "Este campo es obligatorio.", "mask", "0*", 1, "m-3", "md:col-span-3", 3, "control", "dropCharacter"], ["type", "submit", 1, "mx-auto", "mt-5", "btn", "bg-yb", "hover:bg-yb/85", "text-white", 3, "disabled"]], template: function DegreeModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-modal", 0);
      \u0275\u0275listener("closeModal", function DegreeModalComponent_Template_app_modal_closeModal_0_listener() {
        return ctx.closeModal.emit();
      });
      \u0275\u0275elementStart(1, "form", 1);
      \u0275\u0275listener("ngSubmit", function DegreeModalComponent_Template_form_ngSubmit_1_listener() {
        return ctx.onSaveDegree();
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
      \u0275\u0275property("formGroup", ctx.degreeForm);
      \u0275\u0275advance(4);
      \u0275\u0275property("control", ctx.degreeForm.controls.name);
      \u0275\u0275advance();
      \u0275\u0275property("control", ctx.degreeForm.controls.code)("dropCharacter", false);
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DegreeModalComponent, { className: "DegreeModalComponent", filePath: "src/app/librarian/components/degree-modal/degree-modal.component.ts", lineNumber: 20 });
})();

// src/app/librarian/components/create-degree-modal/create-degree-modal.component.ts
function CreateDegreeModalComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "degree-modal", 1);
    \u0275\u0275listener("closeModal", function CreateDegreeModalComponent_Conditional_4_Template_degree_modal_closeModal_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showModal.set(false));
    })("saveDegree", function CreateDegreeModalComponent_Conditional_4_Template_degree_modal_saveDegree_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.getDegrees());
    });
    \u0275\u0275elementEnd();
  }
}
var CreateDegreeModalComponent = class _CreateDegreeModalComponent {
  degreesStore = inject(DegreesStore);
  getDegrees = rxMethod(pipe(switchMap(() => this.degreesStore.getDegrees())));
  showModal = signal(false);
  static \u0275fac = function CreateDegreeModalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CreateDegreeModalComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CreateDegreeModalComponent, selectors: [["create-degree-modal"]], decls: 5, vars: 1, consts: [["hoverStyle", "", 1, "btn", "rounded-full", "btn-secondary", "text-white", 3, "click"], [3, "closeModal", "saveDegree"]], template: function CreateDegreeModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "button", 0);
      \u0275\u0275listener("click", function CreateDegreeModalComponent_Template_button_click_0_listener() {
        return ctx.showModal.set(true);
      });
      \u0275\u0275elementStart(1, "span");
      \u0275\u0275text(2, "add_box");
      \u0275\u0275elementEnd();
      \u0275\u0275text(3, " Agregar\n");
      \u0275\u0275elementEnd();
      \u0275\u0275template(4, CreateDegreeModalComponent_Conditional_4_Template, 1, 0, "degree-modal");
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.showModal() ? 4 : -1);
    }
  }, dependencies: [
    HoverStyleDirective,
    DegreeModalComponent
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CreateDegreeModalComponent, { className: "CreateDegreeModalComponent", filePath: "src/app/librarian/components/create-degree-modal/create-degree-modal.component.ts", lineNumber: 17 });
})();

// src/app/librarian/components/edit-degree-modal/edit-degree-modal.component.ts
function EditDegreeModalComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "degree-modal", 2);
    \u0275\u0275listener("closeModal", function EditDegreeModalComponent_Conditional_4_Template_degree_modal_closeModal_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showModal.set(false));
    })("saveDegree", function EditDegreeModalComponent_Conditional_4_Template_degree_modal_saveDegree_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.getDegrees());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("degree", ctx_r1.degree());
  }
}
var EditDegreeModalComponent = class _EditDegreeModalComponent {
  degree = input.required();
  degreesStore = inject(DegreesStore);
  getDegrees = rxMethod(pipe(switchMap(() => this.degreesStore.getDegrees())));
  showModal = signal(false);
  static \u0275fac = function EditDegreeModalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EditDegreeModalComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EditDegreeModalComponent, selectors: [["edit-degree-modal"]], inputs: { degree: [1, "degree"] }, decls: 5, vars: 1, consts: [["hoverStyle", "", 1, "btn", "bg-blue-900", "hover:bg-blue-900/90", "text-white", 3, "click"], [3, "degree"], [3, "closeModal", "saveDegree", "degree"]], template: function EditDegreeModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "button", 0);
      \u0275\u0275listener("click", function EditDegreeModalComponent_Template_button_click_0_listener() {
        return ctx.showModal.set(true);
      });
      \u0275\u0275elementStart(1, "span");
      \u0275\u0275text(2, "edit");
      \u0275\u0275elementEnd();
      \u0275\u0275text(3, " Editar\n");
      \u0275\u0275elementEnd();
      \u0275\u0275template(4, EditDegreeModalComponent_Conditional_4_Template, 1, 1, "degree-modal", 1);
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.showModal() ? 4 : -1);
    }
  }, dependencies: [DegreeModalComponent, HoverStyleDirective], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EditDegreeModalComponent, { className: "EditDegreeModalComponent", filePath: "src/app/librarian/components/edit-degree-modal/edit-degree-modal.component.ts", lineNumber: 15 });
})();

// src/app/librarian/components/degrees-table/degrees-table.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function DegreesTableComponent_For_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "th");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 2);
    \u0275\u0275element(8, "edit-degree-modal", 3);
    \u0275\u0275elementStart(9, "button", 4);
    \u0275\u0275listener("click", function DegreesTableComponent_For_14_Template_button_click_9_listener() {
      const degree_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onDelete(degree_r2.id));
    });
    \u0275\u0275elementStart(10, "span");
    \u0275\u0275text(11, "delete");
    \u0275\u0275elementEnd();
    \u0275\u0275text(12, " Eliminar ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const degree_r2 = ctx.$implicit;
    const \u0275$index_23_r4 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275$index_23_r4 + 1 + ctx_r2.degreesStore.size() * ctx_r2.degreesStore.page());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(degree_r2.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(degree_r2.code);
    \u0275\u0275advance(2);
    \u0275\u0275property("degree", degree_r2);
  }
}
var DegreesTableComponent = class _DegreesTableComponent {
  degrees = input([]);
  degreesStore = inject(DegreesStore);
  degreeService = inject(DegreeService);
  alertService = inject(AlertService);
  getDegrees = rxMethod(pipe(switchMap(() => this.degreesStore.getDegrees())));
  constructor() {
  }
  onDelete(id) {
    this.degreeService.deleteDegree(id).subscribe({
      next: () => {
        this.alertService.showAlert("La carrera fue eliminada.", "success");
        this.getDegrees();
      },
      error: () => {
        this.alertService.showAlert("La carrera no existe.", "warning");
      }
    });
  }
  static \u0275fac = function DegreesTableComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DegreesTableComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DegreesTableComponent, selectors: [["degrees-table"]], inputs: { degrees: [1, "degrees"] }, decls: 15, vars: 0, consts: [[1, "overflow-x-auto", "h-full", "md:w-auto", "sm:w-full"], [1, "table", "table-pin-rows"], [1, "flex", "flex-row"], [3, "degree"], ["hoverStyle", "", 1, "btn", "btn-error", "ml-2", "text-white", 3, "click"]], template: function DegreesTableComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "table", 1)(2, "thead")(3, "tr")(4, "th");
      \u0275\u0275text(5, "No.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "th");
      \u0275\u0275text(7, "Nombre");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "th");
      \u0275\u0275text(9, "Codigo");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "th");
      \u0275\u0275text(11, "Acciones");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(12, "tbody");
      \u0275\u0275repeaterCreate(13, DegreesTableComponent_For_14_Template, 13, 4, "tr", null, _forTrack0);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(13);
      \u0275\u0275repeater(ctx.degrees());
    }
  }, dependencies: [
    HoverStyleDirective,
    EditDegreeModalComponent
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DegreesTableComponent, { className: "DegreesTableComponent", filePath: "src/app/librarian/components/degrees-table/degrees-table.component.ts", lineNumber: 20 });
})();

// src/app/librarian/pages/degrees-page/degrees-page.component.ts
var DegreesPageComponent = class _DegreesPageComponent {
  degreesStore = inject(DegreesStore);
  getDegrees = rxMethod(pipe(switchMap(() => this.degreesStore.getDegrees())));
  degrees = computed(() => this.degreesStore.degrees());
  page = computed(() => this.degreesStore.page());
  size = computed(() => this.degreesStore.size());
  constructor() {
  }
  ngOnInit() {
    this.getDegrees();
  }
  ngOnDestroy() {
    this.degreesStore.patchInitialState();
  }
  changePage(delta) {
    this.degreesStore.patchPage(this.page() + delta);
    this.getDegrees();
  }
  changeSize(size) {
    this.degreesStore.patchSize(size);
    this.getDegrees();
  }
  static \u0275fac = function DegreesPageComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DegreesPageComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DegreesPageComponent, selectors: [["app-degrees-page"]], decls: 8, vars: 5, consts: [[1, "flex", "flex-col", "mt-10"], [1, "font-bold", "text-3xl", "text-center"], [1, "mx-auto", "mt-5"], [1, "flex", "flex-row", "justify-between", "my-10"], [3, "setSize", "size"], [3, "next", "previous", "page", "hasNext", "hasPrevious"], [1, "flex", "justify-center", "px-3", "overflow-y-hidden", "mb-5", 3, "degrees"]], template: function DegreesPageComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h2", 1);
      \u0275\u0275text(2, "Carreras");
      \u0275\u0275elementEnd();
      \u0275\u0275element(3, "create-degree-modal", 2);
      \u0275\u0275elementStart(4, "div", 3)(5, "items-per-page", 4);
      \u0275\u0275listener("setSize", function DegreesPageComponent_Template_items_per_page_setSize_5_listener($event) {
        return ctx.changeSize($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "app-pagination", 5);
      \u0275\u0275listener("next", function DegreesPageComponent_Template_app_pagination_next_6_listener() {
        return ctx.changePage(1);
      })("previous", function DegreesPageComponent_Template_app_pagination_previous_6_listener() {
        return ctx.changePage(-1);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275element(7, "degrees-table", 6);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275property("size", ctx.size());
      \u0275\u0275advance();
      \u0275\u0275property("page", ctx.page())("hasNext", ctx.degreesStore.hasNext())("hasPrevious", ctx.degreesStore.hasPrevious());
      \u0275\u0275advance();
      \u0275\u0275property("degrees", ctx.degrees());
    }
  }, dependencies: [
    CreateDegreeModalComponent,
    ItemsPerPageComponent,
    PaginationComponent,
    DegreesTableComponent
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DegreesPageComponent, { className: "DegreesPageComponent", filePath: "src/app/librarian/pages/degrees-page/degrees-page.component.ts", lineNumber: 21 });
})();
export {
  DegreesPageComponent as default
};
//# sourceMappingURL=chunk-YGLSQQCY.js.map
