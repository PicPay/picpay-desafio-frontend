import { User } from "../../users/interfaces/users.interface";
import { Card } from "./card.interface";

export interface TransactionsDialogData {
  selectedUser: User;
  cards: Card[];
}
