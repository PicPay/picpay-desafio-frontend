import { Transaction } from '@core/domains/transaction/transaction.domain';
import { TransactionPayload } from '@core/domains/transaction/transaction-payload.domain';

export const MOCK_TRANSACTION_PAYLOAD: TransactionPayload = {
  card_number: '1111111111111111',
  cvv: 789,
  expiry_date: '01/18',
  destination_user_id: 1,
  value: 11111,
};

export const MOCK_TRANSACTION: Transaction = {
  success: true,
  status: '200',
};
