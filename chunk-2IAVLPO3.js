import {
  AuthorService
} from "./chunk-CERM4BQR.js";
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
  DateInputComponent
} from "./chunk-I5YV25LT.js";
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

// src/app/librarian/stores/authors.store.ts
var initialState = {
  authors: [],
  hasNext: false,
  hasPrevious: false,
  page: 0,
  size: 5
};
var AuthorsStore = signalStore({
  providedIn: "root"
}, withState(initialState), withProps(() => ({
  authorService: inject(AuthorService)
})), withMethods((_a) => {
  var _b = _a, { authorService } = _b, store = __objRest(_b, ["authorService"]);
  return {
    getAuthors() {
      return authorService.getAuthors(store.page(), store.size()).pipe(switchMap(({ hasNext, hasPrevious, data }) => {
        if (!data.length && hasPrevious) {
          patchState(store, { page: store.page() - 1 });
          return this.getAuthors();
        }
        patchState(store, { hasNext, hasPrevious, authors: data });
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

// src/app/librarian/components/author-modal/author-modal.component.ts
var AuthorModalComponent = class _AuthorModalComponent {
  author = input();
  closeModal = output();
  saveAuthor = output();
  authorService = inject(AuthorService);
  alertService = inject(AlertService);
  formBuilder = inject(NonNullableFormBuilder);
  authorForm = this.formBuilder.group({
    name: this.formBuilder.control("", [Validators.required]),
    nationality: this.formBuilder.control("", [Validators.required]),
    birthDate: this.formBuilder.control("", [Validators.required])
  });
  max = signal("");
  isLoading = signal(false);
  constructor() {
    const current = /* @__PURE__ */ new Date();
    current.setFullYear(current.getFullYear() - 12);
    this.max.set(current.toISOString().split("T").shift());
  }
  ngOnInit() {
    if (this.author()) {
      const { name, nationality, birthDate } = this.author();
      this.authorForm.patchValue({
        name,
        nationality,
        birthDate: birthDate.toString()
      });
      this.authorForm.updateValueAndValidity();
    }
  }
  onCreateAuthor(body) {
    this.authorService.createAuthor(body).subscribe({
      next: () => {
        this.saveAuthor.emit();
        this.closeModal.emit();
        this.alertService.showAlert("Author creado con exito.", "success");
      },
      error: (error) => {
        const status = error.status;
        status === HttpStatusCode.BadRequest ? this.alertService.showAlert("Datos duplicados o invalidos.", "error") : this.alertService.showAlert("Algo salio mal.", "error");
      }
    });
  }
  onUpdateAuthor(body) {
    this.authorService.updateAuthor(this.author().id, body).subscribe({
      next: () => {
        this.saveAuthor.emit();
        this.closeModal.emit();
        this.alertService.showAlert("Author actualizado con exito.", "success");
      },
      error: (error) => {
        const status = error.status;
        status === HttpStatusCode.BadRequest ? this.alertService.showAlert("Datos duplicados o invalidos.", "error") : this.alertService.showAlert("Algo salio mal.", "error");
      }
    });
  }
  onSaveAuthor() {
    if (this.authorForm.invalid) {
      this.authorForm.markAllAsTouched();
      this.alertService.showAlert("Formulario invalido, porfavor llena los campos", "error");
      return;
    }
    this.isLoading.set(true);
    const body = this.authorForm.getRawValue();
    this.author() ? this.onUpdateAuthor(body) : this.onCreateAuthor(body);
    this.isLoading.set(false);
  }
  static \u0275fac = function AuthorModalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuthorModalComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AuthorModalComponent, selectors: [["author-modal"]], inputs: { author: [1, "author"] }, outputs: { closeModal: "closeModal", saveAuthor: "saveAuthor" }, decls: 10, vars: 7, consts: [[3, "closeModal", "fullWidth"], ["body", "", 1, "flex", "flex-col", "max-h-full", "overflow-y-auto", 3, "ngSubmit", "formGroup"], [1, "flex-none", "font-bold", "text-3xl", "text-center", "my-5"], [1, "grow", "grid", "grid-cols-1", "md:grid-cols-6", "overflow-y-auto"], ["legend", "Nombre", "placeholder", "Nick", "label", "Este campo es obligatorio.", 1, "m-3", "md:col-span-2", 3, "control"], ["legend", "Nacionalidad", "placeholder", "Guatemalteco", "label", "Este campo es obligatorio.", 1, "m-3", "md:col-span-2", 3, "control"], ["legend", "Fecha de Publicacion", "label", "El campo es obligatorio.", 1, "m-3", "md:col-span-2", 3, "control", "max"], ["type", "submit", 1, "mx-auto", "mt-5", "btn", "bg-yb", "hover:bg-yb/85", "text-white", 3, "disabled"]], template: function AuthorModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-modal", 0);
      \u0275\u0275listener("closeModal", function AuthorModalComponent_Template_app_modal_closeModal_0_listener() {
        return ctx.closeModal.emit();
      });
      \u0275\u0275elementStart(1, "form", 1);
      \u0275\u0275listener("ngSubmit", function AuthorModalComponent_Template_form_ngSubmit_1_listener() {
        return ctx.onSaveAuthor();
      });
      \u0275\u0275elementStart(2, "span", 2);
      \u0275\u0275text(3, "Datos del Autor");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 3);
      \u0275\u0275element(5, "text-input", 4)(6, "text-input", 5)(7, "date-input", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "button", 7);
      \u0275\u0275text(9, " Guardar ");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275property("fullWidth", true);
      \u0275\u0275advance();
      \u0275\u0275property("formGroup", ctx.authorForm);
      \u0275\u0275advance(4);
      \u0275\u0275property("control", ctx.authorForm.controls.name);
      \u0275\u0275advance();
      \u0275\u0275property("control", ctx.authorForm.controls.nationality);
      \u0275\u0275advance();
      \u0275\u0275property("control", ctx.authorForm.controls.birthDate)("max", ctx.max());
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.isLoading());
    }
  }, dependencies: [
    ReactiveFormsModule,
    \u0275NgNoValidate,
    NgControlStatusGroup,
    FormGroupDirective,
    ModalComponent,
    TextInputComponent,
    DateInputComponent
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AuthorModalComponent, { className: "AuthorModalComponent", filePath: "src/app/librarian/components/author-modal/author-modal.component.ts", lineNumber: 22 });
})();

// src/app/librarian/components/create-author-modal/create-author-modal.component.ts
function CreateAuthorModalComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "author-modal", 1);
    \u0275\u0275listener("closeModal", function CreateAuthorModalComponent_Conditional_4_Template_author_modal_closeModal_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showModal.set(false));
    })("saveAuthor", function CreateAuthorModalComponent_Conditional_4_Template_author_modal_saveAuthor_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.getAuthors());
    });
    \u0275\u0275elementEnd();
  }
}
var CreateAuthorModalComponent = class _CreateAuthorModalComponent {
  authorsStore = inject(AuthorsStore);
  getAuthors = rxMethod(pipe(switchMap(() => this.authorsStore.getAuthors())));
  showModal = signal(false);
  static \u0275fac = function CreateAuthorModalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CreateAuthorModalComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CreateAuthorModalComponent, selectors: [["create-author-modal"]], decls: 5, vars: 1, consts: [["hoverStyle", "", 1, "btn", "rounded-full", "btn-secondary", "text-white", 3, "click"], [3, "closeModal", "saveAuthor"]], template: function CreateAuthorModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "button", 0);
      \u0275\u0275listener("click", function CreateAuthorModalComponent_Template_button_click_0_listener() {
        return ctx.showModal.set(true);
      });
      \u0275\u0275elementStart(1, "span");
      \u0275\u0275text(2, "add_box");
      \u0275\u0275elementEnd();
      \u0275\u0275text(3, " Agregar\n");
      \u0275\u0275elementEnd();
      \u0275\u0275template(4, CreateAuthorModalComponent_Conditional_4_Template, 1, 0, "author-modal");
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.showModal() ? 4 : -1);
    }
  }, dependencies: [
    HoverStyleDirective,
    AuthorModalComponent
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CreateAuthorModalComponent, { className: "CreateAuthorModalComponent", filePath: "src/app/librarian/components/create-author-modal/create-author-modal.component.ts", lineNumber: 17 });
})();

// src/app/librarian/components/edit-author-modal/edit-author-modal.component.ts
function EditAuthorModalComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "author-modal", 2);
    \u0275\u0275listener("closeModal", function EditAuthorModalComponent_Conditional_4_Template_author_modal_closeModal_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showModal.set(false));
    })("saveAuthor", function EditAuthorModalComponent_Conditional_4_Template_author_modal_saveAuthor_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.getAuthors());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("author", ctx_r1.author());
  }
}
var EditAuthorModalComponent = class _EditAuthorModalComponent {
  author = input.required();
  authorsStore = inject(AuthorsStore);
  getAuthors = rxMethod(pipe(switchMap(() => this.authorsStore.getAuthors())));
  showModal = signal(false);
  static \u0275fac = function EditAuthorModalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EditAuthorModalComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EditAuthorModalComponent, selectors: [["edit-author-modal"]], inputs: { author: [1, "author"] }, decls: 5, vars: 1, consts: [["hoverStyle", "", 1, "btn", "bg-blue-900", "hover:bg-blue-900/90", "text-white", 3, "click"], [3, "author"], [3, "closeModal", "saveAuthor", "author"]], template: function EditAuthorModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "button", 0);
      \u0275\u0275listener("click", function EditAuthorModalComponent_Template_button_click_0_listener() {
        return ctx.showModal.set(true);
      });
      \u0275\u0275elementStart(1, "span");
      \u0275\u0275text(2, "edit");
      \u0275\u0275elementEnd();
      \u0275\u0275text(3, " Editar\n");
      \u0275\u0275elementEnd();
      \u0275\u0275template(4, EditAuthorModalComponent_Conditional_4_Template, 1, 1, "author-modal", 1);
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.showModal() ? 4 : -1);
    }
  }, dependencies: [
    HoverStyleDirective,
    AuthorModalComponent
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EditAuthorModalComponent, { className: "EditAuthorModalComponent", filePath: "src/app/librarian/components/edit-author-modal/edit-author-modal.component.ts", lineNumber: 18 });
})();

// src/app/librarian/components/authors-table/authors-table.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function AuthorsTableComponent_For_16_Template(rf, ctx) {
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
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 2);
    \u0275\u0275element(10, "edit-author-modal", 3);
    \u0275\u0275elementStart(11, "button", 4);
    \u0275\u0275listener("click", function AuthorsTableComponent_For_16_Template_button_click_11_listener() {
      const author_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onDelete(author_r2.id));
    });
    \u0275\u0275elementStart(12, "span");
    \u0275\u0275text(13, "delete");
    \u0275\u0275elementEnd();
    \u0275\u0275text(14, " Eliminar ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const author_r2 = ctx.$implicit;
    const \u0275$index_26_r4 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275$index_26_r4 + 1 + ctx_r2.authorsStore.size() * ctx_r2.authorsStore.page());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(author_r2.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(author_r2.nationality);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(author_r2.birthDate);
    \u0275\u0275advance(2);
    \u0275\u0275property("author", author_r2);
  }
}
var AuthorsTableComponent = class _AuthorsTableComponent {
  authors = input([]);
  authorsStore = inject(AuthorsStore);
  authorService = inject(AuthorService);
  alertService = inject(AlertService);
  getAuthors = rxMethod(pipe(switchMap(() => this.authorsStore.getAuthors())));
  constructor() {
  }
  onDelete(id) {
    this.authorService.deleteAuthor(id).subscribe({
      next: () => {
        this.alertService.showAlert("El autor fue eliminado.", "success");
        this.getAuthors();
      },
      error: () => {
        this.alertService.showAlert("El autor no existe.", "warning");
      }
    });
  }
  static \u0275fac = function AuthorsTableComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuthorsTableComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AuthorsTableComponent, selectors: [["authors-table"]], inputs: { authors: [1, "authors"] }, decls: 17, vars: 0, consts: [[1, "overflow-x-auto", "h-full", "md:w-auto", "sm:w-full"], [1, "table", "table-pin-rows"], [1, "flex", "flex-row"], [3, "author"], ["hoverStyle", "", 1, "btn", "btn-error", "ml-2", "text-white", 3, "click"]], template: function AuthorsTableComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "table", 1)(2, "thead")(3, "tr")(4, "th");
      \u0275\u0275text(5, "No.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "th");
      \u0275\u0275text(7, "Nombre");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "th");
      \u0275\u0275text(9, "Nacionalidad");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "th");
      \u0275\u0275text(11, "Fecha de Nacimiento");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "th");
      \u0275\u0275text(13, "Acciones");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(14, "tbody");
      \u0275\u0275repeaterCreate(15, AuthorsTableComponent_For_16_Template, 15, 5, "tr", null, _forTrack0);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(15);
      \u0275\u0275repeater(ctx.authors());
    }
  }, dependencies: [
    HoverStyleDirective,
    EditAuthorModalComponent
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AuthorsTableComponent, { className: "AuthorsTableComponent", filePath: "src/app/librarian/components/authors-table/authors-table.component.ts", lineNumber: 21 });
})();

// src/app/librarian/pages/authors-page/authors-page.component.ts
var AuthorsPageComponent = class _AuthorsPageComponent {
  authorsStore = inject(AuthorsStore);
  getAuthors = rxMethod(pipe(switchMap(() => this.authorsStore.getAuthors())));
  authors = computed(() => this.authorsStore.authors());
  page = computed(() => this.authorsStore.page());
  size = computed(() => this.authorsStore.size());
  constructor() {
  }
  ngOnInit() {
    this.getAuthors();
  }
  ngOnDestroy() {
    this.authorsStore.patchInitialState();
  }
  changePage(delta) {
    this.authorsStore.patchPage(this.page() + delta);
    this.getAuthors();
  }
  changeSize(size) {
    this.authorsStore.patchSize(size);
    this.getAuthors();
  }
  static \u0275fac = function AuthorsPageComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuthorsPageComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AuthorsPageComponent, selectors: [["app-authors-page"]], decls: 8, vars: 5, consts: [[1, "flex", "flex-col", "mt-10"], [1, "font-bold", "text-3xl", "text-center"], [1, "mx-auto", "mt-5"], [1, "flex", "flex-row", "justify-between", "my-10"], [3, "setSize", "size"], [3, "next", "previous", "page", "hasNext", "hasPrevious"], [1, "flex", "justify-center", "px-3", "overflow-y-hidden", "mb-5", 3, "authors"]], template: function AuthorsPageComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h2", 1);
      \u0275\u0275text(2, "Autores");
      \u0275\u0275elementEnd();
      \u0275\u0275element(3, "create-author-modal", 2);
      \u0275\u0275elementStart(4, "div", 3)(5, "items-per-page", 4);
      \u0275\u0275listener("setSize", function AuthorsPageComponent_Template_items_per_page_setSize_5_listener($event) {
        return ctx.changeSize($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "app-pagination", 5);
      \u0275\u0275listener("next", function AuthorsPageComponent_Template_app_pagination_next_6_listener() {
        return ctx.changePage(1);
      })("previous", function AuthorsPageComponent_Template_app_pagination_previous_6_listener() {
        return ctx.changePage(-1);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275element(7, "authors-table", 6);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275property("size", ctx.size());
      \u0275\u0275advance();
      \u0275\u0275property("page", ctx.page())("hasNext", ctx.authorsStore.hasNext())("hasPrevious", ctx.authorsStore.hasPrevious());
      \u0275\u0275advance();
      \u0275\u0275property("authors", ctx.authors());
    }
  }, dependencies: [
    CreateAuthorModalComponent,
    ItemsPerPageComponent,
    PaginationComponent,
    AuthorsTableComponent
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AuthorsPageComponent, { className: "AuthorsPageComponent", filePath: "src/app/librarian/pages/authors-page/authors-page.component.ts", lineNumber: 21 });
})();
export {
  AuthorsPageComponent as default
};
//# sourceMappingURL=chunk-2IAVLPO3.js.map
