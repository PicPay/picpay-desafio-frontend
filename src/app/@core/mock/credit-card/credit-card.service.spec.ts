import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { CreditCard } from './../../../@shared/models/credit-card.model';
import { CreditCardService } from './credit-card.service';

const cards: CreditCard[] = [
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

describe("CreditCardService", () => {
	let service: CreditCardService;

	beforeEach(() => {
		const bed = TestBed.configureTestingModule({
			providers: [CreditCardService]
		});

		service = bed.get(CreditCardService)
	})

	it('should return a list of cards', () => {
		spyOn(service, 'getCreditCard').and.returnValue(of(cards));

		let result = service.getCreditCard();

		result.subscribe(value => {
			expect(value.length).toBe(2);

			expect(value).toEqual(cards);
		})
	});
})