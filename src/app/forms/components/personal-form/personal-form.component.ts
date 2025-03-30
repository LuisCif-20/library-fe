import { Component, computed, input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';


import { PersonalForm } from '../../interfaces/form.interface';
import { TextInputComponent } from '../text-input/text-input.component';
import { DateInputComponent } from '../date-input/date-input.component';

@Component({
  selector: 'personal-form',
  imports: [
    ReactiveFormsModule,
    TextInputComponent,
    DateInputComponent
  ],
  templateUrl: './personal-form.component.html',
  styles: ``
})
export class PersonalFormComponent {

  public form = input<FormGroup<PersonalForm> | null>(null);

  public isFormNull = computed(() => this.form() ? false : true);

}
