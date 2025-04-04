import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '@envs/environment';
import { CreatePayment } from '../interfaces/loan.interface';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  private readonly PAYMENTS_URL = `${environment.API_URL}/payments`;

  private httpClient = inject(HttpClient);

  constructor() { }

  public createPayment(body: CreatePayment): Observable<void> {
    return this.httpClient.post<void>(this.PAYMENTS_URL, body).pipe(
      catchError((error: HttpErrorResponse) => throwError(() => error))
    );
  }

}
