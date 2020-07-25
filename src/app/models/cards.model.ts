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

export default visibleCards.filter(card => {
    return {
        card_number: card.card_number,
        expiry_date: card.expiry_date,
        cvv: card.cvv,
        card_last_numbers: `Cartão com final ${card.card_number.slice(12, 16)}`
    }
});