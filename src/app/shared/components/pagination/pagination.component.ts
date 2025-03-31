import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  imports: [],
  templateUrl: './pagination.component.html',
  styles: ``
})
export class PaginationComponent {

  public page = input.required<number>();
  public hasNext = input.required<boolean>();
  public hasPrevious = input.required<boolean>();
  public next = output<void>();
  public previous = output<void>();

}
