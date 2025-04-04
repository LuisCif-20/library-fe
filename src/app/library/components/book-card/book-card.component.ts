import { Component, computed, input } from '@angular/core';
import { BookItem } from '../../interfaces/book.interface';
import { environment } from '@envs/environment';
import { HoverStyleDirective } from 'src/app/shared/directives/hover-style.directive';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'book-card',
  imports: [
    RouterLink,
    HoverStyleDirective
  ],
  templateUrl: './book-card.component.html',
  styles: ``
})
export class BookCardComponent {

  private readonly AWS_URL = `${environment.AWS_URL}`;

  public book = input.required<BookItem>();

  public src = computed(() => `${this.AWS_URL}/${this.book().imageUrl}`);

  public link = computed(() => `../books/${this.book().id}`);

}
