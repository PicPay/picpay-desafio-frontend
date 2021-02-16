import { HeaderContext } from './header/header-context.interface';
import { TransactionFormModalContext } from './transaction-form-modal/transaction-form-modal-context.interface';
import { UserCardContext } from './user-card/user-card-context.interface';

export interface ComponentsContext {
  'user-card-context': UserCardContext;
  'transaction-form-modal-context': TransactionFormModalContext;
  'header-context': HeaderContext;
}
