import Contact from "../../interfaces/contact.interface";
import { Card } from "./card.interface";

export  interface Transaction {
    card_number: string;
    cvv: number;
    expiry_date: string;
    destination_user_id: number;
    value: number;
}

export interface TransactionPayload {
    card: Card,
    contact: Omit<Contact, "id">,
    value: number,
    isSuccess: boolean;
}

export interface TransactionResult {
    success: boolean;
    status:	string;
}