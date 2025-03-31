import { Component, inject, signal } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

import { AlertService } from 'src/app/shared/services/alert.service';
import { AuthStore } from '../../store/auth.store';
import { TextInputComponent } from 'src/app/forms/components/text-input/text-input.component';

@Component({
  selector: 'app-login-page',
  imports: [
    RouterLink,
    ReactiveFormsModule,
    TextInputComponent
  ],
  templateUrl: './login-page.component.html',
  styles: ``
})
export default class LoginPageComponent {

  private router = inject(Router);
  private formBuilder = inject(NonNullableFormBuilder);
  private authStore = inject(AuthStore);
  private alertService = inject(AlertService);

  public isLoading = signal<boolean>(false);

  public loginForm = this.formBuilder.group({
    email: this.formBuilder.control('', [Validators.required]),
    password: this.formBuilder.control('', [Validators.required])
  });

  constructor() { }

  public onLogin(): void {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      this.alertService.showAlert('Formulario invalido, porfavor llenalo correctamente.', 'error');
      return;
    }
    this.isLoading.set(true);
    this.authStore.login(this.loginForm.getRawValue()).subscribe({
      next: () => {
        this.alertService.showAlert('Bienvenido!!!', 'success');
        this.router.navigateByUrl('/');
      },
      error: () => this.alertService.showAlert('Credenciales Incorrectas.', 'error')
    });
    this.isLoading.set(false);
  }

}
