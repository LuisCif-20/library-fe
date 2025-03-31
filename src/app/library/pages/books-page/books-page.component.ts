import { Component, computed, inject, OnInit, signal } from '@angular/core';

import { BooksStore } from '../../stores/books.store';
import { SearchInputComponent } from '../../components/search-input/search-input.component';
import { PaginationComponent } from 'src/app/shared/components/pagination/pagination.component';

@Component({
  selector: 'app-books-page',
  imports: [
    SearchInputComponent,
    PaginationComponent
  ],
  templateUrl: './books-page.component.html',
  styles: ``
})
export default class BooksPageComponent implements OnInit {

  public readonly booksStore = inject(BooksStore);

  private getBooks = this.booksStore.getBooks();

  private _page = signal<number>(0);
  private _size = signal<number>(10);

  public page = computed(() => this._page());
  public size = computed(() => this._size());
  public books = computed(() => this.booksStore.books());

  constructor() { }

  ngOnInit(): void {
    this.booksStore.patchPage(this._page());
    this.booksStore.patchSize(this._size());
    this.getBooks();
  }

  public changePage(delta: 1 | -1): void {
    this._page.update(value => value + delta);
    this.booksStore.patchPage(this._page());
    this.getBooks();
  }

}
