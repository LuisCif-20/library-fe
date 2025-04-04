import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '@envs/environment';
import { catchError, Observable, throwError } from 'rxjs';
import { ReserveResponse } from 'src/app/student/interfaces/reserve.interface';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private readonly RESERV_URL = `${environment.API_URL}/reservations`

  private httpClient = inject(HttpClient);

  constructor() { }

  public getMyRerservations(page?: number, size?: number): Observable<ReserveResponse> {
    let params = new HttpParams();
    if (page != undefined && page >= 0) {
      params = params.set('page', page);
    }
    if (size && size >= 1) {
      params = params.set('size', size);
    }
    const url = `${environment.API_URL}/me`;
    return this.httpClient.get<ReserveResponse>(url, { params });
  }

  public createReservation(bookId: string): Observable<void> {
    return this.httpClient.post<void>(this.RESERV_URL, { bookId }).pipe(
      catchError((error: HttpErrorResponse) => throwError(() => error))
    );
  }

}
