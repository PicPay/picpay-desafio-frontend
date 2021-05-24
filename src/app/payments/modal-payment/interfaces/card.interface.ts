export interface Card {
    card_number: string,
    cvv: number,
    expiry_date: string,
    flag_card: FlagsCard
}

export enum FlagsCard {
    mastercard = "mastercard",
    visa = "visa"
}