import {
  ImageInputComponent
} from "./chunk-LTVUM2XA.js";
import {
  BookService
} from "./chunk-DYTPU4VI.js";
import {
  SelectInputComponent
} from "./chunk-CZUM7KFZ.js";
import {
  ISBNPattern,
  codePattern
} from "./chunk-RZM3WV2J.js";
import {
  ActivatedRoute
} from "./chunk-7L6NANUY.js";
import {
  ModalComponent
} from "./chunk-F6TWPE4Y.js";
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
  environment
} from "./chunk-QBPE6MBL.js";
import {
  HttpStatusCode
} from "./chunk-EHYTAPE2.js";
import {
  __objRest,
  __spreadProps,
  __spreadValues,
  catchError,
  inject,
  input,
  of,
  output,
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
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext
} from "./chunk-XTEA2TIV.js";

// src/app/library/stores/books.store.ts
var initialState = {
  books: [],
  filters: {
    page: 0,
    size: 5
  },
  hasNext: false,
  hasPrevious: false
};
var BooksStore = signalStore({
  providedIn: "root"
}, withState(initialState), withProps(() => ({
  bookService: inject(BookService)
})), withMethods((_a) => {
  var _b = _a, { bookService } = _b, store = __objRest(_b, ["bookService"]);
  return {
    getBooks() {
      return bookService.getBooks(store.filters()).pipe(switchMap(({ hasNext, hasPrevious, data }) => {
        if (!data.length && hasPrevious) {
          const page = store.filters().page - 1;
          patchState(store, { filters: __spreadProps(__spreadValues({}, store.filters()), { page }) });
          return this.getBooks();
        }
        patchState(store, { hasNext, hasPrevious, books: data });
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
      patchState(store, { filters: __spreadProps(__spreadValues({}, store.filters()), { page }) });
    },
    patchSize(size) {
      patchState(store, { filters: __spreadProps(__spreadValues({}, store.filters()), { size }) });
    },
    patchQ(q) {
      patchState(store, { filters: __spreadProps(__spreadValues({}, store.filters()), { q }) });
    },
    patchOtherFilters(other) {
      patchState(store, { filters: __spreadValues(__spreadValues({}, store.filters()), other) });
    }
  };
}));

// src/app/library/components/book-modal/book-modal.component.ts
function BookModalComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "div", 15);
    \u0275\u0275element(2, "img", 16);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("src", ctx_r0.imageUrl(), \u0275\u0275sanitizeUrl);
  }
}
var BookModalComponent = class _BookModalComponent {
  alertService = inject(AlertService);
  bookService = inject(BookService);
  book = input(null);
  closeModal = output();
  saveBook = output();
  activatedRoute = inject(ActivatedRoute);
  formBuilder = inject(NonNullableFormBuilder);
  authors = signal([]);
  publishers = signal([]);
  imageUrl = signal(null);
  isLoading = signal(false);
  bookForm = this.formBuilder.group({
    authorId: this.formBuilder.control("", [Validators.required]),
    publisherId: this.formBuilder.control("", [Validators.required]),
    title: this.formBuilder.control("", [Validators.required]),
    code: this.formBuilder.control("", [Validators.required, Validators.pattern(codePattern)]),
    isbn: this.formBuilder.control("", [Validators.required, Validators.pattern(ISBNPattern)]),
    quantity: this.formBuilder.control(1, [Validators.required, Validators.min(1), Validators.max(50)]),
    publicationDate: this.formBuilder.control("", [Validators.required]),
    price: this.formBuilder.control(1, [Validators.required, Validators.min(0), Validators.max(1e3)]),
    imageFile: this.formBuilder.control(null, [Validators.required])
  });
  max = signal((/* @__PURE__ */ new Date()).toISOString().split("T").shift());
  constructor() {
  }
  ngOnInit() {
    this.activatedRoute.data.subscribe({
      next: ({ authors, publishers }) => {
        this.authors.set(authors);
        this.publishers.set(publishers);
        if (this.book()) {
          const { title, code, isbn, quantity, publicationDate, price, imageUrl, author, publisher } = this.book();
          this.bookForm.controls.imageFile.clearValidators();
          this.bookForm.patchValue({
            authorId: author.id,
            publisherId: publisher.id,
            title,
            code,
            isbn,
            quantity,
            publicationDate: publicationDate.toString(),
            price
          });
          this.imageUrl.set(`${environment.AWS_URL}/${imageUrl}`);
          this.bookForm.updateValueAndValidity();
        }
      }
    });
  }
  onCreatebook() {
    const body = this.bookForm.getRawValue();
    this.bookService.createBook(body).subscribe({
      next: () => {
        this.saveBook.emit();
        this.closeModal.emit();
        this.alertService.showAlert("Libro creado correctamente.", "success");
      },
      error: (error) => {
        const status = error.status;
        status === HttpStatusCode.BadRequest ? this.alertService.showAlert("Datos duplicados o invalidos.", "error") : this.alertService.showAlert("Algo salio mal.", "error");
      }
    });
  }
  onUpdateBook() {
    const body = this.bookForm.getRawValue();
    this.bookService.updateBook(this.book().id, body).subscribe({
      next: () => {
        this.saveBook.emit();
        this.closeModal.emit();
        this.alertService.showAlert("Libro actualizado correctamente.", "success");
      },
      error: (error) => {
        const status = error.status;
        status === HttpStatusCode.BadRequest ? this.alertService.showAlert("Datos duplicados o invalidos.", "error") : this.alertService.showAlert("Algo salio mal.", "error");
      }
    });
  }
  onSaveBook() {
    if (this.bookForm.invalid) {
      this.bookForm.markAllAsTouched();
      this.alertService.showAlert("Formulario invalido, por favor llena los campos.", "error");
      return;
    }
    this.isLoading.set(true);
    this.book() ? this.onUpdateBook() : this.onCreatebook();
    this.isLoading.set(false);
  }
  static \u0275fac = function BookModalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BookModalComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BookModalComponent, selectors: [["book-modal"]], inputs: { book: [1, "book"] }, outputs: { closeModal: "closeModal", saveBook: "saveBook" }, decls: 17, vars: 25, consts: [[3, "closeModal", "fullWidth", "fullHeight"], ["body", "", 1, "flex", "flex-col", "max-h-full", "overflow-y-auto", 3, "ngSubmit", "formGroup"], [1, "flex-none", "font-bold", "text-3xl", "text-center", "my-5"], [1, "grow", "grid", "grid-cols-1", "md:grid-cols-6", "overflow-y-auto"], ["legend", "Author", "label", "Este campo es obligatorio.", 1, "m-3", "md:col-span-3", 3, "control", "options"], ["legend", "Editorial", "label", "Este campo es obligatorio.", 1, "m-3", "md:col-span-3", 3, "control", "options"], ["legend", "Titulo", "placeholder", "Book Example", "label", "Este campo es obligatorio.", 1, "m-3", "md:col-span-2", 3, "control"], ["legend", "Codigo", "placeholder", "XXX-ABC", "label", "Este campo es obligatorio.", "mask", "000-AAA", 1, "m-3", "md:col-span-2", 3, "control", "disabled", "dropCharacter"], ["legend", "ISBN", "placeholder", "978-XXX-XXX-XXX-X", "label", "Este campo es obligatorio.", "mask", "000-000-000-000-0", 1, "m-3", "md:col-span-2", 3, "control", "disabled"], ["legend", "Fecha de Publicacion", "label", "El campo es obligatorio.", 1, "m-3", "md:col-span-2", 3, "control", "max"], ["legend", "Copias", "placeholder", "0", "label", "Este campo es obligatorio.", "type", "number", 1, "m-3", "md:col-span-2", 3, "control", "min", "max", "step"], ["legend", "Precio", "placeholder", "0.00", "label", "Este campo es obligatorio.", "type", "number", 1, "m-3", "md:col-span-2", 3, "control", "min", "max", "step"], ["legend", "Foto del Libro", 1, "m-3", "md:col-span-4", 3, "imageUrl", "control"], [1, "m-3", "md:col-span-2", "h-[70px]", "flex", "justify-center", "items-end"], ["type", "submit", 1, "mx-auto", "mt-5", "btn", "bg-yb", "hover:bg-yb/85", "text-white"], [1, "p-1", "w-[70px]", "h-full", "bg-base-300", "shadow-md", "rounded-xl", "flex", "justify-center"], ["alt", "Imagen del Libro", 1, "h-full", "object-cover", "object-center", 3, "src"]], template: function BookModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-modal", 0);
      \u0275\u0275listener("closeModal", function BookModalComponent_Template_app_modal_closeModal_0_listener() {
        return ctx.closeModal.emit();
      });
      \u0275\u0275elementStart(1, "form", 1);
      \u0275\u0275listener("ngSubmit", function BookModalComponent_Template_form_ngSubmit_1_listener() {
        return ctx.onSaveBook();
      });
      \u0275\u0275elementStart(2, "span", 2);
      \u0275\u0275text(3, "Datos del Libro");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 3);
      \u0275\u0275element(5, "select-input", 4)(6, "select-input", 5)(7, "text-input", 6)(8, "text-input", 7)(9, "text-input", 8)(10, "date-input", 9)(11, "text-input", 10)(12, "text-input", 11);
      \u0275\u0275elementStart(13, "image-input", 12);
      \u0275\u0275listener("imageUrl", function BookModalComponent_Template_image_input_imageUrl_13_listener($event) {
        return ctx.imageUrl.set($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(14, BookModalComponent_Conditional_14_Template, 3, 1, "div", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "button", 14);
      \u0275\u0275text(16, " Guardar ");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275property("fullWidth", true)("fullHeight", true);
      \u0275\u0275advance();
      \u0275\u0275property("formGroup", ctx.bookForm);
      \u0275\u0275advance(4);
      \u0275\u0275property("control", ctx.bookForm.controls.authorId)("options", ctx.authors());
      \u0275\u0275advance();
      \u0275\u0275property("control", ctx.bookForm.controls.publisherId)("options", ctx.publishers());
      \u0275\u0275advance();
      \u0275\u0275property("control", ctx.bookForm.controls.title);
      \u0275\u0275advance();
      \u0275\u0275property("control", ctx.bookForm.controls.code)("disabled", ctx.book() ? true : false)("dropCharacter", false);
      \u0275\u0275advance();
      \u0275\u0275property("control", ctx.bookForm.controls.isbn)("disabled", ctx.book() ? true : false);
      \u0275\u0275advance();
      \u0275\u0275property("control", ctx.bookForm.controls.publicationDate)("max", ctx.max());
      \u0275\u0275advance();
      \u0275\u0275property("control", ctx.bookForm.controls.quantity)("min", 1)("max", 50)("step", 1);
      \u0275\u0275advance();
      \u0275\u0275property("control", ctx.bookForm.controls.price)("min", 1)("max", 1e3)("step", 0.01);
      \u0275\u0275advance();
      \u0275\u0275property("control", ctx.bookForm.controls.imageFile);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.imageUrl() ? 14 : -1);
    }
  }, dependencies: [
    ReactiveFormsModule,
    \u0275NgNoValidate,
    NgControlStatusGroup,
    FormGroupDirective,
    ModalComponent,
    SelectInputComponent,
    TextInputComponent,
    DateInputComponent,
    ImageInputComponent
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BookModalComponent, { className: "BookModalComponent", filePath: "src/app/library/components/book-modal/book-modal.component.ts", lineNumber: 30 });
})();

export {
  BooksStore,
  BookModalComponent
};
//# sourceMappingURL=chunk-X7TLWSPC.js.map
