import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, Observer, Subscriber } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class HttpService {
  constructor(private httpClient: HttpClient) {}

  public get<T>(url: string): Observable<T> {
    return new Observable((observer) => {
      this.httpClient.get(url).subscribe(
        (res: T) => {
          this.handleRequestSuccess(observer, res);
        },
        (err) => this.handleRequestError(observer, err)
      );
    });
  }

  public post<T>(url: string, data: T): Observable<T> {
    return new Observable((observer) => {
      this.httpClient.post(url, data).subscribe(
        (res: T) => {
          this.handleRequestSuccess(observer, res);
        },
        (err) => this.handleRequestError(observer, err)
      );
    });
  }

  private handleRequestSuccess<T>(observer: Observer<T>, result: T) {
    observer.next(result);
    observer.complete();
  }

  private handleRequestError(observer: Subscriber<any>, e: HttpErrorResponse) {
    if (e.status === 403) {
      console.log("Handle 403 Error");
    }

    if (e.status == 401) {
      console.log("Handle 401 Error");
    }

    return observer.error(e);
  }
}
