import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CreditCard } from '@shared/models/credit-card.model';
import { CreditCardData } from '../../data/credit-card.data';

@Injectable({
	providedIn: 'root'
})
export class CreditCardService extends CreditCardData{

	private cards: CreditCard[] = [
		{
			card_number: '1111111111111111',
			cvv: 789,
			expiry_date: '01/18',
		},
		{
			card_number: '4111111111111234',
			cvv: 123,
			expiry_date: '01/20',
		},
	]

	getCreditCard(): Observable<CreditCard[]> {
		return of(this.cards);
	}
}