import { validCreditCardMock } from '../card';
import { userOneMock } from '../user';
import { IPaymentTransaction } from './payment-transaction';

export const paymentTransactionMock: IPaymentTransaction = {
  paymentCard: validCreditCardMock,
  destinationUser: userOneMock,
  value: 10,
};
