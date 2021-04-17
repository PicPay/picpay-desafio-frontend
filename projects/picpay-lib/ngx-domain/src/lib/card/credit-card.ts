export interface ICreditCard {
  cardNumber: string;
  cvv: number;
  expiryDate: string;
}

export class CreditCard implements ICreditCard {
  cardNumber: string;
  cvv: number;
  expiryDate: string;

  constructor(rawData: ICreditCard) {
    this.cardNumber = rawData.cardNumber;
    this.cvv = rawData.cvv;
    this.expiryDate = rawData.expiryDate;
  }
}
