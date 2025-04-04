import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '@envs/environment';
import { catchError, Observable, throwError } from 'rxjs';
import { PublisherData, PublisherResponse } from '../interfaces/publisher.interface';

@Injectable({
  providedIn: 'root'
})
export class PublisherService {

  private readonly PUBLISHER_URL = `${environment.API_URL}/publishers`;

  private httpClient = inject(HttpClient);

  constructor() { }

  public getPublishers(page?: number, size?: number): Observable<PublisherResponse> {
    let params = new HttpParams();
    if (page != undefined && page >= 0) {
      params = params.set('page', page);
    }
    if (size && size >= 1) {
      params = params.set('size', size);
    }
    return this.httpClient.get<PublisherResponse>(this.PUBLISHER_URL, { params });
  }

  public createPublisher(body: PublisherData): Observable<void> {
    return this.httpClient.post<void>(this.PUBLISHER_URL, body).pipe(
      catchError((error: HttpErrorResponse) => throwError(() => error))
    );
  }

  public updatePublisher(id: string, body: PublisherData): Observable<void> {
    const url = `${this.PUBLISHER_URL}/${id}`;
    return this.httpClient.put<void>(url, body).pipe(
      catchError((error: HttpErrorResponse) => throwError(() => error))
    );
  }

  public deletePublisher(id: string): Observable<void> {
    const url = `${this.PUBLISHER_URL}/${id}`;
    return this.httpClient.delete<void>(url).pipe(
      catchError((error: HttpErrorResponse) => throwError(() => error))
    );
  }

}
