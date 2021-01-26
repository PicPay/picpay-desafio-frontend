import { Observable, of } from "rxjs";
import {
  TransactionPayload,
  TransactionStatus,
} from "src/app/interfaces/transaction.interface";

export class TransactionServiceMock {
  public payload(
    transaction: TransactionPayload
  ): Observable<TransactionStatus> {
    return of({
      success: true,
      status: "Aprovada",
    });
  }
}
