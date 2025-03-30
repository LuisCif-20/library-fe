import { Component, computed, input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { AcademicForm } from '../../interfaces/form.interface';
import { TextInputComponent } from '../text-input/text-input.component';
import { SelectInputComponent } from '../select-input/select-input.component';
import { SelectOption } from '../../interfaces/select-input.interface';

@Component({
  selector: 'academic-form',
  imports: [
    TextInputComponent,
    SelectInputComponent
  ],
  templateUrl: './academic-form.component.html',
  styles: ``
})
export class AcademicFormComponent {

  public form = input<FormGroup<AcademicForm> | null>(null);
  public degrees = input.required<SelectOption[]>();

  public isFormNull = computed(() => this.form() ? false : true);

}
