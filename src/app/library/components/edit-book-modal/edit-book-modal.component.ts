import { Component, inject, input, output, signal } from '@angular/core';
import { HoverStyleDirective } from 'src/app/shared/directives/hover-style.directive';
import { BookModalComponent } from '../book-modal/book-modal.component';
import { BooksStore } from '../../stores/books.store';
import { pipe, switchMap } from 'rxjs';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { Book } from '../../interfaces/book.interface';

@Component({
  selector: 'edit-book-modal',
  imports: [
    HoverStyleDirective,
    BookModalComponent
  ],
  templateUrl: './edit-book-modal.component.html',
  styles: ``
})
export class EditBookModalComponent {

  public book =  input.required<Book>();
  public updateBook = output<void>();

  private readonly booksStore = inject(BooksStore);

  public getBooks = rxMethod<void>(pipe(
    switchMap(() => this.booksStore.getBooks())
  ));

  public showModal = signal<boolean>(false);

  public onUpdateBook(): void {
    this.getBooks();
    this.updateBook.emit();
  }

}
