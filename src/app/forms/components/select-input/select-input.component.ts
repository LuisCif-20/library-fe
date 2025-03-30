import { Component, forwardRef, input, signal } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { SelectOption } from '../../interfaces/select-input.interface';

@Component({
  selector: 'select-input',
  imports: [],
  templateUrl: './select-input.component.html',
  styles: ``,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectInputComponent),
      multi: true
    }
  ]
})
export class SelectInputComponent implements ControlValueAccessor {

  public legend = input.required<string>();
  public options = input.required<SelectOption[]>();
  public label = input<string>();
  public placeholder = input<string>('Selecciona una opcion...');

  public value = signal<string>('');
  public disabled = signal<boolean>(false);

  constructor() { }

  public onChange = (value: string) => {};

  public onTouched = () => {};

  public onSelectChange(event: Event): void {
    const value = (event.target as HTMLSelectElement).value;
    console.log(value);

    this.value.set(value);
    this.onChange(value);
    this.onTouched();
  }

  writeValue(value: string): void {
    this.value.set(value);
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled.set(isDisabled);
  }

}
