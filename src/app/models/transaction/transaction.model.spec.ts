import { Transaction } from '@models/transaction/transaction.model';

describe('Transaction', () => {
  it('should create an instance', () => {
    expect(new Transaction()).toBeTruthy();
  });
});
