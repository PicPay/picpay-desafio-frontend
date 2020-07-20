import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { AlertsService } from '../alerts/alerts.service';

@Injectable()
export class InterceptorService implements HttpInterceptor {
  constructor(private alert: AlertsService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      tap((response) => this.handleResponse(response)),
      catchError((error: HttpErrorResponse) => {
        return this.handleErrors(error);
      }),
    );
    // }
  }

  handleResponse(response: any) {}
  handleErrors(error: HttpErrorResponse) {
    this.alert.showErrorToast();
    return throwError(error);
  }
}
