import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyFormat'
})
export class CurrencyFormatPipe implements PipeTransform {

  transform(
    value: number,
    currencyCode: string = 'BRL',
    symbolDisplay: boolean = false,
    digits?: string
  ): string {
    if (!value) {
      return '0,00';
    }

    if (value.toString().indexOf(',') > -1) {
      value = parseFloat(
        value
          .toString()
          .replace(/\./g, '')
          .replace(/,/g, '.')
      );
    }

    if (symbolDisplay) {
      return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: currencyCode }).format(
        value
      );
    } else {
      return new Intl.NumberFormat('pt-BR', {
        style: 'decimal',
        currency: currencyCode,
        minimumFractionDigits: 2
      }).format(value);
    }
  }

}
