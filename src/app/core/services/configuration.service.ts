import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { environment } from '@envs/environment';
import { catchError, map, Observable, throwError } from 'rxjs';
import { Configuration, UpdateConfiguration } from '../interfaces/configuration.interface';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {

  private readonly configurationUrl = `${environment.API_URL}/configuration`;

  private http = inject(HttpClient);

  private _configuration = signal<Configuration | null>(null);

  public configuration = computed(() => this._configuration());

  constructor() { }

  private processRequest(req: Observable<Configuration>): Observable<boolean> {
    return req.pipe(
      map((configuration) => {
        this._configuration.set(configuration);
        return true;
      }),
      catchError((error: HttpErrorResponse) => throwError(() => error))
    );
  }

  public getConfiguration(): Observable<boolean> {
    return this.processRequest(this.http.get<Configuration>(this.configurationUrl));
  }

  public updateConfiguration(data: UpdateConfiguration): Observable<boolean> {
    const formData = new FormData();
    Object.keys(data).forEach((key) => {
      const value = data[key as keyof UpdateConfiguration];
      if (value) {
        value instanceof Blob
        ? formData.append(key, value)
        : formData.append(key, value!.toString());
      }
    });
    return this.processRequest(this.http.put<Configuration>(this.configurationUrl, formData));
  }

}
