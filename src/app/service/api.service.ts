import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable ,  throwError } from 'rxjs';

import { catchError, retry } from 'rxjs/operators';
import { environment } from '@env';

@Injectable()
export class ApiService {

  private retryAmount = 2;

  constructor(
    private http: HttpClient,
  ) {}

  private formatErrors(error: any) {
    return  throwError(error.error);
  }

  get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
    return this.http.get(`${environment.api_url}${path}`, { params })
      .pipe(
          retry(this.retryAmount),
          catchError(this.formatErrors)
        );
  }

  put(path: string, body: Object = {}): Observable<any> {
    return this.http.put(
      `${environment.api_url}${path}`,
      JSON.stringify(body)
    ).pipe(
        retry(this.retryAmount),
        catchError(this.formatErrors)
      );
  }

  post(path: string, body: Object = {}): Observable<any> {
    return this.http.post(
      `${environment.api_url}${path}`,
      JSON.stringify(body)
    ).pipe(
        retry(this.retryAmount),
        catchError(this.formatErrors)
      );
  }

  delete(path): Observable<any> {
    return this.http.delete(
      `${environment.api_url}${path}`
    ).pipe(
        retry(this.retryAmount),
        catchError(this.formatErrors)
      );
  }

}