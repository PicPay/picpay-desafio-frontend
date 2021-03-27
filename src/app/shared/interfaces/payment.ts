export interface Payment {
  card_number: string;
  cvv: number;
  expiry_date: string;
  destination_user_id: number;
  value: number;
  id?: number;
  comment?: string;
}
