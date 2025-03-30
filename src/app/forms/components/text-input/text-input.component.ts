import { Component, forwardRef, input, signal } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { NgxMaskDirective } from 'ngx-mask';

import { InputType } from '../../interfaces/text-input.types';
import { InputValidatorDirective } from '../../directives/input-validator.directive';

@Component({
  selector: 'text-input',
  imports: [
    NgxMaskDirective,
    InputValidatorDirective
  ],
  templateUrl: './text-input.component.html',
  styles: ``,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextInputComponent),
      multi: true
    }
  ]
})
export class TextInputComponent implements ControlValueAccessor {

  public legend = input.required<string>();
  public placeholder = input.required<string>();
  public mask = input<string>('');
  public label = input<string>('');
  public type = input<InputType>('text');

  public disabled = signal<boolean>(false);
  public value = signal<string | number>('');

  constructor() { }

  public onChange = (value: string | number) => {};

  public onTouched = () => {};

  public onInputChange(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.value.set(value);
    this.onChange(value);
    this.onTouched();
  }

  writeValue(value: string | number): void {
    this.value.set(value);
  }

  registerOnChange(fn: (value: string | number) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled.set(isDisabled);
  }

}
