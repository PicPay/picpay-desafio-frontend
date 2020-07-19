import { Checkout } from './checkout.model';
import { Injectable } from '@angular/core';
import { Observable, EMPTY } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  baseUrl = 'https://run.mocky.io/v3/533cd5d7-63d3-4488-bf8d-4bb8c751c989';

  constructor(
    private snackBar: MatSnackBar,
    private http: HttpClient,
  ) { }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass: isError ? ['msg-error'] : ['msg-success']
    });
  }

  create(checkout: Checkout): Observable<Checkout> {
    return this.http.post<Checkout>(this.baseUrl, checkout).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage(e.status, true);
    return EMPTY;
  }
}
