import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cardSecrecy'
})
export class CardSecrecy implements PipeTransform {

  transform(cardNumber: string): string {
    return cardNumber.slice(-4)
  }

}
