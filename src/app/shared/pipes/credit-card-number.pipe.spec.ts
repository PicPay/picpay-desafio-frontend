import { CreditCardNumberPipe } from './credit-card-number.pipe';

describe('CreditCardNumberPipe', () => {
  it('create an instance', () => {
    const pipe = new CreditCardNumberPipe();
    expect(pipe).toBeTruthy();
  });
});
