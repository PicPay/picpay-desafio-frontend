import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { CreditCard } from './credit-card.model';

@Injectable({
    providedIn: 'root'
})
export class CreditCardService {

    constructor() {
    }

    getAllCreditCards(): Observable<CreditCard[]> {
        const cards: CreditCard[] = [
            // valid card
            {
                cardNumber: '1111111111111111',
                cvv: 789,
                expiryDate: '01/18',
            },
            // invalid card
            {
                cardNumber: '4111111111111234',
                cvv: 123,
                expiryDate: '01/20',
            },
        ];

        return new Observable<CreditCard[]>((observer: Observer<CreditCard[]>) => {
            observer.next(cards);
            observer.complete();
        });
    }
}
