// import { Restaurant } from './restaurant/restaurant.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PayUser } from 'src/app/components/pay-users/pay-user/pay-user.model';
import { TransactionPayLoad } from 'src/app/models/TransactionPayLoad.model';

// import { ErrorHandler } from '../app.error-handler';

@Injectable()
export class PayUserService {

    constructor(private http: HttpClient) { }

    getUsers(): Observable<PayUser[]> {
        return this.http.get<PayUser[]>(`https://private-ba7f3-rprteste.apiary-mock.com/users`)
            .pipe(map(response => response))
    }

    postSendPayment(transactionPayLoad: TransactionPayLoad): Observable<TransactionPayLoad> {
        return this.http
            .post<TransactionPayLoad>('https://run.mocky.io/v3/533cd5d7-63d3-4488-bf8d-4bb8c751c989', transactionPayLoad);
    }
}
