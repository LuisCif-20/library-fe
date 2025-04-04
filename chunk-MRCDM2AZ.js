import {
  PublisherService
} from "./chunk-BONXBZQM.js";
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
import "./chunk-QS57EMBJ.js";
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

// src/app/librarian/components/publisher-modal/publisher-modal.component.ts
var PublisherModalComponent = class _PublisherModalComponent {
  publisher = input();
  closeModal = output();
  savePublisher = output();
  publisherService = inject(PublisherService);
  alertService = inject(AlertService);
  formBuilder = inject(NonNullableFormBuilder);
  publisherForm = this.formBuilder.group({
    name: this.formBuilder.control("", [Validators.required])
  });
  isLoading = signal(false);
  constructor() {
  }
  ngOnInit() {
    if (this.publisher()) {
      this.publisherForm.patchValue({
        name: this.publisher().name
      });
      this.publisherForm.updateValueAndValidity();
    }
  }
  onCreatePublisher(body) {
    this.publisherService.createPublisher(body).subscribe({
      next: () => {
        this.savePublisher.emit();
        this.closeModal.emit();
        this.alertService.showAlert("Editorial creada con exito.", "success");
      },
      error: (error) => {
        const status = error.status;
        status === HttpStatusCode.BadRequest ? this.alertService.showAlert("Datos duplicados o invalidos.", "error") : this.alertService.showAlert("Algo salio mal.", "error");
      }
    });
  }
  onUpdatePublisher(body) {
    this.publisherService.updatePublisher(this.publisher().id, body).subscribe({
      next: () => {
        this.savePublisher.emit();
        this.closeModal.emit();
        this.alertService.showAlert("Editorial actualizado con exito.", "success");
      },
      error: (error) => {
        const status = error.status;
        status === HttpStatusCode.BadRequest ? this.alertService.showAlert("Datos duplicados o invalidos.", "error") : this.alertService.showAlert("Algo salio mal.", "error");
      }
    });
  }
  onSavePublisher() {
    if (this.publisherForm.invalid) {
      this.publisherForm.markAllAsTouched();
      this.alertService.showAlert("Formulario invalido, porfavor llena los campos", "error");
      return;
    }
    this.isLoading.set(true);
    const body = this.publisherForm.getRawValue();
    this.publisher() ? this.onUpdatePublisher(body) : this.onCreatePublisher(body);
    this.isLoading.set(false);
  }
  static \u0275fac = function PublisherModalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PublisherModalComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PublisherModalComponent, selectors: [["publisher-modal"]], inputs: { publisher: [1, "publisher"] }, outputs: { closeModal: "closeModal", savePublisher: "savePublisher" }, decls: 7, vars: 3, consts: [[3, "closeModal"], ["body", "", 1, "flex", "flex-col", "max-h-full", "overflow-y-auto", 3, "ngSubmit", "formGroup"], [1, "flex-none", "font-bold", "text-3xl", "text-center", "my-5"], ["legend", "Nombre", "placeholder", "Nick", "label", "Este campo es obligatorio.", 1, "m-3", 3, "control"], ["type", "submit", 1, "mx-auto", "mt-5", "btn", "bg-yb", "hover:bg-yb/85", "text-white", 3, "disabled"]], template: function PublisherModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-modal", 0);
      \u0275\u0275listener("closeModal", function PublisherModalComponent_Template_app_modal_closeModal_0_listener() {
        return ctx.closeModal.emit();
      });
      \u0275\u0275elementStart(1, "form", 1);
      \u0275\u0275listener("ngSubmit", function PublisherModalComponent_Template_form_ngSubmit_1_listener() {
        return ctx.onSavePublisher();
      });
      \u0275\u0275elementStart(2, "span", 2);
      \u0275\u0275text(3, "Editorial");
      \u0275\u0275elementEnd();
      \u0275\u0275element(4, "text-input", 3);
      \u0275\u0275elementStart(5, "button", 4);
      \u0275\u0275text(6, " Guardar ");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("formGroup", ctx.publisherForm);
      \u0275\u0275advance(3);
      \u0275\u0275property("control", ctx.publisherForm.controls.name);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.isLoading());
    }
  }, dependencies: [
    ReactiveFormsModule,
    \u0275NgNoValidate,
    NgControlStatusGroup,
    FormGroupDirective,
    TextInputComponent,
    ModalComponent
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PublisherModalComponent, { className: "PublisherModalComponent", filePath: "src/app/librarian/components/publisher-modal/publisher-modal.component.ts", lineNumber: 20 });
})();

// src/app/librarian/stores/publishers.store.ts
var initialState = {
  publishers: [],
  hasNext: false,
  hasPrevious: false,
  page: 0,
  size: 5
};
var PublishersStore = signalStore({
  providedIn: "root"
}, withState(initialState), withProps(() => ({
  publisherService: inject(PublisherService)
})), withMethods((_a) => {
  var _b = _a, { publisherService } = _b, store = __objRest(_b, ["publisherService"]);
  return {
    getPublishers() {
      return publisherService.getPublishers(store.page(), store.size()).pipe(switchMap(({ hasNext, hasPrevious, data }) => {
        if (!data.length && hasPrevious) {
          patchState(store, { page: store.page() - 1 });
          return this.getPublishers();
        }
        patchState(store, { hasNext, hasPrevious, publishers: data });
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

// src/app/librarian/components/create-publisher-modal/create-publisher-modal.component.ts
function CreatePublisherModalComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "publisher-modal", 1);
    \u0275\u0275listener("closeModal", function CreatePublisherModalComponent_Conditional_4_Template_publisher_modal_closeModal_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showModal.set(false));
    })("savePublisher", function CreatePublisherModalComponent_Conditional_4_Template_publisher_modal_savePublisher_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.getPublishers());
    });
    \u0275\u0275elementEnd();
  }
}
var CreatePublisherModalComponent = class _CreatePublisherModalComponent {
  showModal = signal(false);
  publishersStore = inject(PublishersStore);
  getPublishers = rxMethod(pipe(switchMap(() => this.publishersStore.getPublishers())));
  static \u0275fac = function CreatePublisherModalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CreatePublisherModalComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CreatePublisherModalComponent, selectors: [["create-publisher-modal"]], decls: 5, vars: 1, consts: [["hoverStyle", "", 1, "btn", "rounded-full", "btn-secondary", "text-white", 3, "click"], [3, "closeModal", "savePublisher"]], template: function CreatePublisherModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "button", 0);
      \u0275\u0275listener("click", function CreatePublisherModalComponent_Template_button_click_0_listener() {
        return ctx.showModal.set(true);
      });
      \u0275\u0275elementStart(1, "span");
      \u0275\u0275text(2, "add_box");
      \u0275\u0275elementEnd();
      \u0275\u0275text(3, " Agregar\n");
      \u0275\u0275elementEnd();
      \u0275\u0275template(4, CreatePublisherModalComponent_Conditional_4_Template, 1, 0, "publisher-modal");
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.showModal() ? 4 : -1);
    }
  }, dependencies: [PublisherModalComponent, HoverStyleDirective], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CreatePublisherModalComponent, { className: "CreatePublisherModalComponent", filePath: "src/app/librarian/components/create-publisher-modal/create-publisher-modal.component.ts", lineNumber: 14 });
})();

// src/app/librarian/components/edit-publisher-modal/edit-publisher-modal.component.ts
function EditPublisherModalComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "publisher-modal", 2);
    \u0275\u0275listener("closeModal", function EditPublisherModalComponent_Conditional_4_Template_publisher_modal_closeModal_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showModal.set(false));
    })("savePublisher", function EditPublisherModalComponent_Conditional_4_Template_publisher_modal_savePublisher_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.getPublishers());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("publisher", ctx_r1.publisher());
  }
}
var EditPublisherModalComponent = class _EditPublisherModalComponent {
  publisher = input.required();
  publishersStore = inject(PublishersStore);
  getPublishers = rxMethod(pipe(switchMap(() => this.publishersStore.getPublishers())));
  showModal = signal(false);
  static \u0275fac = function EditPublisherModalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EditPublisherModalComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EditPublisherModalComponent, selectors: [["edit-publisher-modal"]], inputs: { publisher: [1, "publisher"] }, decls: 5, vars: 1, consts: [["hoverStyle", "", 1, "btn", "bg-blue-900", "hover:bg-blue-900/90", "text-white", 3, "click"], [3, "publisher"], [3, "closeModal", "savePublisher", "publisher"]], template: function EditPublisherModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "button", 0);
      \u0275\u0275listener("click", function EditPublisherModalComponent_Template_button_click_0_listener() {
        return ctx.showModal.set(true);
      });
      \u0275\u0275elementStart(1, "span");
      \u0275\u0275text(2, "edit");
      \u0275\u0275elementEnd();
      \u0275\u0275text(3, " Editar\n");
      \u0275\u0275elementEnd();
      \u0275\u0275template(4, EditPublisherModalComponent_Conditional_4_Template, 1, 1, "publisher-modal", 1);
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.showModal() ? 4 : -1);
    }
  }, dependencies: [PublisherModalComponent, HoverStyleDirective], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EditPublisherModalComponent, { className: "EditPublisherModalComponent", filePath: "src/app/librarian/components/edit-publisher-modal/edit-publisher-modal.component.ts", lineNumber: 15 });
})();

// src/app/librarian/components/publishers-table/publishers-table.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function PublishersTableComponent_For_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "th");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 2);
    \u0275\u0275element(6, "edit-publisher-modal", 3);
    \u0275\u0275elementStart(7, "button", 4);
    \u0275\u0275listener("click", function PublishersTableComponent_For_12_Template_button_click_7_listener() {
      const publisher_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onDelete(publisher_r2.id));
    });
    \u0275\u0275elementStart(8, "span");
    \u0275\u0275text(9, "delete");
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, " Eliminar ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const publisher_r2 = ctx.$implicit;
    const \u0275$index_20_r4 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275$index_20_r4 + 1 + ctx_r2.publishersStore.size() * ctx_r2.publishersStore.page());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(publisher_r2.name);
    \u0275\u0275advance(2);
    \u0275\u0275property("publisher", publisher_r2);
  }
}
var PublishersTableComponent = class _PublishersTableComponent {
  publishers = input([]);
  publishersStore = inject(PublishersStore);
  publisherService = inject(PublisherService);
  alertService = inject(AlertService);
  getPublishers = rxMethod(pipe(switchMap(() => this.publishersStore.getPublishers())));
  constructor() {
  }
  onDelete(id) {
    this.publisherService.deletePublisher(id).subscribe({
      next: () => {
        this.alertService.showAlert("La editorial fue eliminada.", "success");
        this.getPublishers();
      },
      error: () => {
        this.alertService.showAlert("La editorial no existe.", "warning");
      }
    });
  }
  static \u0275fac = function PublishersTableComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PublishersTableComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PublishersTableComponent, selectors: [["publishers-table"]], inputs: { publishers: [1, "publishers"] }, decls: 13, vars: 0, consts: [[1, "overflow-x-auto", "h-full", "md:w-auto", "sm:w-full"], [1, "table", "table-pin-rows"], [1, "flex", "flex-row"], [3, "publisher"], ["hoverStyle", "", 1, "btn", "btn-error", "ml-2", "text-white", 3, "click"]], template: function PublishersTableComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "table", 1)(2, "thead")(3, "tr")(4, "th");
      \u0275\u0275text(5, "No.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "th");
      \u0275\u0275text(7, "Nombre");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "th");
      \u0275\u0275text(9, "Acciones");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(10, "tbody");
      \u0275\u0275repeaterCreate(11, PublishersTableComponent_For_12_Template, 11, 3, "tr", null, _forTrack0);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(11);
      \u0275\u0275repeater(ctx.publishers());
    }
  }, dependencies: [EditPublisherModalComponent, HoverStyleDirective], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PublishersTableComponent, { className: "PublishersTableComponent", filePath: "src/app/librarian/components/publishers-table/publishers-table.component.ts", lineNumber: 17 });
})();

// src/app/librarian/pages/publishers-page/publishers-page.component.ts
var PublishersPageComponent = class _PublishersPageComponent {
  publishersStore = inject(PublishersStore);
  getPublishers = rxMethod(pipe(switchMap(() => this.publishersStore.getPublishers())));
  publishers = computed(() => this.publishersStore.publishers());
  page = computed(() => this.publishersStore.page());
  size = computed(() => this.publishersStore.size());
  constructor() {
  }
  ngOnInit() {
    this.getPublishers();
  }
  ngOnDestroy() {
    this.publishersStore.patchInitialState();
  }
  changePage(delta) {
    this.publishersStore.patchPage(this.page() + delta);
    this.getPublishers();
  }
  changeSize(size) {
    this.publishersStore.patchSize(size);
    this.getPublishers();
  }
  static \u0275fac = function PublishersPageComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PublishersPageComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PublishersPageComponent, selectors: [["app-publishers-page"]], decls: 8, vars: 5, consts: [[1, "flex", "flex-col", "mt-10"], [1, "font-bold", "text-3xl", "text-center"], [1, "mx-auto", "mt-5"], [1, "flex", "flex-row", "justify-between", "my-10"], [3, "setSize", "size"], [3, "next", "previous", "page", "hasNext", "hasPrevious"], [1, "flex", "justify-center", "px-3", "overflow-y-hidden", "mb-5", 3, "publishers"]], template: function PublishersPageComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h2", 1);
      \u0275\u0275text(2, "Editoriales");
      \u0275\u0275elementEnd();
      \u0275\u0275element(3, "create-publisher-modal", 2);
      \u0275\u0275elementStart(4, "div", 3)(5, "items-per-page", 4);
      \u0275\u0275listener("setSize", function PublishersPageComponent_Template_items_per_page_setSize_5_listener($event) {
        return ctx.changeSize($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "app-pagination", 5);
      \u0275\u0275listener("next", function PublishersPageComponent_Template_app_pagination_next_6_listener() {
        return ctx.changePage(1);
      })("previous", function PublishersPageComponent_Template_app_pagination_previous_6_listener() {
        return ctx.changePage(-1);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275element(7, "publishers-table", 6);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275property("size", ctx.size());
      \u0275\u0275advance();
      \u0275\u0275property("page", ctx.page())("hasNext", ctx.publishersStore.hasNext())("hasPrevious", ctx.publishersStore.hasPrevious());
      \u0275\u0275advance();
      \u0275\u0275property("publishers", ctx.publishers());
    }
  }, dependencies: [
    CreatePublisherModalComponent,
    PublishersTableComponent,
    ItemsPerPageComponent,
    PaginationComponent
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PublishersPageComponent, { className: "PublishersPageComponent", filePath: "src/app/librarian/pages/publishers-page/publishers-page.component.ts", lineNumber: 21 });
})();
export {
  PublishersPageComponent as default
};
//# sourceMappingURL=chunk-MRCDM2AZ.js.map
