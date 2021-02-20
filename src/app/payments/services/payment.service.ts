import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { take } from 'rxjs/operators';
import { Users } from "../users-list/users";
import { TransactionPayload } from "../interfaces/payment"

const URL = 'https://www.mocky.io/v2/5d531c4f2e0000620081ddce'

@Injectable({ providedIn: 'root' })
export class PaymentService{
    constructor(private http: HttpClient){}

    listUser(){
        return this.http.get<Users[]>(URL);
    }

    payment(payment){
        return this.http.post('https://run.mocky.io/v3/533cd5d7-63d3-4488-bf8d-4bb8c751c989', payment).pipe(take(1))
    }
}