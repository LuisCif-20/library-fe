import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { NgClass } from '@angular/common';

import { AcademicForm, AccountForm, PersonalForm } from '../../../forms/interfaces/form.interface';
import { Register } from '../../interfaces/auth.interface';
import { RegisterStepsComponent } from '../../components/register-steps/register-steps.component';
import { FormStepNavigationComponent } from '../../../forms/components/form-step-navigation/form-step-navigation.component';
import { PersonalFormComponent } from '../../../forms/components/personal-form/personal-form.component';
import { AcademicFormComponent } from '../../../forms/components/academic-form/academic-form.component';
import { AccountFormComponent } from '../../../forms/components/account-form/account-form.component';
import { AuthService } from '../../services/auth.service';
import { emailPattern, namePattern, passwordPattern } from 'src/app/forms/validators/patterns';
import { isFieldOneEqualsFieldTwo } from 'src/app/forms/validators/custom-validators';
import { AlertService } from 'src/app/shared/services/alert.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Degree } from 'src/app/shared/interfaces/degree.interface';
import { DegreeResponse } from '../../../shared/interfaces/degree.interface';
import { SelectOption } from 'src/app/forms/interfaces/select-input.interface';

@Component({
  selector: 'auth-register-page',
  imports: [
    NgClass,
    AccountFormComponent,
    PersonalFormComponent,
    AcademicFormComponent,
    RegisterStepsComponent,
    FormStepNavigationComponent
  ],
  templateUrl: './register-page.component.html',
  styles: ``
})
export default class RegisterPageComponent implements OnInit {

  private authService = inject(AuthService);
  private alertService = inject(AlertService);
  private formBuilder = inject(NonNullableFormBuilder);
  private activatedRoute = inject(ActivatedRoute);

  private _step = signal<number>(1);
  private degrees = signal<Degree[]>([]);

  public step = computed(() => this._step());
  public options = computed(() => {
    const degrees = this.degrees();
    return degrees.map<SelectOption>((degree) => ({
      value: degree.id,
      label: `${degree.name} - ${degree.code}`
    }))
  });

  public personalForm = this.formBuilder.group<PersonalForm>({
    name: this.formBuilder.control('', [Validators.required, Validators.minLength(1), Validators.pattern(namePattern)]),
    cui: this.formBuilder.control('', [Validators.required]),
    birthDate: this.formBuilder.control('', [Validators.required])
  });

  public academicForm = this.formBuilder.group<AcademicForm>({
    carnet: this.formBuilder.control('', [Validators.required]),
    degreeId: this.formBuilder.control('', [Validators.required])
  });

  public accountForm = this.formBuilder.group<AccountForm>({
    email: this.formBuilder.control('', [Validators.required, Validators.pattern(emailPattern)]),
    password: this.formBuilder.control('', [Validators.required, Validators.pattern(passwordPattern)]),
    confirmPassword: this.formBuilder.control('', [Validators.required])
  }, {
    validators: isFieldOneEqualsFieldTwo('password', 'confirmPassword')
  });

  constructor() { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ degrees }) => {
      this.degrees.set(degrees.data);
    })
  }

  public increment(formGroup: FormGroup): void {
    if (formGroup.invalid) {
      formGroup.markAllAsTouched();
      this.alertService.showAlert('Formulario invalido, porfavor llenalo correctamente.', 'error');
      return;
    }
    this._step.update(value => value + 1);
  }

  public decrement(): void {
    this._step.update(value => value - 1);
  }

  public onRegister() {
    if (this.accountForm.invalid) {
      this.academicForm.markAllAsTouched();
      this.alertService.showAlert('Formulario invalido, porfavor llenalo correctamente.', 'error');
      return;
    }
    const personalData = this.personalForm.getRawValue();
    const academicData = this.academicForm.getRawValue();
    const { confirmPassword, ...accountData } = this.accountForm!.getRawValue();
    const body: Register = {
      userAccount: { ...personalData, ...accountData },
      student: { ...academicData }
    };
    this.authService.register(body).subscribe({
      next: () => this.alertService.showAlert('Solicitud enviada.', 'success'),
      error: () => this.alertService.showAlert('Datos duplicados o incorrectos', 'error')
    });
  }

}
