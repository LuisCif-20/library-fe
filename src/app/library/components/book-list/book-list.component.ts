import { Component, computed, inject } from '@angular/core';
import { BooksStore } from '../../stores/books.store';
import { BookCardComponent } from '../book-card/book-card.component';

@Component({
  selector: 'book-list',
  imports: [
    BookCardComponent
  ],
  templateUrl: './book-list.component.html',
  styles: ``
})
export class BookListComponent {

  private readonly booksStore = inject(BooksStore);

  public books = computed(() => this.booksStore.books());

}
