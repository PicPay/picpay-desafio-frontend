interface TransactionPayload {
    card_number: string;
    cvv: number;
    expiry_date: string;
    destination_user_id: number;
    value: number;
}

interface TransactionInfo {
    modal: boolean;
    recipt: boolean;
    status: boolean;
    receiver: string;
    value: string;
}
