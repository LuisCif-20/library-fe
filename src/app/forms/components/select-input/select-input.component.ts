import { Component, input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';

import { SelectOption } from '../../interfaces/select-input.interface';

@Component({
  selector: 'select-input',
  imports: [
    NgClass,
    ReactiveFormsModule
  ],
  templateUrl: './select-input.component.html',
  styles: ``,
})
export class SelectInputComponent {

  public control = input.required<FormControl<string | number>>();
  public options = input.required<SelectOption[]>();
  public legend = input.required<string>();
  public placeholder = input<string>('Selecciona una opcion...');
  public label = input<string>('');

  constructor() { }

  get isInvalid(): boolean {
    return this.control().invalid && (this.control().touched || this.control().dirty);
  }

}
