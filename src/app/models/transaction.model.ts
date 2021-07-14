import { Card } from './card.model';

export interface Transaction {
  value?: number;
  creditCard?: Card;
}
