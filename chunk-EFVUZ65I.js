import {
  AuthStore
} from "./chunk-2SQF422D.js";
import "./chunk-6FVHQWOD.js";
import {
  Router,
  RouterLink
} from "./chunk-7L6NANUY.js";
import "./chunk-OJMWA2H5.js";
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
import "./chunk-QS57EMBJ.js";
import "./chunk-EHYTAPE2.js";
import {
  inject,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵtext
} from "./chunk-XTEA2TIV.js";

// src/app/auth/pages/login-page/login-page.component.ts
var LoginPageComponent = class _LoginPageComponent {
  router = inject(Router);
  formBuilder = inject(NonNullableFormBuilder);
  authStore = inject(AuthStore);
  alertService = inject(AlertService);
  isLoading = signal(false);
  loginForm = this.formBuilder.group({
    email: this.formBuilder.control("", [Validators.required]),
    password: this.formBuilder.control("", [Validators.required])
  });
  constructor() {
  }
  onLogin() {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      this.alertService.showAlert("Formulario invalido, porfavor llenalo correctamente.", "error");
      return;
    }
    this.isLoading.set(true);
    this.authStore.login(this.loginForm.getRawValue()).subscribe({
      next: () => {
        this.alertService.showAlert("Bienvenido!!!", "success");
        this.router.navigateByUrl("/");
      },
      error: () => this.alertService.showAlert("Credenciales Incorrectas.", "error")
    });
    this.isLoading.set(false);
  }
  static \u0275fac = function LoginPageComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LoginPageComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginPageComponent, selectors: [["app-login-page"]], decls: 11, vars: 4, consts: [[1, "flex", "flex-col"], [1, "text-3xl", "font-bold", "text-center", "my-3"], [3, "ngSubmit", "formGroup"], ["type", "text", "legend", "Email", "placeholder", "nick@example.com", "label", "El email es obligatorio.", 3, "control"], ["type", "password", "legend", "Contrase\xF1a", "placeholder", "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", "label", "La contrase\xF1a es obligatoria.", 3, "control"], ["type", "submit", 1, "btn", "bg-yb", "my-3", "text-white", "w-full", "rounded-full", "hover:bg-yb/85", 3, "disabled"], [1, "text-xs", "block", "text-center"], ["routerLink", "/auth/reset-password", 1, "link"]], template: function LoginPageComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "span", 1);
      \u0275\u0275text(2, "Inicia Sesi\xF3n");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "form", 2);
      \u0275\u0275listener("ngSubmit", function LoginPageComponent_Template_form_ngSubmit_3_listener() {
        return ctx.onLogin();
      });
      \u0275\u0275element(4, "text-input", 3)(5, "text-input", 4);
      \u0275\u0275elementStart(6, "button", 5);
      \u0275\u0275text(7, " Ingresar ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "span", 6)(9, "a", 7);
      \u0275\u0275text(10, "\xBFOlvidaste tu contrase\xF1a?");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275property("formGroup", ctx.loginForm);
      \u0275\u0275advance();
      \u0275\u0275property("control", ctx.loginForm.controls.email);
      \u0275\u0275advance();
      \u0275\u0275property("control", ctx.loginForm.controls.password);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.isLoading());
    }
  }, dependencies: [
    RouterLink,
    ReactiveFormsModule,
    \u0275NgNoValidate,
    NgControlStatusGroup,
    FormGroupDirective,
    TextInputComponent
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginPageComponent, { className: "LoginPageComponent", filePath: "src/app/auth/pages/login-page/login-page.component.ts", lineNumber: 19 });
})();
export {
  LoginPageComponent as default
};
//# sourceMappingURL=chunk-EFVUZ65I.js.map
