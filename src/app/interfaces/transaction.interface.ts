export class TransactionPayload {
  constructor(
    // Card Info
    card_number: string,
    cvv: number,
    expiry_date: string,

    // Destination User ID
    destination_user_id: number,

    // Value of the Transaction
    value: number
  ) {}
}

export class TransactionStatus {
  constructor(
    success: boolean,
    status: string
  ) {}
}
