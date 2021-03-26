import { CreditCard } from './credit-card.model';

export class TransactionPayload {

    destinationUserId: number;
    value: number;
    creditCard: CreditCard;

    constructor(destinationUserId: number) {
        this.destinationUserId = destinationUserId;
    }

    public static asRequestBody(payload: TransactionPayload): any {
        const requestBody = {
            destination_user_id: payload.destinationUserId,
            value: payload.value
        };

        Object.assign(requestBody, {...CreditCard.asRequestBody(payload.creditCard)});

        return requestBody;
    }
}
