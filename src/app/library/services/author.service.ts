import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '@envs/environment';
import { AuthorData, AuthorResponse } from '../interfaces/author.interface';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  private readonly AUTHOR_URL = `${environment.API_URL}/authors`;

  private httpClient = inject(HttpClient);

  constructor() { }

  public getAuthors(page?: number, size?: number): Observable<AuthorResponse> {
    let params = new HttpParams();
    if (page != undefined && page >= 0) {
      params = params.set('page', page);
    }
    if (size && size >= 1) {
      params = params.set('size', size);
    }
    return this.httpClient.get<AuthorResponse>(this.AUTHOR_URL, { params });
  }

  public createAuthor(body: AuthorData): Observable<void> {
    return this.httpClient.post<void>(this.AUTHOR_URL, body).pipe(
      catchError((error: HttpErrorResponse) => throwError(() => error))
    );
  }

  public updateAuthor(id: string, body: AuthorData): Observable<void> {
    const url = `${this.AUTHOR_URL}/${id}`;
    return this.httpClient.put<void>(url, body).pipe(
      catchError((error: HttpErrorResponse) => throwError(() => error))
    );
  }

  public deleteAuthor(id: string): Observable<void> {
    const url = `${this.AUTHOR_URL}/${id}`;
    return this.httpClient.delete<void>(url).pipe(
      catchError((error: HttpErrorResponse) => throwError(() => error))
    );
  }

}
