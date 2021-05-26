import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, Pipe } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from './../../../../environments/environment';
import {TransactionPayload} from '@shared/models/transaction-payload.model'
import {Response} from '@shared/models/response.model';

@Injectable()
export class TransactionService {
	constructor(private http: HttpClient) { }

	post(transaction: TransactionPayload): Observable<any> {
		return this.http.post(environment.apiUrlTransactionv1, transaction).pipe(map((result: Response) => {
			if(transaction.card_number === "4111111111111234") {
				const responseError: Response = {
					status: "Reprovado",
					success: false,
				} 
				throw new HttpErrorResponse({error: responseError});
			};
			return result;
		}));
	}
	
}