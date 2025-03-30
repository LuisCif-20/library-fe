import { AfterViewInit, Directive, ElementRef, inject, Renderer2, signal } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[inputValidator]'
})
export class InputValidatorDirective implements AfterViewInit {

  private renderer = inject(Renderer2);
  private element: ElementRef<HTMLElement> = inject(ElementRef);
  private ngControl = inject(NgControl, { optional: true, self: true });

  private legend = signal<HTMLLegendElement | null>(null);
  private paragraph = signal<HTMLParagraphElement | null>(null);
  private input = signal<HTMLInputElement | HTMLSelectElement | null>(null);

  constructor() { }

  ngAfterViewInit(): void {
    if (!this.ngControl) return;
    const nativeElement = this.element.nativeElement;
    this.input.set(nativeElement.querySelector('input') ?? nativeElement.querySelector('select'));
    this.legend.set(nativeElement.querySelector('legend'));
    this.paragraph.set(nativeElement.querySelector('p'));
    this.ngControl.control!.statusChanges.subscribe({
      next: () => this.updateStyles()
    });
  }

  private addInvalidStyles(): void {
    this.renderer.addClass(this.input(), 'input-error');
    this.renderer.addClass(this.legend(), 'text-error');
    if (this.paragraph()) this.renderer.removeClass(this.paragraph(), 'hidden');
  }

  private removeInvalidStyles(): void {
    this.renderer.removeClass(this.input(), 'input-error');
    this.renderer.removeClass(this.legend(), 'text-error');
    if (this.paragraph()) this.renderer.addClass(this.paragraph(), 'hidden');
  }

  private updateStyles(): void {
    const control = this.ngControl!.control!;
    const isInvalid = control.invalid && (control.touched || control.dirty);
    isInvalid ? this.addInvalidStyles() : this.removeInvalidStyles();
  }

}
