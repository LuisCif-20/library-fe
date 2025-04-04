import {
  ConfigurationService
} from "./chunk-33JIL4SE.js";
import {
  ImageInputComponent
} from "./chunk-LTVUM2XA.js";
import {
  TextInputComponent
} from "./chunk-TBE3URDR.js";
import "./chunk-XHQ3PMRC.js";
import {
  NonNullableFormBuilder,
  Validators
} from "./chunk-CM5EFMYB.js";
import {
  AlertService
} from "./chunk-VVQ2XORH.js";
import {
  HoverStyleDirective
} from "./chunk-JABWA3HV.js";
import {
  environment
} from "./chunk-QBPE6MBL.js";
import "./chunk-EHYTAPE2.js";
import {
  computed,
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
  ɵɵsanitizeUrl,
  ɵɵtext
} from "./chunk-XTEA2TIV.js";

// src/app/librarian/pages/configuration-page/configuration-page.component.ts
var ConfigurationPageComponent = class _ConfigurationPageComponent {
  configurationService = inject(ConfigurationService);
  formBuilder = inject(NonNullableFormBuilder);
  alertService = inject(AlertService);
  config = computed(() => this.configurationService.configuration());
  src = signal(`${environment.AWS_URL}/${this.config().logo}`);
  configForm = this.formBuilder.group({
    name: this.formBuilder.control(this.config().name, [Validators.required]),
    imageFile: this.formBuilder.control(null),
    dailyRate: this.formBuilder.control(this.config().dailyRate, [Validators.required]),
    lateFee: this.formBuilder.control(this.config().lateFee, [Validators.required]),
    lossFee: this.formBuilder.control(this.config().lossFee, [Validators.required]),
    maxLoans: this.formBuilder.control(this.config().maxLoans, [Validators.required]),
    loanPeriodDays: this.formBuilder.control(this.config().loanPeriodDays, [Validators.required]),
    loanOverdueLimit: this.formBuilder.control(this.config().loanOverdueLimit, [Validators.required]),
    phone: this.formBuilder.control(this.config().phone, [Validators.required])
  });
  constructor() {
  }
  onUpdateConfig() {
    if (this.configForm.invalid) {
      this.alertService.showAlert("Formulario incompleto, porfavor llena los campos.", "error");
      this.configForm.markAllAsTouched();
      return;
    }
    this.configurationService.updateConfiguration(this.configForm.getRawValue()).subscribe({
      next: () => {
        this.alertService.showAlert("Informacion actualizada.", "success");
      },
      error: () => {
        this.alertService.showAlert("Algo ocurrio en la actualizacion.", "error");
      }
    });
  }
  static \u0275fac = function ConfigurationPageComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ConfigurationPageComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ConfigurationPageComponent, selectors: [["app-configuration-page"]], decls: 22, vars: 20, consts: [[1, "flex", "flex-col", "h-full", "p-10"], [1, "font-bold", "text-3xl", "text-center"], [1, "grid", "grid-cols-1", "md:grid-cols-3", "mt-10"], [1, "w-full", "flex", "flex-col", "px-2"], [1, "w-full", "p-2", "shadow-md", "bg-base-200", "rounded-2xl", "flex", "justify-center"], [1, "h-full", "object-cover", "object-center", 3, "src", "alt"], ["legend", "Logo", "label", "Este campo es obligatorio.", 1, "mx-auto", 3, "imageUrl", "control"], ["legend", "Nombre", "label", "El campo es obligatorio.", "placeholder", "Biblioteca", 1, "mx-auto", "w-75", 3, "control"], ["legend", "Telefono", "label", "El campo es obligatorio.", "placeholder", "XXXX-XXXX", "mask", "0000-0000", 1, "mx-auto", "w-75", 3, "control"], ["legend", "Tarifa Diaria", "label", "El campo es obligatorio.", "type", "number", 1, "mx-auto", "w-75", 3, "control", "min", "step"], ["legend", "Maximo de Prestamos", "label", "El campo es obligatorio.", "type", "number", 1, "mx-auto", "w-75", 3, "control", "min"], ["legend", "Cargo por Atraso", "label", "El campo es obligatorio.", "type", "number", 1, "mx-auto", "w-75", 3, "control", "min", "step"], ["legend", "Cargo por Perdida", "label", "El campo es obligatorio.", "type", "number", 1, "mx-auto", "w-75", 3, "control", "min", "step"], ["legend", "Periodo de Prestamo sin Cobro", "label", "El campo es obligatorio.", "type", "number", 1, "mx-auto", "w-75", 3, "control", "min"], ["legend", "Limite de Dias de Prestamo", "label", "El campo es obligatorio.", "type", "number", 1, "mx-auto", "w-75", 3, "control", "min"], ["hoverStyle", "", 1, "btn", "btn-primary", "text-white", "rounded-full", "mx-auto", "mt-10", 3, "click"]], template: function ConfigurationPageComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h2", 1);
      \u0275\u0275text(2, "Configuracion");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "div", 2)(4, "div", 3)(5, "div", 4);
      \u0275\u0275element(6, "img", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "image-input", 6);
      \u0275\u0275listener("imageUrl", function ConfigurationPageComponent_Template_image_input_imageUrl_7_listener($event) {
        return ctx.src.set($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "div", 3);
      \u0275\u0275element(9, "text-input", 7)(10, "text-input", 8)(11, "text-input", 9)(12, "text-input", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "div", 3);
      \u0275\u0275element(14, "text-input", 11)(15, "text-input", 12)(16, "text-input", 13)(17, "text-input", 14);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(18, "button", 15);
      \u0275\u0275listener("click", function ConfigurationPageComponent_Template_button_click_18_listener() {
        return ctx.onUpdateConfig();
      });
      \u0275\u0275elementStart(19, "span");
      \u0275\u0275text(20, "store");
      \u0275\u0275elementEnd();
      \u0275\u0275text(21, " Actualizar ");
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275property("src", ctx.src(), \u0275\u0275sanitizeUrl)("alt", ctx.config().name);
      \u0275\u0275advance();
      \u0275\u0275property("control", ctx.configForm.controls.imageFile);
      \u0275\u0275advance(2);
      \u0275\u0275property("control", ctx.configForm.controls.name);
      \u0275\u0275advance();
      \u0275\u0275property("control", ctx.configForm.controls.phone);
      \u0275\u0275advance();
      \u0275\u0275property("control", ctx.configForm.controls.dailyRate)("min", 0)("step", 0.01);
      \u0275\u0275advance();
      \u0275\u0275property("control", ctx.configForm.controls.maxLoans)("min", 0);
      \u0275\u0275advance(2);
      \u0275\u0275property("control", ctx.configForm.controls.lateFee)("min", 0)("step", 0.01);
      \u0275\u0275advance();
      \u0275\u0275property("control", ctx.configForm.controls.lossFee)("min", 0)("step", 0.01);
      \u0275\u0275advance();
      \u0275\u0275property("control", ctx.configForm.controls.loanPeriodDays)("min", 0);
      \u0275\u0275advance();
      \u0275\u0275property("control", ctx.configForm.controls.loanOverdueLimit)("min", 0);
    }
  }, dependencies: [
    ImageInputComponent,
    TextInputComponent,
    HoverStyleDirective
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ConfigurationPageComponent, { className: "ConfigurationPageComponent", filePath: "src/app/librarian/pages/configuration-page/configuration-page.component.ts", lineNumber: 20 });
})();
export {
  ConfigurationPageComponent as default
};
//# sourceMappingURL=chunk-TSMLD6UH.js.map
