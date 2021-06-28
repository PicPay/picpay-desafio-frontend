import { Card } from "../card/card.model";

export class Transaction {
	card: Card;
	destination_user_id: number;
	value: number;
}