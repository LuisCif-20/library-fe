import {
  isFieldOneEqualsFieldTwo
} from "./chunk-ZCXXLI7T.js";
import {
  SelectInputComponent
} from "./chunk-CZUM7KFZ.js";
import {
  AuthService
} from "./chunk-M62AKXZU.js";
import {
  emailPattern,
  namePattern,
  passwordPattern
} from "./chunk-RZM3WV2J.js";
import {
  ActivatedRoute,
  Router
} from "./chunk-7L6NANUY.js";
import {
  DateInputComponent
} from "./chunk-I5YV25LT.js";
import {
  TextInputComponent
} from "./chunk-TBE3URDR.js";
import "./chunk-XHQ3PMRC.js";
import {
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators
} from "./chunk-CM5EFMYB.js";
import {
  AlertService
} from "./chunk-VVQ2XORH.js";
import {
  HoverStyleDirective
} from "./chunk-JABWA3HV.js";
import "./chunk-QBPE6MBL.js";
import "./chunk-EHYTAPE2.js";
import {
  NgClass,
  __objRest,
  __spreadValues,
  computed,
  inject,
  input,
  output,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
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
  ɵɵpureFunction1,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-XTEA2TIV.js";

// src/app/auth/components/register-steps/register-steps.component.ts
var _c0 = (a0) => ({ "step-primary": a0 });
var RegisterStepsComponent = class _RegisterStepsComponent {
  step = input.required();
  personalForm = input.required();
  academicForm = input.required();
  accountForm = input.required();
  isValid(step, formGroup) {
    return this.step() === step || formGroup.valid;
  }
  getIconType(formGroup) {
    return formGroup.valid ? "material-icons" : "material-icons-outlined";
  }
  static \u0275fac = function RegisterStepsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RegisterStepsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RegisterStepsComponent, selectors: [["register-steps"]], inputs: { step: [1, "step"], personalForm: [1, "personalForm"], academicForm: [1, "academicForm"], accountForm: [1, "accountForm"] }, decls: 16, vars: 15, consts: [[1, "steps", "w-full"], [1, "step", "text-[10px]", 3, "ngClass"], [1, "step-icon"]], template: function RegisterStepsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "ul", 0)(1, "li", 1)(2, "span", 2)(3, "span");
      \u0275\u0275text(4, "face");
      \u0275\u0275elementEnd()();
      \u0275\u0275text(5, " Personales ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "li", 1)(7, "span", 2)(8, "span");
      \u0275\u0275text(9, "school");
      \u0275\u0275elementEnd()();
      \u0275\u0275text(10, " Academicos ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "li", 1)(12, "span", 2)(13, "span");
      \u0275\u0275text(14, "manage_accounts");
      \u0275\u0275elementEnd()();
      \u0275\u0275text(15, " Cuenta ");
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(9, _c0, ctx.isValid(1, ctx.personalForm())));
      \u0275\u0275advance(2);
      \u0275\u0275classMap(ctx.getIconType(ctx.personalForm()));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(11, _c0, ctx.isValid(2, ctx.academicForm())));
      \u0275\u0275advance(2);
      \u0275\u0275classMap(ctx.getIconType(ctx.academicForm()));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(13, _c0, ctx.isValid(3, ctx.accountForm())));
      \u0275\u0275advance(2);
      \u0275\u0275classMap(ctx.getIconType(ctx.accountForm()));
    }
  }, dependencies: [NgClass], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RegisterStepsComponent, { className: "RegisterStepsComponent", filePath: "src/app/auth/components/register-steps/register-steps.component.ts", lineNumber: 14 });
})();

// src/app/forms/components/form-step-navigation/form-step-navigation.component.ts
function FormStepNavigationComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275listener("click", function FormStepNavigationComponent_Conditional_0_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.prev.emit());
    });
    \u0275\u0275elementStart(1, "button", 4)(2, "span");
    \u0275\u0275text(3, "arrow_circle_left");
    \u0275\u0275elementEnd()()();
  }
}
var FormStepNavigationComponent = class _FormStepNavigationComponent {
  isFirstStep = input(false);
  isLastStep = input(false);
  isLoading = input(false);
  next = output();
  prev = output();
  static \u0275fac = function FormStepNavigationComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FormStepNavigationComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FormStepNavigationComponent, selectors: [["form-step-navigation"]], inputs: { isFirstStep: [1, "isFirstStep"], isLastStep: [1, "isLastStep"], isLoading: [1, "isLoading"] }, outputs: { next: "next", prev: "prev" }, decls: 5, vars: 4, consts: [["data-tip", "Anterior", 1, "tooltip", "tooltip-bottom", "mx-1"], [1, "tooltip", "tooltip-bottom", "mx-1"], ["type", "button", "hoverStyle", "", 1, "btn", "btn-accent", "btn-circle", "text-white", 3, "click", "disabled"], ["data-tip", "Anterior", 1, "tooltip", "tooltip-bottom", "mx-1", 3, "click"], ["type", "button", "hoverStyle", "", 1, "btn", "bg-yb", "btn-circle", "text-white"]], template: function FormStepNavigationComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, FormStepNavigationComponent_Conditional_0_Template, 4, 0, "div", 0);
      \u0275\u0275elementStart(1, "div", 1)(2, "button", 2);
      \u0275\u0275listener("click", function FormStepNavigationComponent_Template_button_click_2_listener() {
        return ctx.next.emit();
      });
      \u0275\u0275elementStart(3, "span");
      \u0275\u0275text(4);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275conditional(!ctx.isFirstStep() ? 0 : -1);
      \u0275\u0275advance();
      \u0275\u0275attribute("data-tip", ctx.isLastStep() ? "Enviar" : "Siguiente");
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.isLoading());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.isLastStep() ? "check_circle" : "arrow_circle_right");
    }
  }, dependencies: [HoverStyleDirective], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FormStepNavigationComponent, { className: "FormStepNavigationComponent", filePath: "src/app/forms/components/form-step-navigation/form-step-navigation.component.ts", lineNumber: 13 });
})();

// src/app/forms/components/personal-form/personal-form.component.ts
var _c02 = [[["", "buttons", ""]]];
var _c1 = ["[buttons]"];
function PersonalFormComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275element(1, "text-input", 1)(2, "date-input", 2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 3);
    \u0275\u0275element(4, "text-input", 4);
    \u0275\u0275projection(5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("control", ctx_r0.form().controls.name);
    \u0275\u0275advance();
    \u0275\u0275property("control", ctx_r0.form().controls.birthDate);
    \u0275\u0275advance(2);
    \u0275\u0275property("control", ctx_r0.form().controls.cui);
  }
}
var PersonalFormComponent = class _PersonalFormComponent {
  form = input(null);
  isFormNull = computed(() => this.form() ? false : true);
  static \u0275fac = function PersonalFormComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PersonalFormComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PersonalFormComponent, selectors: [["personal-form"]], inputs: { form: [1, "form"] }, ngContentSelectors: _c1, decls: 1, vars: 1, consts: [[1, "grid", "grid-cols-2", "gap-x-2"], ["legend", "Nombre", "placeholder", "Nick", "label", "El campo es obligatorio", 3, "control"], ["legend", "Nacimiento", "label", "Elige una fecha valida.", 3, "control"], [1, "grid", "grid-cols-5", "gap-x-2"], ["legend", "CUI", "placeholder", "XXXX XXXXX XXXX", "label", "El campo es obligatorio y debe ser de 13 digitos", "mask", "0000 00000 0000", 1, "col-span-3", 3, "control"]], template: function PersonalFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef(_c02);
      \u0275\u0275template(0, PersonalFormComponent_Conditional_0_Template, 6, 3);
    }
    if (rf & 2) {
      \u0275\u0275conditional(!ctx.isFormNull() ? 0 : -1);
    }
  }, dependencies: [
    ReactiveFormsModule,
    TextInputComponent,
    DateInputComponent
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PersonalFormComponent, { className: "PersonalFormComponent", filePath: "src/app/forms/components/personal-form/personal-form.component.ts", lineNumber: 19 });
})();

// src/app/forms/components/academic-form/academic-form.component.ts
var _c03 = [[["", "buttons", ""]]];
var _c12 = ["[buttons]"];
function AcademicFormComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275element(1, "text-input", 1)(2, "select-input", 2);
    \u0275\u0275elementEnd();
    \u0275\u0275projection(3);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("control", ctx_r0.form().controls.carnet);
    \u0275\u0275advance();
    \u0275\u0275property("control", ctx_r0.form().controls.degreeId)("options", ctx_r0.degrees());
  }
}
var AcademicFormComponent = class _AcademicFormComponent {
  form = input(null);
  degrees = input.required();
  isFormNull = computed(() => this.form() ? false : true);
  static \u0275fac = function AcademicFormComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AcademicFormComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AcademicFormComponent, selectors: [["academic-form"]], inputs: { form: [1, "form"], degrees: [1, "degrees"] }, ngContentSelectors: _c12, decls: 1, vars: 1, consts: [[1, "grid", "grid-cols-2", "gap-x-2"], ["type", "text", "legend", "Carn\xE9", "placeholder", "XXXXXXXXX", "label", "El campo es obligatorio.", "mask", "000000000", 3, "control"], ["legend", "Carrera", 3, "control", "options"]], template: function AcademicFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef(_c03);
      \u0275\u0275template(0, AcademicFormComponent_Conditional_0_Template, 4, 3);
    }
    if (rf & 2) {
      \u0275\u0275conditional(!ctx.isFormNull() ? 0 : -1);
    }
  }, dependencies: [
    TextInputComponent,
    SelectInputComponent
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AcademicFormComponent, { className: "AcademicFormComponent", filePath: "src/app/forms/components/academic-form/academic-form.component.ts", lineNumber: 18 });
})();

// src/app/forms/components/account-form/account-form.component.ts
var _c04 = [[["", "buttons", ""]]];
var _c13 = ["[buttons]"];
function AccountFormComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275element(1, "text-input", 1)(2, "text-input", 2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 3);
    \u0275\u0275element(4, "text-input", 4);
    \u0275\u0275projection(5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("control", ctx_r0.form().controls.email);
    \u0275\u0275advance();
    \u0275\u0275property("control", ctx_r0.form().controls.password);
    \u0275\u0275advance(2);
    \u0275\u0275property("control", ctx_r0.form().controls.confirmPassword);
  }
}
var AccountFormComponent = class _AccountFormComponent {
  form = input(null);
  isFormNull = computed(() => this.form() ? false : true);
  static \u0275fac = function AccountFormComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AccountFormComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AccountFormComponent, selectors: [["account-form"]], inputs: { form: [1, "form"] }, ngContentSelectors: _c13, decls: 1, vars: 1, consts: [[1, "grid", "grid-cols-2", "gap-x-2"], ["type", "text", "legend", "Email", "placeholder", "nick@example.com", "label", "El email es obligatorio.", 3, "control"], ["type", "password", "legend", "Contrase\xF1a", "placeholder", "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", "label", "Usa may\xFAsculas, min\xFAsculas, n\xFAmeros y s\xEDmbolos.", 3, "control"], [1, "grid", "grid-cols-5", "gap-x-2"], ["type", "password", "legend", "Repite tu Contrase\xF1a", "placeholder", "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", "label", "El campo no coincide.", 1, "col-span-3", 3, "control"]], template: function AccountFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef(_c04);
      \u0275\u0275template(0, AccountFormComponent_Conditional_0_Template, 6, 3);
    }
    if (rf & 2) {
      \u0275\u0275conditional(!ctx.isFormNull() ? 0 : -1);
    }
  }, dependencies: [TextInputComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AccountFormComponent, { className: "AccountFormComponent", filePath: "src/app/forms/components/account-form/account-form.component.ts", lineNumber: 15 });
})();

// src/app/auth/pages/register-page/register-page.component.ts
var _c05 = (a0) => ({ "hidden": a0 });
var RegisterPageComponent = class _RegisterPageComponent {
  router = inject(Router);
  authService = inject(AuthService);
  alertService = inject(AlertService);
  formBuilder = inject(NonNullableFormBuilder);
  activatedRoute = inject(ActivatedRoute);
  _step = signal(1);
  degrees = signal([]);
  isLoading = signal(false);
  step = computed(() => this._step());
  options = computed(() => {
    const degrees = this.degrees();
    return degrees.map((degree) => ({
      value: degree.id,
      label: `${degree.name} - ${degree.code}`
    }));
  });
  personalForm = this.formBuilder.group({
    name: this.formBuilder.control("", [Validators.required, Validators.minLength(1), Validators.pattern(namePattern)]),
    cui: this.formBuilder.control("", [Validators.required]),
    birthDate: this.formBuilder.control("", [Validators.required])
  });
  academicForm = this.formBuilder.group({
    carnet: this.formBuilder.control("", [Validators.required]),
    degreeId: this.formBuilder.control("", [Validators.required])
  });
  accountForm = this.formBuilder.group({
    email: this.formBuilder.control("", [Validators.required, Validators.pattern(emailPattern)]),
    password: this.formBuilder.control("", [Validators.required, Validators.pattern(passwordPattern)]),
    confirmPassword: this.formBuilder.control("", [Validators.required])
  }, {
    validators: isFieldOneEqualsFieldTwo("password", "confirmPassword")
  });
  constructor() {
  }
  ngOnInit() {
    this.activatedRoute.data.subscribe(({ degrees }) => {
      this.degrees.set(degrees.data);
    });
  }
  increment(formGroup) {
    if (formGroup.invalid) {
      formGroup.markAllAsTouched();
      this.alertService.showAlert("Formulario invalido, porfavor llenalo correctamente.", "error");
      return;
    }
    this._step.update((value) => value + 1);
  }
  decrement() {
    this._step.update((value) => value - 1);
  }
  onRegister() {
    if (this.accountForm.invalid) {
      this.academicForm.markAllAsTouched();
      this.alertService.showAlert("Formulario invalido, porfavor llenalo correctamente.", "error");
      return;
    }
    this.isLoading.set(true);
    const personalData = this.personalForm.getRawValue();
    const academicData = this.academicForm.getRawValue();
    const _a = this.accountForm.getRawValue(), { confirmPassword } = _a, accountData = __objRest(_a, ["confirmPassword"]);
    const body = {
      userAccount: __spreadValues(__spreadValues({}, personalData), accountData),
      student: __spreadValues({}, academicData)
    };
    this.authService.register(body).subscribe({
      next: () => {
        this.alertService.showAlert("Solicitud enviada.", "success");
        this.router.navigateByUrl("/auth");
      },
      error: () => this.alertService.showAlert("Datos duplicados o incorrectos", "error")
    });
    this.isLoading.set(false);
  }
  static \u0275fac = function RegisterPageComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RegisterPageComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RegisterPageComponent, selectors: [["auth-register-page"]], decls: 10, vars: 20, consts: [[1, "flex", "flex-col"], [1, "text-3xl", "font-bold", "block", "text-center", "my-3"], [1, "mb-4", 3, "step", "personalForm", "academicForm", "accountForm"], [3, "ngClass", "form"], ["buttons", "", 1, "col-span-2", "flex", "justify-center", "items-end", 2, "height", "73px", 3, "next", "isFirstStep"], [3, "ngClass", "form", "degrees"], ["buttons", "", 1, "flex", "justify-center", "items-end", "mt-7", 3, "prev", "next"], ["buttons", "", 1, "col-span-2", "flex", "justify-center", "items-end", 2, "height", "73px", 3, "prev", "next", "isLastStep", "isLoading"]], template: function RegisterPageComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "span", 1);
      \u0275\u0275text(2, "Registrate");
      \u0275\u0275elementEnd();
      \u0275\u0275element(3, "register-steps", 2);
      \u0275\u0275elementStart(4, "personal-form", 3)(5, "form-step-navigation", 4);
      \u0275\u0275listener("next", function RegisterPageComponent_Template_form_step_navigation_next_5_listener() {
        return ctx.increment(ctx.personalForm);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "academic-form", 5)(7, "form-step-navigation", 6);
      \u0275\u0275listener("prev", function RegisterPageComponent_Template_form_step_navigation_prev_7_listener() {
        return ctx.decrement();
      })("next", function RegisterPageComponent_Template_form_step_navigation_next_7_listener() {
        return ctx.increment(ctx.academicForm);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "account-form", 3)(9, "form-step-navigation", 7);
      \u0275\u0275listener("prev", function RegisterPageComponent_Template_form_step_navigation_prev_9_listener() {
        return ctx.decrement();
      })("next", function RegisterPageComponent_Template_form_step_navigation_next_9_listener() {
        return ctx.onRegister();
      });
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275property("step", ctx.step())("personalForm", ctx.personalForm)("academicForm", ctx.academicForm)("accountForm", ctx.accountForm);
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(14, _c05, ctx.step() !== 1))("form", ctx.personalForm);
      \u0275\u0275advance();
      \u0275\u0275property("isFirstStep", true);
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(16, _c05, ctx.step() !== 2))("form", ctx.academicForm)("degrees", ctx.options());
      \u0275\u0275advance(2);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(18, _c05, ctx.step() !== 3))("form", ctx.accountForm);
      \u0275\u0275advance();
      \u0275\u0275property("isLastStep", true)("isLoading", ctx.isLoading());
    }
  }, dependencies: [
    NgClass,
    AccountFormComponent,
    PersonalFormComponent,
    AcademicFormComponent,
    RegisterStepsComponent,
    FormStepNavigationComponent
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RegisterPageComponent, { className: "RegisterPageComponent", filePath: "src/app/auth/pages/register-page/register-page.component.ts", lineNumber: 35 });
})();
export {
  RegisterPageComponent as default
};
//# sourceMappingURL=chunk-6F6N5QFA.js.map
