/**
 * Model for the payment
 * @param card_number           - unformatted credit card number
 * @param cvv                   - card cvv number
 * @param expiry_date           - expiration date, formatted, ex. 12/21
 * @param destination_user_id   - id of the user that will receive the trasaction
 * @param value                 - value of the transaction
 */
export interface Payment {
  card_number: string;
  cvv: number;
  expiry_date: string;
  destination_user_id: number;
  value: number; // Format is debatable, backend should define behavior and type
}

export interface PaymentResult {
  status: string;
  success: boolean;
}
