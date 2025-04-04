import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';

import { environment } from '@envs/environment';
import { AuthResponse, Login, Register } from '../interfaces/auth.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly AUTH_URL = `${environment.API_URL}/auth`;

  private httpClient = inject(HttpClient);

  constructor() { }

  public login(body: Login): Observable<AuthResponse> {
    const url = `${this.AUTH_URL}/login`;
    return this.httpClient.post<AuthResponse>(url, body);
  }

  public logout(): Observable<void> {
    const url = `${this.AUTH_URL}/logout`;
    return this.httpClient.post<void>(url, null);
  }

  public register(body: Register): Observable<boolean> {
    const url = `${this.AUTH_URL}/register`;
    return this.httpClient.post<void>(url, body).pipe(
      map(() => true),
      catchError((error: HttpErrorResponse) => throwError(() => error))
    );
  }

  public refreshToken(): Observable<AuthResponse> {
    const url = `${this.AUTH_URL}/refresh`;
    return this.httpClient.post<AuthResponse>(url, null);
  }

}
