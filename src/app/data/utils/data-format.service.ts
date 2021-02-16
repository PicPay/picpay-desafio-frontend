import { Injectable } from '@angular/core';
import { creditCard } from 'src/app/core/types/credit-card.type';

@Injectable({
  providedIn: 'root',
})
export class DataFormatService {
  formatCardNumberMask(cardsList: creditCard[]){
    return cardsList.map((card: any) => {
      card.numberView = `**** ${card.card_number.substring(12, 16)}`;
      return card;
    });
  };

  formatNumberToCurrency(n: string) {
    let value = n.replace(/[\D]+/g, '');
    value = value.replace(/([0-9]{2})$/g, ',$1');

    if (!value) {
      return '';
    }

    if (n.length > 6) {
      value = value.replace(/([0-9]{3}),([0-9]{2}$)/g, '.$1,$2');
    }

    return `R$ ${value}`;
  };

  addCreditCardNumberSpaces(n: string) {
    return n.replace(/(\d{4})?(\d{4})?(\d{4})?(\d{4})/, '$1 $2 $3 $4');
  };
}
