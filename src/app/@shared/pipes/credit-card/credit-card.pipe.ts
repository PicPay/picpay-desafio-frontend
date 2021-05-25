import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'creditCard'})
export class CreditCardPipe implements PipeTransform {
	transform(value: string): any {
		return value.slice(-4);
	}
}