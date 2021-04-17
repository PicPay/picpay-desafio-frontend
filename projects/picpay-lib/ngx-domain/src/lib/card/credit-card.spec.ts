import { CreditCard } from './credit-card';
import { validCreditCardMock } from './credit-card.mock';

describe('Class: Credit Card', () => {
  it('should create a credit card', () => {
    const instanceClass = new CreditCard(validCreditCardMock);

    expect(instanceClass).toBeInstanceOf(CreditCard);
    expect(instanceClass.cardNumber).toEqual(validCreditCardMock.cardNumber);
    expect(instanceClass.cvv).toEqual(validCreditCardMock.cvv);
    expect(instanceClass.expiryDate).toEqual(validCreditCardMock.expiryDate);
  });
});
