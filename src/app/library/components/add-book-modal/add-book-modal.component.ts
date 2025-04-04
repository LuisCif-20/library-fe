import { Component, inject, signal } from '@angular/core';
import { HoverStyleDirective } from 'src/app/shared/directives/hover-style.directive';
import { BookModalComponent } from '../book-modal/book-modal.component';
import { BooksStore } from '../../stores/books.store';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { pipe, switchMap } from 'rxjs';

@Component({
  selector: 'add-book-modal',
  imports: [
    HoverStyleDirective,
    BookModalComponent
  ],
  templateUrl: './add-book-modal.component.html',
  styles: ``
})
export class AddBookModalComponent {

  private readonly booksStore = inject(BooksStore);

  public getBooks = rxMethod<void>(pipe(
    switchMap(() => this.booksStore.getBooks())
  ));

  public showModal = signal<boolean>(false);


}
