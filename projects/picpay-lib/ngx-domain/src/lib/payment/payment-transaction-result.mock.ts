import { IPaymentTransactionResult } from './payment-transaction-result';

export const successPaymentTransactionResultMock: IPaymentTransactionResult = {
  status: 'Aprovada',
  success: true,
};

export const failPaymentTransactionResultMock: IPaymentTransactionResult = {
  status: 'Reprovada',
  success: false,
};
