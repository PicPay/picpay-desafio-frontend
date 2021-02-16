import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class ApiService {
  private headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
  });
  constructor(private httpClient: HttpClient) {}

  list<T>(url: string): Observable<T> {
    return this.httpClient.get<T>(`${url}`);
  }

  post<T>(url: string, body: T): Observable<T> {
    return this.httpClient.post<T>(`${url}`, body, { headers: this.headers });
  }
}
