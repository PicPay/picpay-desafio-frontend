import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private http: HttpClient
  ) { }

  get<T>(path: string): Observable<T> {
    return this.request<T>('get', path);
  }
  post<T>(path: string, options = {}): Observable<T> {
    return this.request<T>('post', path, options);
  }

  private request<T>(requestType: string, path: string, options = {}): Observable<T> {
    const headers = this.getHeaders();
    return this.http.request<T>(requestType, path, { ...options, headers });
  }

  private getHeaders() {
    return new HttpHeaders({
      Authorization: 'Bearer',
    });
  }
}
