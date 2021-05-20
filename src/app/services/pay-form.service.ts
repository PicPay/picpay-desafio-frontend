import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { TransactionPayload } from '../PayForm/pay-form.component';

@Injectable({
    providedIn: 'root'
})
export class PayFormService {
    url: string;

    constructor(private httpClient: HttpClient) { 
        this.url = 'https://run.mocky.io/v3/533cd5d7-63d3-4488-bf8d-4bb8c751c989';
    }

    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }

    doPayment(transaction: TransactionPayload): Observable<TransactionPayload> {
        return this.httpClient.post<TransactionPayload>(this.url, JSON.stringify(transaction), this.httpOptions)
            .pipe(
                retry(2),
                catchError(this.handleError)
            )
    }

    handleError(error: HttpErrorResponse) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            errorMessage = error.error.message;
        } else {
            errorMessage = `Erro: ${error.status}, ` + `menssagem: ${error.message}`;
        }
        return throwError(errorMessage);
    };

}