import { ICreditCard } from './credit-card';

export const validCreditCardMock: ICreditCard = {
  cardNumber: '1111111111111111',
  cvv: 789,
  expiryDate: '01/18',
};

export const invalidCreditCardMock: ICreditCard = {
  cardNumber: '4111111111111234',
  cvv: 123,
  expiryDate: '01/20',
};
