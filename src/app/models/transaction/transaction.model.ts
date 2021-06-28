import { Card } from '../card/card.model';

export class Transaction {
  card: Card;
  destinationUserId: number;
  value: number;
}
