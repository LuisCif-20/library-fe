import { inject } from "@angular/core";

import { patchState, signalStore, withMethods, withProps, withState } from "@ngrx/signals";

import { catchError, Observable, of, switchMap, throwError } from "rxjs";
import { HttpErrorResponse } from "@angular/common/http";
import { DegreeState } from "../interfaces/degree.store.interface";
import { DegreeService } from "src/app/shared/services/degree.service";

const initialState: DegreeState = {
  degrees: [],
  hasNext: false,
  hasPrevious: false,
  page: 0,
  size: 5
}

export const DegreesStore = signalStore(
  {
    providedIn: 'root'
  },
  withState<DegreeState>(initialState),
  withProps(() => ({
    degreeService: inject(DegreeService)
  })),
  withMethods(({ degreeService, ...store }) => ({
    getDegrees(): Observable<void> {
      return degreeService.getDegrees(store.page(), store.size()).pipe(
        switchMap(({ hasNext, hasPrevious, data }) => {
          if (!data.length && hasPrevious) {
            patchState(store, { page: store.page() - 1 });
            return this.getDegrees();
          }
          patchState(store, { hasNext, hasPrevious, degrees: data });
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
