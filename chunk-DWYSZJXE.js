import {
  isFieldOneEqualsFieldTwo
} from "./chunk-ZCXXLI7T.js";
import {
  passwordPattern
} from "./chunk-RZM3WV2J.js";
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
  computed,
  inject,
  signal,
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
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext
} from "./chunk-XTEA2TIV.js";

// src/app/auth/pages/reset-password-page/reset-password-page.component.ts
function ResetPasswordPageComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275element(0, "text-input", 3);
    \u0275\u0275elementStart(1, "button", 4);
    \u0275\u0275listener("click", function ResetPasswordPageComponent_Conditional_3_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.sendCode());
    });
    \u0275\u0275text(2, " Enviar Codigo ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 5);
    \u0275\u0275text(4, " Se te enviara un codigo a tu correo electronico para poder restablecer tu contrase\xF1a. ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("control", ctx_r1.email);
  }
}
function ResetPasswordPageComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 6);
    \u0275\u0275listener("ngSubmit", function ResetPasswordPageComponent_Conditional_4_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onResetPassword());
    });
    \u0275\u0275element(1, "text-input", 7)(2, "text-input", 8)(3, "text-input", 9);
    \u0275\u0275elementStart(4, "div", 10)(5, "button", 11);
    \u0275\u0275text(6, " Restablecer ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r1.resetForm);
    \u0275\u0275advance();
    \u0275\u0275property("control", ctx_r1.resetForm.controls.password);
    \u0275\u0275advance();
    \u0275\u0275property("control", ctx_r1.resetForm.controls.confirmPassword);
    \u0275\u0275advance();
    \u0275\u0275property("control", ctx_r1.resetForm.controls.totp);
  }
}
var ResetPasswordPageComponent = class _ResetPasswordPageComponent {
  formBuilder = inject(NonNullableFormBuilder);
  alertService = inject(AlertService);
  _codeSent = signal(false);
  codeSent = computed(() => this._codeSent());
  email = this.formBuilder.control("", [Validators.required]);
  resetForm = this.formBuilder.group({
    totp: this.formBuilder.control("", [Validators.required]),
    password: this.formBuilder.control("", [Validators.required, Validators.pattern(passwordPattern)]),
    confirmPassword: this.formBuilder.control("", [Validators.required])
  }, {
    validators: isFieldOneEqualsFieldTwo("password", "confirmPassword")
  });
  constructor() {
  }
  sendCode() {
    if (this.email.invalid) {
      this.email.markAsTouched();
      this.alertService.showAlert("El correo electronico es necesario para esta accion.", "error");
      return;
    }
    this._codeSent.set(true);
  }
  onResetPassword() {
    if (this.resetForm.invalid) {
      this.resetForm.markAllAsTouched();
      this.alertService.showAlert("Formulario invalido, porfavor llenalo correctamente.", "error");
      return;
    }
  }
  static \u0275fac = function ResetPasswordPageComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ResetPasswordPageComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ResetPasswordPageComponent, selectors: [["auth-reset-password-page"]], decls: 5, vars: 1, consts: [[1, "flex", "flex-col"], [1, "text-3xl", "font-bold", "text-center", "mt-3"], [1, "grid", "grid-cols-7", "gap-x-2", "mt-5", 3, "formGroup"], ["legend", "Ingresa tu email", "label", "Este campo es obligatorio.", "type", "text", "placeholder", "nick@example.com", 1, "mt-5", 3, "control"], [1, "btn", "bg-yb", "mt-2", "text-white", "w-full", 3, "click"], [1, "text-center", "text-xs", "mt-5"], [1, "grid", "grid-cols-7", "gap-x-2", "mt-5", 3, "ngSubmit", "formGroup"], ["type", "password", "legend", "Contrase\xF1a", "placeholder", "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", "label", "Usa may\xFAsculas, min\xFAsculas, n\xFAmeros y s\xEDmbolos.", 1, "col-span-3", 3, "control"], ["type", "password", "legend", "Repite tu Contrase\xF1a", "placeholder", "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", "label", "Las contrase\xF1as no coinciden.", 1, "col-span-4", 3, "control"], ["legend", "Ingresa el Codigo", "label", "Este campo es obligatorio.", "type", "text", "placeholder", "X X X X X X", "mask", "0 0 0 0 0 0", 1, "col-span-4", "md:col-span-3", 3, "control"], [1, "col-span-3", "md:col-span-4", "h-[78px]", "flex", "items-end"], ["type", "submit", 1, "btn", "bg-yb", "mb-1", "w-full", "text-white"]], template: function ResetPasswordPageComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "span", 1);
      \u0275\u0275text(2, "Renueva tu Contrase\xF1a");
      \u0275\u0275elementEnd();
      \u0275\u0275template(3, ResetPasswordPageComponent_Conditional_3_Template, 5, 1)(4, ResetPasswordPageComponent_Conditional_4_Template, 7, 4, "form", 2);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275conditional(!ctx.codeSent() ? 3 : 4);
    }
  }, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, NgControlStatusGroup, FormGroupDirective, TextInputComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ResetPasswordPageComponent, { className: "ResetPasswordPageComponent", filePath: "src/app/auth/pages/reset-password-page/reset-password-page.component.ts", lineNumber: 19 });
})();
export {
  ResetPasswordPageComponent as default
};
//# sourceMappingURL=chunk-DWYSZJXE.js.map
