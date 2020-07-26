export interface Card {
    card_number: string,
    cvv: number,
    expiry_date: Date
}

const visibleCards = [
    // valid card
    {
        card_number: '1111111111111111',
        cvv: 789,
        expiry_date: '01/18',
    },
    // invalid card
    {
        card_number: '4111111111111234',
        cvv: 123,
        expiry_date: '01/20',
    },
];

const cards = visibleCards.map(card => {
    return {
        card_number: card.card_number,
        expiry_date: card.expiry_date,
        card_last_numbers: `Cartão com final ${card.card_number.slice(12, 16)}`,
        cvv: card.cvv
    }
});

export default cards;