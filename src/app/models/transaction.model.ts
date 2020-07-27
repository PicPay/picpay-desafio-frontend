export class Transaction {
    constructor(
        public card_number: string,
        public cvv: number,
        public expiry_date: string,
        public destination_user_id: number,
        public value: number,
    ) { }
}
