import {
  ReservationService
} from "./chunk-64AIT5GY.js";
import {
  BookModalComponent,
  BooksStore
} from "./chunk-QRPLYVMA.js";
import "./chunk-LTVUM2XA.js";
import {
  BookService
} from "./chunk-CMHSZZHP.js";
import {
  AuthStore
} from "./chunk-2SQF422D.js";
import "./chunk-CZUM7KFZ.js";
import "./chunk-6FVHQWOD.js";
import "./chunk-RZM3WV2J.js";
import {
  ActivatedRoute,
  Router
} from "./chunk-7L6NANUY.js";
import "./chunk-F6TWPE4Y.js";
import {
  rxMethod
} from "./chunk-4EGLECZR.js";
import "./chunk-OJMWA2H5.js";
import "./chunk-I5YV25LT.js";
import "./chunk-TBE3URDR.js";
import "./chunk-XHQ3PMRC.js";
import "./chunk-CM5EFMYB.js";
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
  HttpStatusCode
} from "./chunk-EHYTAPE2.js";
import {
  CurrencyPipe,
  computed,
  inject,
  input,
  output,
  pipe,
  signal,
  switchMap,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefinePipe,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-XTEA2TIV.js";

// src/app/library/pipes/isbn.pipe.ts
var IsbnPipe = class _IsbnPipe {
  transform(value) {
    const val = value.toString();
    return `${val.slice(0, 3)}-${val.slice(3, 6)}-${val.slice(6, 9)}-${val.slice(9, 12)}-${val.slice(12, 13)}`;
  }
  static \u0275fac = function IsbnPipe_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _IsbnPipe)();
  };
  static \u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "isbn", type: _IsbnPipe, pure: true });
};

// src/app/library/components/edit-book-modal/edit-book-modal.component.ts
function EditBookModalComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "book-modal", 2);
    \u0275\u0275listener("closeModal", function EditBookModalComponent_Conditional_4_Template_book_modal_closeModal_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showModal.set(false));
    })("saveBook", function EditBookModalComponent_Conditional_4_Template_book_modal_saveBook_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onUpdateBook());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("book", ctx_r1.book());
  }
}
var EditBookModalComponent = class _EditBookModalComponent {
  book = input.required();
  updateBook = output();
  booksStore = inject(BooksStore);
  getBooks = rxMethod(pipe(switchMap(() => this.booksStore.getBooks())));
  showModal = signal(false);
  onUpdateBook() {
    this.getBooks();
    this.updateBook.emit();
  }
  static \u0275fac = function EditBookModalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EditBookModalComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EditBookModalComponent, selectors: [["edit-book-modal"]], inputs: { book: [1, "book"] }, outputs: { updateBook: "updateBook" }, decls: 5, vars: 1, consts: [["hoverStyle", "", 1, "btn", "bg-blue-900", "hover:bg-blue-900/90", "text-white", "rounded-full", 3, "click"], [3, "book"], [3, "closeModal", "saveBook", "book"]], template: function EditBookModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "button", 0);
      \u0275\u0275listener("click", function EditBookModalComponent_Template_button_click_0_listener() {
        return ctx.showModal.set(true);
      });
      \u0275\u0275elementStart(1, "span");
      \u0275\u0275text(2, "edit");
      \u0275\u0275elementEnd();
      \u0275\u0275text(3, " Editar\n");
      \u0275\u0275elementEnd();
      \u0275\u0275template(4, EditBookModalComponent_Conditional_4_Template, 1, 1, "book-modal", 1);
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.showModal() ? 4 : -1);
    }
  }, dependencies: [
    HoverStyleDirective,
    BookModalComponent
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EditBookModalComponent, { className: "EditBookModalComponent", filePath: "src/app/library/components/edit-book-modal/edit-book-modal.component.ts", lineNumber: 18 });
})();

// src/app/library/pages/book-by-id-page/book-by-id-page.component.ts
function BookByIdPageComponent_Conditional_44_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "edit-book-modal", 9);
    \u0275\u0275listener("updateBook", function BookByIdPageComponent_Conditional_44_Conditional_1_Template_edit_book_modal_updateBook_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.updateView());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "button", 10);
    \u0275\u0275listener("click", function BookByIdPageComponent_Conditional_44_Conditional_1_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onDelete());
    });
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "delete");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Eliminar ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("book", ctx_r1.book());
  }
}
function BookByIdPageComponent_Conditional_44_Conditional_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 12);
    \u0275\u0275listener("click", function BookByIdPageComponent_Conditional_44_Conditional_2_Conditional_0_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onReserv());
    });
    \u0275\u0275elementStart(1, "span");
    \u0275\u0275text(2, "local_library");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Reservar ");
    \u0275\u0275elementEnd();
  }
}
function BookByIdPageComponent_Conditional_44_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, BookByIdPageComponent_Conditional_44_Conditional_2_Conditional_0_Template, 4, 0, "button", 11);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r1.book().availableCopies === 0 ? 0 : -1);
  }
}
function BookByIdPageComponent_Conditional_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275template(1, BookByIdPageComponent_Conditional_44_Conditional_1_Template, 5, 1)(2, BookByIdPageComponent_Conditional_44_Conditional_2_Template, 1, 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.role() === "LIBRARIAN" ? 1 : 2);
  }
}
var BookByIdPageComponent = class _BookByIdPageComponent {
  router = inject(Router);
  alerService = inject(AlertService);
  authStore = inject(AuthStore);
  activatedRoute = inject(ActivatedRoute);
  bookService = inject(BookService);
  reservationService = inject(ReservationService);
  book = signal(null);
  imageUrl = computed(() => `${environment.AWS_URL}/${this.book()?.imageUrl}`);
  role = computed(() => {
    const user = this.authStore.user();
    return user ? user.role.name : null;
  });
  constructor() {
  }
  ngOnInit() {
    this.activatedRoute.data.subscribe({
      next: ({ book }) => this.book.set(book)
    });
  }
  updateView() {
    this.bookService.getBookById(this.book().id).subscribe({
      next: (book) => this.book.set(book)
    });
  }
  onDelete() {
    this.bookService.deleteBook(this.book().id).subscribe({
      next: () => {
        this.alerService.showAlert("El libro fue eliminado.", "success");
        this.router.navigateByUrl("/library");
      },
      error: () => {
        this.alerService.showAlert("El libro no existe.", "warning");
      }
    });
  }
  onReserv() {
    this.reservationService.createReservation(this.book().id).subscribe({
      next: () => {
        this.alerService.showAlert("Tu reservacion se ha registrado.", "success");
        this.router.navigateByUrl("/library");
      },
      error: (error) => {
        error.status === HttpStatusCode.NotFound ? this.alerService.showAlert("El libro no existe.", "warning") : this.alerService.showAlert("Ya has reservado este libro.", "info");
      }
    });
  }
  static \u0275fac = function BookByIdPageComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BookByIdPageComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BookByIdPageComponent, selectors: [["app-book-by-id-page"]], decls: 45, vars: 18, consts: [[1, "flex", "flex-col", "h-full", "p-10"], [1, "grid", "grid-cols-1", "md:grid-cols-3"], [1, "w-full", "p-2", "shadow-md", "bg-base-200", "rounded-2xl", "flex", "justify-center"], [1, "h-full", "object-cover", "object-center", 3, "src", "alt"], [1, "w-full", "px-0", "py-5", "md:px-10", "md:py-0", "flex", "flex-col"], [1, "font-bold", "text-2xl"], [1, "font-bold", "text-2xl", "mt-5"], [1, "w-full", "px-0", "md:px-10", "flex", "flex-col"], [1, "w-full", "p-2", "py-5", "flex", "justify-start"], [3, "updateBook", "book"], ["hoverStyle", "", 1, "btn", "btn-error", "text-white", "rounded-full", "ml-3", 3, "click"], ["hoverStyle", "", 1, "btn", "btn-primary", "text-white", "rounded-full"], ["hoverStyle", "", 1, "btn", "btn-primary", "text-white", "rounded-full", 3, "click"]], template: function BookByIdPageComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275element(3, "img", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 4)(5, "span", 5);
      \u0275\u0275text(6, "Informacion del Autor");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "span");
      \u0275\u0275text(8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "span");
      \u0275\u0275text(10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "span");
      \u0275\u0275text(12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "span", 6);
      \u0275\u0275text(14, "Informacion de la Editorial");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "span");
      \u0275\u0275text(16);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "span", 6);
      \u0275\u0275text(18, "Titulo");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "span");
      \u0275\u0275text(20);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "span", 6);
      \u0275\u0275text(22, "Codigo");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "span");
      \u0275\u0275text(24);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(25, "div", 7)(26, "span", 5);
      \u0275\u0275text(27, "Fecha de Publicacion");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "span");
      \u0275\u0275text(29);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "span", 6);
      \u0275\u0275text(31, "Precio");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "span");
      \u0275\u0275text(33);
      \u0275\u0275pipe(34, "currency");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "span", 6);
      \u0275\u0275text(36, "Disponibles");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "span");
      \u0275\u0275text(38);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "span", 6);
      \u0275\u0275text(40, "ISBN");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "span");
      \u0275\u0275text(42);
      \u0275\u0275pipe(43, "isbn");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(44, BookByIdPageComponent_Conditional_44_Template, 3, 1, "div", 8);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      let tmp_1_0;
      \u0275\u0275advance(3);
      \u0275\u0275property("src", ctx.imageUrl(), \u0275\u0275sanitizeUrl)("alt", (tmp_1_0 = ctx.book()) == null ? null : tmp_1_0.title);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1("Nombre: ", ctx.book().author.name, "");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1("Fecha de Nacimiento: ", ctx.book().author.birthDate, "");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1("Nacionalidad: ", ctx.book().author.nationality, "");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1("Nombre: ", ctx.book().publisher.name, "");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.book().title);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.book().code);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.book().publicationDate);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(34, 13, ctx.book().price, "Q "));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1("", ctx.book().availableCopies, " - Unidades");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(43, 16, ctx.book().isbn));
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.role() ? 44 : -1);
    }
  }, dependencies: [
    CurrencyPipe,
    IsbnPipe,
    EditBookModalComponent,
    HoverStyleDirective
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BookByIdPageComponent, { className: "BookByIdPageComponent", filePath: "src/app/library/pages/book-by-id-page/book-by-id-page.component.ts", lineNumber: 26 });
})();
export {
  BookByIdPageComponent as default
};
//# sourceMappingURL=chunk-QEOFLTCU.js.map
