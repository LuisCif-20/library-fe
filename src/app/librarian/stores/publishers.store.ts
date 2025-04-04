import { inject } from "@angular/core";

import { patchState, signalStore, withMethods, withProps, withState } from "@ngrx/signals";

import { catchError, Observable, of, switchMap, throwError } from "rxjs";
import { HttpErrorResponse } from "@angular/common/http";
import { PublisherState } from "../interfaces/publisher.store.interface";
import { PublisherService } from "src/app/library/services/publisher.service";

const initialState: PublisherState = {
  publishers: [],
  hasNext: false,
  hasPrevious: false,
  page: 0,
  size: 5
}

export const PublishersStore = signalStore(
  {
    providedIn: 'root'
  },
  withState<PublisherState>(initialState),
  withProps(() => ({
    publisherService: inject(PublisherService)
  })),
  withMethods(({ publisherService, ...store }) => ({
    getPublishers(): Observable<void> {
      return publisherService.getPublishers(store.page(), store.size()).pipe(
        switchMap(({ hasNext, hasPrevious, data }) => {
          if (!data.length && hasPrevious) {
            patchState(store, { page: store.page() - 1 });
            return this.getPublishers();
          }
          patchState(store, { hasNext, hasPrevious, publishers: data });
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
