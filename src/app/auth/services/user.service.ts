import { inject, Injectable } from '@angular/core';
import { environment } from '@envs/environment';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly USER_URL = `${environment.API_URL}/users`;

  private httpClient = inject(HttpClient);

  constructor() { }

  public getUserInfo(): Observable<User> {
    const url = `${this.USER_URL}/me`;
    return this.httpClient.get<User>(url);
  }

}
