import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, forwardRef, input, signal, viewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import "cally";

@Component({
  selector: 'date-input',
  imports: [],
  templateUrl: './date-input.component.html',
  styleUrl: './date-input.component.css',
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DateInputComponent),
      multi: true
    }
  ]
})
export class DateInputComponent implements ControlValueAccessor {

  public legend = input.required<string>();
  public label = input<string>();

  public calendarPopover = viewChild.required<ElementRef<HTMLDivElement>>('calendarPopover');

  public value = signal<string>('');
  public disabled = signal<boolean>(false);

  constructor() { }

  public onChange = (value: string) => {};

  public onTouched = () => {};

  public openCalendar(): void {
    if (this.calendarPopover()) {
      this.calendarPopover().nativeElement.showPopover();
      this.onTouched()
    }
  }

  public onDateChange(event: Event) {
    const date = event.target as HTMLInputElement;
    if (!date) return;
    this.value.set(date.value);
    this.onChange(date.value);
    this.onTouched();
    if (this.calendarPopover()) {
      this.calendarPopover().nativeElement.hidePopover();
    }
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
