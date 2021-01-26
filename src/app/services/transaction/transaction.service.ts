import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import {
  TransactionPayload,
  TransactionStatus,
} from "src/app/interfaces/transaction.interface";

@Injectable({
  providedIn: "root",
})
export class TransactionService {
  constructor(private http: HttpClient) {}

  public payload(
    transaction: TransactionPayload
  ): Observable<TransactionStatus> {
    return this.http.post<TransactionStatus>(
      "https://run.mocky.io/v3/533cd5d7-63d3-4488-bf8d-4bb8c751c989",
      transaction
    );
  }
}
