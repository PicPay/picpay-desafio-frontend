export interface Checkout {
  card_number: string;
  cvv: number;
  expiry_date: string;
  destination_user_id: number;
  value: number;
}
