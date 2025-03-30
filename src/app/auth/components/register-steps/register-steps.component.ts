import { Component, input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AcademicForm, AccountForm, PersonalForm } from '../../../forms/interfaces/form.interface';
import { NgClass } from '@angular/common';

@Component({
  selector: 'register-steps',
  imports: [
    NgClass
  ],
  templateUrl: './register-steps.component.html',
  styles: ``
})
export class RegisterStepsComponent {

  public step = input.required<number>();
  public personalForm = input.required<FormGroup<PersonalForm>>();
  public academicForm = input.required<FormGroup<AcademicForm>>();
  public accountForm = input.required<FormGroup<AccountForm>>();

  public isValid(step: number, formGroup: FormGroup): boolean {
    return this.step() === step || formGroup.valid;
  }

  public getIconType(formGroup: FormGroup): string {
    return formGroup.valid ? 'material-icons' : 'material-icons-outlined';
  }

}
