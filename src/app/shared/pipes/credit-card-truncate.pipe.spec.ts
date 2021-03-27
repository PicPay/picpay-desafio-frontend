import { CreditCardTruncatePipe } from './credit-card-truncate.pipe';

describe('CreditCardTruncatePipe', () => {
  it('create an instance', () => {
    const pipe = new CreditCardTruncatePipe();
    expect(pipe).toBeTruthy();
  });
});
