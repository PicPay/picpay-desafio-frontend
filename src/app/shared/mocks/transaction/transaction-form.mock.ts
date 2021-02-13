import { MOCK_INVALID_CARD } from './../card/card.mock';
import { Card } from '@core/domains/card/card.domain';
import { TransactionForm } from '@shared/components/transaction-form-modal/transaction-form-modal.component';
import { MOCK_VALID_CARD } from '../card/card.mock';

export const MOCK_TRANSACTION_FORM_CARDS: Card[] = [
  MOCK_VALID_CARD,
  MOCK_INVALID_CARD,
];

export const MOCK_TRANSACTION_FORM_DATA: TransactionForm = {
  cards: MOCK_TRANSACTION_FORM_CARDS,
  card_number: '1111111111111111',
  value: '0.1',
  user: {
    id: 1,
    img: 'https://fakeimg.pl/300/',
    name: 'mock',
    username: 'mock@mock',
  },
};
