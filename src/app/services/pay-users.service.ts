import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PayUser } from 'src/app/components/pay-users/pay-user/pay-user.model';
import { TransactionPayLoad } from 'src/app/models/TransactionPayLoad.model';
import {environment } from 'src/environments/environment';
@Injectable()
export class PayUserService {

    constructor(private http: HttpClient) { }

    getUsers(): Observable<PayUser[]> {
        return this.http
            .get<PayUser[]>(`${environment.apiUsers}`)
            .pipe(map(response => response));
    }

    postSendPayment(transactionPayLoad: TransactionPayLoad): Observable<TransactionPayLoad> {
        return this.http
            .post<TransactionPayLoad>(`${environment.apiTransaction}`, transactionPayLoad);
    }
}
