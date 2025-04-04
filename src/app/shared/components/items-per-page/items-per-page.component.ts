import { Component, inject, input, OnDestroy, OnInit, output } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'items-per-page',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './items-per-page.component.html',
  styles: ``
})
export class ItemsPerPageComponent implements OnInit, OnDestroy {

  public size = input<number>(5);

  public setSize = output<number>();

  private formBuilder = inject(NonNullableFormBuilder);

  private subs?: Subscription;

  public sizeSelected = this.formBuilder.control(this.size());

  ngOnInit(): void {
    this.subs = this.sizeSelected.valueChanges.subscribe({
      next: (value) => this.setSize.emit(value)
    });
  }

  ngOnDestroy(): void {
    this.subs?.unsubscribe();
  }

}
