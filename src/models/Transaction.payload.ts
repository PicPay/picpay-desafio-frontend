import { Card } from "./Card";
import { User } from "./User";

export class TransactionPayload {
  card_number: string;
  cvv: number;
  expiry_date: string;
  destination_user_id: number;
  value: number;

  formatarParaApi(card: Card, usuario: User, valor: number) {
    Object.assign(this, card);
    this.destination_user_id = usuario.id;
    this.value = valor;
    return this;
  }
}