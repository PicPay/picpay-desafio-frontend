import { Card } from '@models/card/card.model';

export class Transaction {
  card: Card;
  destinationUserId: number;
  value: number;
}
