import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of, throwError } from "rxjs";
import { environment } from "src/environments/environment";
import { Card } from "./interfaces/card.interface";
import { TransactionApprovalPayload } from "./interfaces/transactions-approval-payload.interface";
import { TransactionPayload } from "./interfaces/transactions-payload.interface";

@Injectable({
  providedIn: "root",
})
export class TransactionsService {
  private mockCards: Card[] = [
    // valid card
    {
      card_number: "1111111111111111",
      cvv: 789,
      expiry_date: "01/18",
    },
    // invalid card
    {
      card_number: "4111111111111234",
      cvv: 123,
      expiry_date: "01/20",
    },
  ];

  constructor(private http: HttpClient) {}

  public postTransaction(
    transactionPayload: TransactionPayload
  ): Observable<TransactionApprovalPayload> {
    if (transactionPayload.card_number === this.mockCards[1].card_number) {
      const error = { status: 401, success: false };
      return throwError(error);
    }

    return this.http.post<TransactionApprovalPayload>(
      environment.transactionsURL,
      transactionPayload
    );
  }

  public getCards(): Observable<Card[]> {
    // backend response emulation
    return of(this.mockCards);
  }
}
