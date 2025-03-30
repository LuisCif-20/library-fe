import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '@envs/environment';
import { Observable } from 'rxjs';
import { DegreeResponse } from '../interfaces/degree.interface';

@Injectable({
  providedIn: 'root'
})
export class DegreeService {

  private readonly DEGREE_URL = `${environment.API_URL}/degrees`;

  private httpClient = inject(HttpClient);

  constructor() { }

  public getDegrees(): Observable<DegreeResponse> {
    return this.httpClient.get<DegreeResponse>(this.DEGREE_URL);
  }

}
