/**
 * Model for the payment
 * @param card_number           - unformatted credit card number
 * @param cvv                   - card cvv number
 * @param expiry_date           - expiration date, formatted, ex. 12/21
 */
export interface CreditCard {
  card_number: string;
  cvv: number;
  expiry_date: string;
}
