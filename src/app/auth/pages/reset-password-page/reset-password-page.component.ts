import { Component, computed, inject, signal } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

import { AlertService } from '../../../shared/services/alert.service';
import { RecoveryForm } from '../../interfaces/auth.interface';
import { passwordPattern } from '../../../forms/validators/patterns';
import { isFieldOneEqualsFieldTwo } from '../../../forms/validators/custom-validators';
import { TextInputComponent } from 'src/app/forms/components/text-input/text-input.component';

@Component({
  selector: 'auth-reset-password-page',
  imports: [
    ReactiveFormsModule,
    TextInputComponent
  ],
  templateUrl: './reset-password-page.component.html',
  styles: ``
})
export default class ResetPasswordPageComponent {

  private formBuilder = inject(NonNullableFormBuilder);
  private alertService = inject(AlertService);

  private _codeSent = signal<boolean>(false);

  public codeSent = computed(() => this._codeSent());
  public email = this.formBuilder.control('', [Validators.required]);
  public resetForm = this.formBuilder.group<RecoveryForm>({
    totp: this.formBuilder.control('', [Validators.required]),
    password: this.formBuilder.control('', [Validators.required, Validators.pattern(passwordPattern)]),
    confirmPassword: this.formBuilder.control('', [Validators.required])
  }, {
    validators: isFieldOneEqualsFieldTwo("password", "confirmPassword")
  });

  constructor() { }

  public sendCode(): void {
    if (this.email.invalid) {
      this.email.markAsTouched();
      this.alertService.showAlert('El correo electronico es necesario para esta accion.', 'error');
      return;
    }
    this._codeSent.set(true);
  }

  public onResetPassword(): void {
    if (this.resetForm.invalid) {
      this.resetForm.markAllAsTouched();
      this.alertService.showAlert('Formulario invalido, porfavor llenalo correctamente.', 'error');
      return;
    }
  }

}
