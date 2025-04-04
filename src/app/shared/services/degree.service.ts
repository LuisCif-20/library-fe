import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '@envs/environment';
import { catchError, Observable, throwError } from 'rxjs';
import { DegreeData, DegreeResponse } from '../interfaces/degree.interface';

@Injectable({
  providedIn: 'root'
})
export class DegreeService {

  private readonly DEGREE_URL = `${environment.API_URL}/degrees`;

  private httpClient = inject(HttpClient);

  constructor() { }

  public getDegrees(page?: number, size?: number): Observable<DegreeResponse> {
    let params = new HttpParams();
    if (page != undefined && page >= 0) {
      params = params.set('page', page);
    }
    if (size && size >= 1) {
      params = params.set('size', size);
    }
    return this.httpClient.get<DegreeResponse>(this.DEGREE_URL, { params });
  }

  public createDegree(body: DegreeData): Observable<void> {
    return this.httpClient.post<void>(this.DEGREE_URL, body).pipe(
      catchError((error: HttpErrorResponse) => throwError(() => error))
    );
  }

  public updateDegree(id: string, body: DegreeData): Observable<void> {
    const url = `${this.DEGREE_URL}/${id}`;
    return this.httpClient.put<void>(url, body).pipe(
      catchError((error: HttpErrorResponse) => throwError(() => error))
    );
  }

  public deleteDegree(id: string): Observable<void> {
    const url = `${this.DEGREE_URL}/${id}`;
    return this.httpClient.delete<void>(url).pipe(
      catchError((error: HttpErrorResponse) => throwError(() => error))
    );
  }

}
