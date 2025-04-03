import { Component, computed, inject, OnDestroy, OnInit } from '@angular/core';

import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { pipe, switchMap } from 'rxjs';

import { BooksStore } from '../../stores/books.store';
import { SearchInputComponent } from '../../components/search-input/search-input.component';
import { PaginationComponent } from 'src/app/shared/components/pagination/pagination.component';
import { ItemsPerPageComponent } from 'src/app/shared/components/items-per-page/items-per-page.component';
import { BookFiltersModalComponent } from '../../components/book-filters-modal/book-filters-modal.component';

@Component({
  selector: 'app-books-page',
  imports: [
    SearchInputComponent,
    BookFiltersModalComponent,
    PaginationComponent,
    ItemsPerPageComponent
  ],
  templateUrl: './books-page.component.html',
  styles: ``
})
export default class BooksPageComponent implements OnInit, OnDestroy {

  public readonly booksStore = inject(BooksStore);

  private getBooks = rxMethod<void>(pipe(
    switchMap(() => this.booksStore.getBooks())
  ));

  public books = computed(() => this.booksStore.books());
  public page = computed(() => this.booksStore.filters().page);
  public size = computed(() => this.booksStore.filters().size);

  constructor() { }

  ngOnInit(): void {
    this.getBooks();
  }

  ngOnDestroy(): void {
    this.booksStore.patchInitialState();
  }

  public changePage(delta: 1 | -1): void {
    this.booksStore.patchPage(this.page() + delta);
    this.getBooks();
  }

  public changeSize(size: number): void {
    this.booksStore.patchSize(size);
    this.getBooks();
  }

}
