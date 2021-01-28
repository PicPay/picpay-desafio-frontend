export default class Card{

    card_number: string
    cvv: number
    expiry_date: string

    constructor(card_number: string, cvv: number, expiry_date: string) {
        this.card_number = card_number
        this.cvv = cvv
        this.expiry_date = expiry_date
    }

}