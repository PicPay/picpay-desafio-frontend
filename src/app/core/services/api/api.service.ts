import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class ApiService {
  constructor(private httpClient: HttpClient) {}

  list<T>(url: string): Observable<T> {
    return this.httpClient.get<T>(`${url}`);
  }

  post<T>(url: string, body: T): Observable<T> {
    return this.httpClient.post<T>(`${url}`, body);
  }
}
