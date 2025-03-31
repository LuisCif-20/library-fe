import { inject } from "@angular/core";

import { patchState, signalStore, withMethods, withProps, withState } from "@ngrx/signals";
import { rxMethod } from "@ngrx/signals/rxjs-interop";

import { BooksState } from "../interfaces/books.store.interface";
import { BookService } from "../services/book.service";
import { pipe, switchMap } from "rxjs";
import { tapResponse } from "@ngrx/operators";

const initialState: BooksState = {
  books: [],
  filters: { },
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
    getBooks: () => rxMethod<void>(pipe(
      switchMap(() => bookService.getBooks(store.filters()).pipe(
        tapResponse({
          next: ({ hasNext, hasPrevious, data }) => {
            patchState(store, { hasNext, hasPrevious, books: data })
          },
          error: () => patchState(store, initialState)
        })
      ))
    )),
    patchPage(page: number): void {
      patchState(store, { filters: { ...store.filters(), page } })
    },
    patchSize(size: number): void {
      patchState(store, { filters: { ...store.filters(), size } })
    },
    patchQ(q: string | undefined): void {
      patchState(store, { filters: { ...store.filters(), q } })
    }
  }))
)
