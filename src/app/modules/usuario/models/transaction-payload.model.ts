export class TransactionPayload {
    card_number: string;
    cvv: number;
    expiry_date: string;
    destination_user_id: number;
    value: number;

    constructor() {
        this.card_number = '';
        this.cvv = 0; 
        this.expiry_date = '';
        this.destination_user_id = 0;
        this.value = 0; 
    }
}