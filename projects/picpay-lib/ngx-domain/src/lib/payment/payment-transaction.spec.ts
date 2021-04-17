import { CreditCard } from '../card';
import { User } from '../user';
import { PaymentTransaction } from './payment-transaction';
import { paymentTransactionMock } from './payment-transaction.mock';

describe('Class: Payment Transaction', () => {
  it('should create a payment transaction', () => {
    const instanceClass = new PaymentTransaction(paymentTransactionMock);

    expect(instanceClass).toBeInstanceOf(PaymentTransaction);

    expect(instanceClass.paymentCard).toBeInstanceOf(CreditCard);
    expect(instanceClass.paymentCard.cardNumber).toEqual(paymentTransactionMock.paymentCard.cardNumber);

    expect(instanceClass.destinationUser).toBeInstanceOf(User);
    expect(instanceClass.destinationUser.id).toEqual(paymentTransactionMock.destinationUser.id);
    expect(instanceClass.value).toEqual(paymentTransactionMock.value);
  });
});
