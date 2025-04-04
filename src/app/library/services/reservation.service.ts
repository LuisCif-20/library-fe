import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '@envs/environment';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private readonly RESERV_URL = `${environment.API_URL}/reservations`

  private httpClient = inject(HttpClient);

  constructor() { }

  public createReservation(bookId: string): Observable<void> {
    return this.httpClient.post<void>(this.RESERV_URL, { bookId }).pipe(
      catchError((error: HttpErrorResponse) => throwError(() => error))
    );
  }

}
