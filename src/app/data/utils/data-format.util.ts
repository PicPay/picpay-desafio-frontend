import { creditCard } from 'src/app/core/types/credit-card.type';

export const formatCardNumberMask = (cardNumber: creditCard[]) => {
  return cardNumber.map((card: any) => {
    card.numberView = `**** ${card.card_number.substring(12, 16)}`;
    return card;
  });
};

export const formatNumberToCurrency = (n: string) => {
  let value = n.replace(/[\D]+/g, '');
  value = value.replace(/([0-9]{2})$/g, ',$1');

  if (n.length > 6) {
    value = value.replace(/([0-9]{3}),([0-9]{2}$)/g, '.$1,$2');
  }

  return `R$ ${value}`;
};
