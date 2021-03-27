import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creditCardTruncate',
})
export class CreditCardTruncatePipe implements PipeTransform {
  transform(value: string): string {
    const lastFourNumbers = value.substr(value.length - 4);
    return `**** **** **** ${lastFourNumbers}`;
  }
}
