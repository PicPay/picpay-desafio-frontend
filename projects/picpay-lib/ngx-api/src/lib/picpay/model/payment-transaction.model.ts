import { PaymentTransaction } from '@picpay-lib/ngx-domain';

export interface IPaymentTransactionApiModel {
  // Card Info
  card_number: string;
  cvv: number;
  expiry_date: string;

  // Destination User ID
  destination_user_id: number;

  // Value of the Transaction
  value: number;
}

export function ParsePaymentTransactionToPaymentTransactionApi(
  payment: PaymentTransaction
): IPaymentTransactionApiModel {
  return {
    card_number: payment.paymentCard.cardNumber,
    cvv: payment.paymentCard.cvv,
    expiry_date: payment.paymentCard.expiryDate,
    destination_user_id: payment.destinationUser.id,
    value: payment.value,
  };
}
