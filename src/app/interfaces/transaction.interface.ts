export class TransactionPayload {
  constructor(
    // Card Info
    public card_number: string,
    public cvv: number,
    public expiry_date: string,

    // Destination User ID
    public destination_user_id: number,

    // Value of the Transaction
    public value: number
  ) {}
}

export class TransactionStatus {
  constructor(
    public success: boolean,
    public status: string
  ) {}
}
