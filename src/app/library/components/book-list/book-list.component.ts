import { Component, computed, inject } from '@angular/core';
import { BooksStore } from '../../stores/books.store';
import { BookCardComponent } from '../book-card/book-card.component';
import { AuthStore } from 'src/app/auth/stores/auth.store';
import { AddBookModalComponent } from "../add-book-modal/add-book-modal.component";

@Component({
  selector: 'book-list',
  imports: [
    BookCardComponent,
    AddBookModalComponent
],
  templateUrl: './book-list.component.html',
  styles: ``
})
export class BookListComponent {

  private readonly authStore = inject(AuthStore);
  private readonly booksStore = inject(BooksStore);

  public isLibrarian = computed(() => {
    const user = this.authStore.user();
    return user ? user.role.name === 'LIBRARIAN' : false;
  });
  public books = computed(() => this.booksStore.books());

}
