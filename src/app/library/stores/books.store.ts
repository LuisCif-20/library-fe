import { inject } from "@angular/core";

import { patchState, signalStore, withMethods, withProps, withState } from "@ngrx/signals";

import { BooksState, SomeFilters } from "../interfaces/books.store.interface";
import { BookService } from "../services/book.service";
import { catchError, Observable, of, switchMap, throwError } from "rxjs";
import { HttpErrorResponse } from "@angular/common/http";

const initialState: BooksState = {
  books: [],
  filters: {
    page: 0,
    size: 5
  },
  hasNext: false,
  hasPrevious: false
}

export const BooksStore = signalStore(
  {
    providedIn: 'root'
  },
  withState<BooksState>(initialState),
  withProps(() => ({
    bookService: inject(BookService)
  })),
  withMethods(({ bookService, ...store }) => ({
    getBooks(): Observable<void> {
      return bookService.getBooks(store.filters()).pipe(
        switchMap(({ hasNext, hasPrevious, data }) => {
          if (!data.length && hasPrevious) {
            const page = store.filters().page - 1;
            patchState(store, { filters: { ...store.filters(), page } });
            return this.getBooks();
          }
          patchState(store, { hasNext, hasPrevious, books: data });
          return of(undefined);
        }),
        catchError((error: HttpErrorResponse) => {
          patchState(store, initialState);
          return throwError(() => error)
        })
      );
    },
    patchInitialState(): void {
      patchState(store, initialState);
    },
    patchPage(page: number): void {
      patchState(store, { filters: { ...store.filters(), page } });
    },
    patchSize(size: number): void {
      patchState(store, { filters: { ...store.filters(), size } });
    },
    patchQ(q: string | undefined): void {
      patchState(store, { filters: { ...store.filters(), q } });
    },
    patchOtherFilters(other: SomeFilters): void {
      patchState(store, { filters: { ...store.filters(), ...other } })
    }
  }))
)
