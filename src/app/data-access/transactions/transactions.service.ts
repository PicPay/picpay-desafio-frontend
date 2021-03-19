import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { TransactionApprovalPayload } from "./interfaces/transactions-approval-payload.interface";
import { TransactionPayload } from "./interfaces/transactions-payload.interface";

@Injectable({
  providedIn: "root",
})
export class TransactionsService {
  public transactionPayloadUrl: string = `https://run.mocky.io/v3/533cd5d7-63d3-4488-bf8d-4bb8c751c989`;
  public mockTransaction: TransactionPayload = {
    card_number: "4111111111111234",
    cvv: 123,
    expiry_date: "01/20",
    destination_user_id: 1001,
    value: 39,
  };

  constructor(private http: HttpClient) {}

  public postTransaction(): Observable<TransactionApprovalPayload> {
    return this.http.post<TransactionApprovalPayload>(
      this.transactionPayloadUrl,
      this.mockTransaction
    );
  }
}
