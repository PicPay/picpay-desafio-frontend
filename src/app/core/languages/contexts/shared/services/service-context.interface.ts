import { TransactionContext } from './transaction/transaction-context.interface';

export interface SharedServicesContext {
  'transaction-context': TransactionContext;
}
