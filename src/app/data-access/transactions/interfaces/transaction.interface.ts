import { FormGroup } from "@angular/forms";
import { User } from "../../users/interfaces/users.interface";
import { Card } from "./card.interface";

export interface Transaction {
  selectedUser: User;
  transactionForm: FormGroup;
  cards: Card[];
}
