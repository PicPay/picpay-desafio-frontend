import { Card } from '../card.model';

export class TransactionPayload extends Card {
  destination_user_id: number;
  value: number;
}