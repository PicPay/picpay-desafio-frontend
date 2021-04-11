import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { environment } from "../../../environments/environment.prod";
import { TransactionResponse } from "src/app/models/transactionResponse.model";
import { TransactionPayload } from "src/app/models/transaction.model";
import { Card } from "../../models/card.model";

@Injectable({
  providedIn: "root",
})
export class PaymentService {
  constructor(private httpClient: HttpClient) {}

  SendPayment(payload: TransactionPayload): Observable<TransactionResponse> {
    return this.httpClient
      .post<TransactionResponse>(environment.apiTransaction, payload)
      .pipe(catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = "O pagamento não foi concluído com sucesso";
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage =
        `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
