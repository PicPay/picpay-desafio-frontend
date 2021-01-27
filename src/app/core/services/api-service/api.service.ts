import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Endpoints } from './endpoints';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private _endpoints: Endpoints
  constructor(private http: HttpClient,) {
    this._endpoints = new Endpoints(environment.picPayChallengeApi)
  }

  get endpoints(): Endpoints {
    return this._endpoints
  }

  get<T>(path: string, params: HttpParams = new HttpParams()): Promise<T> {
    return this.http.get<T>(`${this._endpoints.picPayChallengeApi}${path}`, { params })
      .toPromise();
  }

  post<T>(path: string, body: Object = {}): Promise<T> {
    return this.http.post<T>(
      `${this._endpoints.picPayChallengeApi}${path}`,
      JSON.stringify(body)
    ).toPromise();
  }


}

