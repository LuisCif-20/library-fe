import { NgClass } from '@angular/common';
import { Component, computed, CUSTOM_ELEMENTS_SCHEMA, ElementRef, input, viewChild } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

import "cally";

import { dateToString } from 'src/app/shared/utilities/dates';

@Component({
  selector: 'date-input',
  imports: [
    NgClass,
    ReactiveFormsModule
  ],
  templateUrl: './date-input.component.html',
  styleUrl: './date-input.component.css',
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class DateInputComponent {

  public control = input.required<FormControl<string>>();
  public legend = input.required<string>();
  public label = input<string>('');
  public max = input<string>('');
  public min = input<string>('');

  public calendarPopover = viewChild.required<ElementRef<HTMLDivElement>>('calendarPopover')

  public openCalendar(): void {
    if (this.calendarPopover) {
      this.calendarPopover().nativeElement.showPopover();
    }
  }

  public onDateChange(event: Event) {
    const date = event.target as HTMLInputElement;
    if (!date) return;
    this.control().setValue(date.value);
    if (this.calendarPopover) {
      this.calendarPopover().nativeElement.hidePopover();
    }
  }

  get isInvalid(): boolean {
    return this.control().invalid && (this.control().touched || this.control().dirty);
  }

}
