export class Cartao {
    card_number: string;
    cvv: number;
    expiry_date: string;

    constructor(dataCard: string,
        dataCvv: number,
        dataDataValidade: string) {
        this.card_number = dataCard;
        this.cvv = dataCvv;
        this.expiry_date = dataDataValidade;
    }
}