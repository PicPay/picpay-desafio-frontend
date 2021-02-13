import { Card } from '@core/domains/card/card.domain';

export const MOCK_VALID_CARD: Card = {
  card_number: '1111111111111111',
  cvv: 789,
  expiry_date: '01/18',
};
export const MOCK_INVALID_CARD: Card = {
  card_number: '4111111111111234',
  cvv: 123,
  expiry_date: '01/20',
};
