export interface PaymentStorage {
  id: number;
  last_card_number: string;
  destination_user_id: number;
  value: number;
  date: Date;
  comment?: string;
}
