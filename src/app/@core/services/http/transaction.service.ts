import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from './../../../../environments/environment';
import {TransactionPayload} from '@shared/models/transaction-payload.model'

@Injectable()
export class TransactionService {
	constructor(private http: HttpClient) { }

	post(transaction: TransactionPayload): Observable<any> {
		return this.http.post(environment.apiUrlTransactionv1, transaction);
	}
	
}