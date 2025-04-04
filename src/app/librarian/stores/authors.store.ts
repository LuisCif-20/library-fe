import { inject } from "@angular/core";

import { patchState, signalStore, withMethods, withProps, withState } from "@ngrx/signals";

import { catchError, Observable, of, switchMap, throwError } from "rxjs";
import { HttpErrorResponse } from "@angular/common/http";
import { AuthorState } from "../interfaces/author.store.interface";
import { AuthorService } from "src/app/library/services/author.service";

const initialState: AuthorState = {
  authors: [],
  hasNext: false,
  hasPrevious: false,
  page: 0,
  size: 5
}

export const AuthorsStore = signalStore(
  {
    providedIn: 'root'
  },
  withState<AuthorState>(initialState),
  withProps(() => ({
    authorService: inject(AuthorService)
  })),
  withMethods(({ authorService, ...store }) => ({
    getAuthors(): Observable<void> {
      return authorService.getAuthors(store.page(), store.size()).pipe(
        switchMap(({ hasNext, hasPrevious, data }) => {
          if (!data.length && hasPrevious) {
            patchState(store, { page: store.page() - 1 });
            return this.getAuthors();
          }
          patchState(store, { hasNext, hasPrevious, authors: data });
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
      patchState(store, { page });
    },
    patchSize(size: number): void {
      patchState(store, { size });
    },
  }))
)
