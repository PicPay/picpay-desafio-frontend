import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Observable} from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpRequestInterceptor implements HttpInterceptor {
  constructor(
  ) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    request = request.clone({
      url: this.makeurl(request.url),
    });

    return next.handle(request);
  }

  private makeurl(url: string) {
    return `${environment.apiUrl}/${url}`;
  }

}
