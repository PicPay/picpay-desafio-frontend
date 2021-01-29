import { ICard } from "./card.interface";

export interface ITransactionPayload  extends ICard{
    destination_user_id: number;
    value: number;
  }