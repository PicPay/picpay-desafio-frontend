// model da transação que será enviada no serviço de fazerPagamento
export class TransacaoPagamento {
    card_number: string;
    cvv: number;
    expiry_date: string;
    destination_user_id: number;
    value: number;

    constructor(dataCard: string,
        dataCvv: number,
        dataDataValidade: string,
        dataIdUsuario: number,
        dataValor: number) {
        this.card_number = dataCard;
        this.cvv = dataCvv;
        this.expiry_date = dataDataValidade;
        this.destination_user_id = dataIdUsuario;
        this.value = dataValor;
    }
}