import { HttpClient, HttpParams } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable, throwError } from 'rxjs'
import { catchError } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ApiHttpService {
  constructor(private http: HttpClient) {}

  private formatErrors(error: any) {
    return throwError(error.error)
  }

  get<T>(path: string, params?: HttpParams): Observable<T> {
    return this.http
      .get<T>(path, { params })
      .pipe(catchError(this.formatErrors))
  }
  post<T>(path: string, body: T, params?: HttpParams): Observable<T> {
    return this.http
      .post<T>(path, JSON.stringify(body), { params })
      .pipe(catchError(this.formatErrors))
  }
  put<T>(path: string, body: T, params?: HttpParams): Observable<T> {
    return this.http
      .put<T>(path, JSON.stringify(body), { params })
      .pipe(catchError(this.formatErrors))
  }
  delete<T>(path: string, params?: HttpParams): Observable<T> {
    return this.http
      .delete<T>(path, { params })
      .pipe(catchError(this.formatErrors))
  }
}
