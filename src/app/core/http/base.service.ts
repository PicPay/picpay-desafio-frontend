import { Injectable } from "@angular/core";
import { throwError } from "rxjs";
import { retry, catchError } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class BaseService {
  constructor(private httpClient: HttpClient) {}

  apiUrl = environment.apiUrl
  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  };

  get<T>(url: string) {
    return this.httpClient
      .get<T>(`${this.apiUrl}${url}`, this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));
  }

  post<T>(url: string, data: any | null) {
    return this.httpClient
      .post<T>(`${this.apiUrl}${url}`, data, this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));
  }

  handleError(error: any) {
    const clientSideError = error && error.error && error.error.message;
    const serverSideError = error.message;

    return throwError(clientSideError || serverSideError);
  }
}
