import { ITransactionRepository } from './itransaction-repository';

describe('ITransactionRepository', () => {
  it('should create an instance', () => {
    expect(new ITransactionRepository()).toBeTruthy();
  });
});
