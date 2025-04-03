import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '@envs/environment';
import { AuthorResponse } from '../interfaces/author.interface';
import { Observable } from 'rxjs';

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
}
