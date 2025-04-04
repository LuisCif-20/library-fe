import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '@envs/environment';
import { catchError, Observable, throwError } from 'rxjs';
import { Book, BookResponse, CreateBook, UpdateBook } from '../interfaces/book.interface';
import { Filters } from '../interfaces/books.store.interface';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private readonly BOOK_URL = `${environment.API_URL}/books`

  private httpClient = inject(HttpClient);

  constructor() { }

  public getBooks(filters: Filters): Observable<BookResponse> {
    let params = new HttpParams();
    Object.entries(filters).forEach(([key, value]) => {
      if (value !== null && value !== undefined && value !== '') {
        Array.isArray(value)
        ? params = params.set(key, value.join(','))
        : params = params.set(key, value.toString());
      }
    })
    return this.httpClient.get<BookResponse>(this.BOOK_URL, { params });
  }

  public getBookById(id: string): Observable<Book> {
    const url = `${this.BOOK_URL}/id`;
    return this.httpClient.get<Book>(url);
  }

  public createBook(body: CreateBook): Observable<void> {
    const formData = new FormData();
    Object.keys(body).forEach((key) => {
      const value = body[key as keyof CreateBook];
      value instanceof Blob && value
        ? formData.append(key, value)
        : formData.append(key, value!.toString());
    });
    return this.httpClient.post<void>(this.BOOK_URL, formData).pipe(
      catchError((error: HttpErrorResponse) => throwError(() => error))
    );
  }

  public updateBook(id: string, body: UpdateBook): Observable<void> {
    const formData = new FormData();
    Object.keys(body).forEach((key) => {
      const value = body[key as keyof UpdateBook];
      value instanceof Blob && value
        ? formData.append(key, value)
        : formData.append(key, value!.toString());
    });
    const url = `${this.BOOK_URL}/${id}`;
    return this.httpClient.put<void>(url, formData).pipe(
      catchError((error: HttpErrorResponse) => throwError(() => error))
    );
  }


}
