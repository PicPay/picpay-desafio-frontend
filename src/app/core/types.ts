export interface TransactionPayload {
    // Card Info
    card_number: string;
    cvv: number;
    expiry_date: string;

    // Destination User ID
    destination_user_id: number;

    // Value of the Transaction
    value: number;
}

export interface TransactionReturn {
    success: boolean;
    status: string;
}

export interface User {
    id: number;
    name: string;
    img: string;
    username: string;
}

export interface Card {
    card_number: string;
    cvv: number;
    expiry_date: string;
}

export interface TransactionInfo {
    status: boolean;
    value: number;
}
