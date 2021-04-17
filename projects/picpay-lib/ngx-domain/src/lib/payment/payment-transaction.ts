import { CreditCard, ICreditCard } from '../card/credit-card';
import { IUser, User } from '../user/user';

export interface IPaymentTransaction {
  paymentCard: ICreditCard;
  destinationUser: IUser;
  value: number;
}

export class PaymentTransaction implements IPaymentTransaction {
  paymentCard: CreditCard;
  destinationUser: User;
  value: number;

  constructor(rawData: IPaymentTransaction) {
    this.paymentCard = new CreditCard(rawData.paymentCard);
    this.destinationUser = new User(rawData.destinationUser);
    this.value = rawData.value;
  }
}
