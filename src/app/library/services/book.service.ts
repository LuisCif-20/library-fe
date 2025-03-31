import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '@envs/environment';
import { Observable } from 'rxjs';
import { BookResponse } from '../interfaces/book.interface';
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


}
