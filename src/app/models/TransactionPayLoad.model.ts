export class TransactionPayLoad {
  constructor(
    public value: number,
    public destination_user_id: number,
    public card_number: string,
    public cvv: number,
    public expiry_date: string,
  ) { }
}
