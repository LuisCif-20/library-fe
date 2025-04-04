import { inject } from "@angular/core";

import { patchState, signalStore, withMethods, withProps, withState } from "@ngrx/signals";

import { catchError, Observable, of, switchMap, throwError } from "rxjs";
import { HttpErrorResponse } from "@angular/common/http";
import { LoanState } from "../interfaces/load.store.interface";
import { LoanService } from "../services/loan.service";

const initialState: LoanState= {
  loans: [],
  hasNext: false,
  hasPrevious: false,
  page: 0,
  size: 5
}

export const LoanssStore = signalStore(
  {
    providedIn: 'root'
  },
  withState<LoanState>(initialState),
  withProps(() => ({
    loanService: inject(LoanService)
  })),
  withMethods(({ loanService, ...store }) => ({
    getLoans(): Observable<void> {
      return loanService.getLoans(store.page(), store.size()).pipe(
        switchMap(({ hasNext, hasPrevious, data }) => {
          if (!data.length && hasPrevious) {
            patchState(store, { page: store.page() - 1 });
            return this.getLoans();
          }
          patchState(store, { hasNext, hasPrevious, loans: data });
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
