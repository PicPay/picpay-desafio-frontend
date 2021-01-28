import Card from "./card.model";

export default class Payment {
  // Card Info
  card_number: string;
  cvv: number;
  expiry_date: string;

  // Destination User ID
  destination_user_id: number;

  // Value of the Transaction
  value: number;

  constructor(card: Card, destination_user_id: number, value: number) {
    this.card_number = card.card_number;
    this.value = value
    this.cvv = card.cvv
    this.expiry_date = card.expiry_date
    this.destination_user_id = destination_user_id
  }
}