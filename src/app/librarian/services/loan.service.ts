import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '@envs/environment';
import { catchError, Observable, throwError } from 'rxjs';
import { CreateLoan, LoanResponse } from '../interfaces/loan.interface';

@Injectable({
  providedIn: 'root'
})
export class LoanService {

  private readonly LOANS_URL = `${environment.API_URL}/loans`;

  private httpClient = inject(HttpClient);

  constructor() { }

  public getLoans(page?:number, size?: number): Observable<LoanResponse> {
    let params = new HttpParams();
    if (page != undefined && page >= 0) {
      params = params.set('page', page);
    }
    if (size && size >= 1) {
      params = params.set('size', size);
    }
    return this.httpClient.get<LoanResponse>(this.LOANS_URL, { params });
  }

  public createLoan(body: CreateLoan): Observable<void> {
    return this.httpClient.post<void>(this.LOANS_URL, body).pipe(
      catchError((error: HttpErrorResponse) => throwError(() => error))
    );
  }

  public deleteLoan(id: string): Observable<void> {
    const url = `${this.LOANS_URL}/${id}`;
    return this.httpClient.delete<void>(url).pipe(
      catchError((error: HttpErrorResponse) => throwError(() => error))
    );
  }


}
