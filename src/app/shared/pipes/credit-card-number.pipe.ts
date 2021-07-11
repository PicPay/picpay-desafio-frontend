import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creditCardNumber'
})
export class CreditCardNumberPipe implements PipeTransform {

  transform(value: string): any {
    if (value) {
      const separatedValues = value.match(/.{1,4}/g);
      let returnedValue = '';

      separatedValues.forEach((value) => {
        returnedValue += value + ' ';
      })
      
      return returnedValue.trim();
    }

    return value;
  }

}
