import { TransactionPayload } from '../interfaces/transaction-payload.interface';

export type creditCard = Omit<TransactionPayload, 'destination_user_id' | 'value'>
