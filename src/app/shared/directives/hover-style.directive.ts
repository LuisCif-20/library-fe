import { Directive, ElementRef, HostListener, inject, Renderer2, signal } from '@angular/core';

@Directive({
  selector: '[hoverStyle]'
})
export class HoverStyleDirective {

  private readonly outlinedClass: string = 'material-icons-outlined';
  private readonly filledClass: string = 'material-icons';

  private element: ElementRef<HTMLElement> = inject(ElementRef);
  private renderer = inject(Renderer2);

  private span = signal<HTMLSpanElement | null>(null);

  constructor() { }

  ngOnInit(): void {
    this.span.set(this.element.nativeElement.querySelector('span'));
    if (this.span()) {
      this.renderer.addClass(this.span(), this.outlinedClass);
    }
  }

  private toggleOutline(isMouseOutside: boolean): void {
    if (!this.span()) return;
    const classToAdd = isMouseOutside ? this.outlinedClass : this.filledClass;
    const classToRemove = isMouseOutside ? this.filledClass : this.outlinedClass;
    this.renderer.removeClass(this.span(), classToRemove);
    this.renderer.addClass(this.span(), classToAdd);
  }

  @HostListener('mouseenter') onMouseEnter(): void {
    this.toggleOutline(false);
  }

  @HostListener('mouseleave') onMouseLeave(): void {
    this.toggleOutline(true);
  }

}
