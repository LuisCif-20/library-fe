import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '@envs/environment';
import { Observable } from 'rxjs';
import { PublisherResponse } from '../interfaces/publisher.interface';

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

}
