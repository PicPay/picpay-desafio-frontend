import { Card } from '@core/domains/card/card.domain';
import { TransactionForm } from '@shared/components/transaction-form-modal/transaction-form-modal.component';

export const MOCK_TRANSACTION_FORM_CARDS: Card[] = [
  {
    card_number: '1111111111111111',
    cvv: 789,
    expiry_date: '01/18',
  },
  {
    card_number: '4111111111111234',
    cvv: 123,
    expiry_date: '01/20',
  },
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
