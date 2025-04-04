import { Component, input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

import { NgxMaskDirective } from 'ngx-mask';

import { InputType } from '../../interfaces/text-input.types';
import { NgClass } from '@angular/common';

@Component({
  selector: 'text-input',
  imports: [
    NgClass,
    ReactiveFormsModule,
    NgxMaskDirective,
  ],
  templateUrl: './text-input.component.html',
  styles: ``,
})
export class TextInputComponent {

  public control = input.required<FormControl<string | number>>();
  public legend = input.required<string>();
  public type = input<InputType>('text');
  public placeholder = input<string>();
  public label = input<string>();
  public mask = input<string>();
  public dropCharacter = input<boolean>(true);
  public min = input<number>(0);
  public max = input<number>(0);
  public step = input<number>(1);

  constructor() { }

  get isInvalid(): boolean {
    return this.control().invalid && (this.control().touched || this.control().dirty);
  }

}
