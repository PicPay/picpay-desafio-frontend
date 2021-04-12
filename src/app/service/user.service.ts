import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { take, catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class UserService {
  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  };

  getUsers() {
    return this.http.get<User[]>(
      "https://www.mocky.io/v2/5d531c4f2e0000620081ddce"
    );
  }

  sendTransaction(transaction: TransactionPayload) {
    return this.http
      .post<TransactionPayload>(
        "https://run.mocky.io/v3/533cd5d7-63d3-4488-bf8d-4bb8c751c989",
        JSON.stringify(transaction)
      )
      .pipe(take(1));
  }
}
