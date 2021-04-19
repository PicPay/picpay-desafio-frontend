
import CardType from '../../types/card/card.type';

const listCard: CardType[] = [
    // valid card
  {
    id:1,
    card_number: '1111111111111111',
    cvv: 789,
    expiry_date: '01/18',
  },
  // invalid card
  {
    id:2,
    card_number: '4111111111111234',
    cvv: 123,
    expiry_date: '01/20',
  },
]

export default listCard;