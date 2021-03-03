import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { stringify } from "querystring";
import { Observable } from "rxjs";
import { User } from "../models/user.model";
import { Utils } from "../utils/utils";

@Injectable({
    providedIn: 'root'
})
export class TransactionService {
    constructor(
        private http: HttpClient) {}

    private readonly API_URL: string = "https://run.mocky.io/v3/";

    private readonly LOCAL_STORAGE_FIELD: string = "statement";

    public payUser(recipientUserId: number, value: number): Observable<TransactionPayload> {
        const apiUrl = `${this.API_URL}533cd5d7-63d3-4488-bf8d-4bb8c751c989`;

        console.log(`[Payment] Recipient ID: ${recipientUserId}. Value: R$ ${value.toFixed(2)}`);

        return this.http.post<TransactionPayload>(apiUrl, null);
    }

    public getStatement(userId: number): TransactionPayload[] {
        const stringifiedStatement = localStorage.getItem(this.LOCAL_STORAGE_FIELD);

        if (!stringifiedStatement)
            return [];

        const statements: any[] = JSON.parse(stringifiedStatement);

        return statements.filter(st => st['sender_user_id'] === userId);
    }

    public updateStatement(transaction: TransactionPayload, userId: number): void {
        if (userId) {
            transaction['sender_user_id'] = userId;
            
            transaction['payment_method'] = Utils.getLastFourDigits(transaction['card_number']);

            delete transaction.cvv;
            delete transaction.expiry_date;
            delete transaction.card_number;

            const statement: TransactionPayload[] = [ transaction ];

            const stringifiedStatement = localStorage.getItem(this.LOCAL_STORAGE_FIELD);

            if (stringifiedStatement) {
                statement.concat(JSON.parse(stringifiedStatement));
            }

            localStorage.setItem(this.LOCAL_STORAGE_FIELD, JSON.stringify(statement));
        }
    }
}