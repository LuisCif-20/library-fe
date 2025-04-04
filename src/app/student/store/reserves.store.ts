import { inject } from "@angular/core";

import { patchState, signalStore, withMethods, withProps, withState } from "@ngrx/signals";

import { catchError, Observable, of, switchMap, throwError } from "rxjs";
import { HttpErrorResponse } from "@angular/common/http";
import { ReserveState } from "../interfaces/reserve.store.interface";
import { ReservationService } from "src/app/library/services/reservation.service";

const initialState: ReserveState = {
  reserves: [],
  hasNext: false,
  hasPrevious: false,
  page: 0,
  size: 5
}

export const ReservationStore = signalStore(
  {
    providedIn: 'root'
  },
  withState<ReserveState>(initialState),
  withProps(() => ({
    reservationService: inject(ReservationService)
  })),
  withMethods(({ reservationService, ...store }) => ({
    getReserves(): Observable<void> {
      return reservationService.getMyRerservations(store.page(), store.size()).pipe(
        switchMap(({ hasNext, hasPrevious, data }) => {
          if (!data.length && hasPrevious) {
            patchState(store, { page: store.page() - 1 });
            return this.getReserves();
          }
          patchState(store, { hasNext, hasPrevious, reserves: data });
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
