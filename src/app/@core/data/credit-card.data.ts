import { Observable } from 'rxjs';
import { CreditCard } from '@shared/models/credit-card.model';

export abstract class CreditCardData {
	abstract getCreditCard(): Observable<CreditCard[]>
}