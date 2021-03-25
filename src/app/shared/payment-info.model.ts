import { CreditCard } from './credit-card.model';

export class PaymentInfo {

    destinationUserId: number;
    value: number;
    creditCard: CreditCard;

    constructor(destinationUserId: number) {
        this.destinationUserId = destinationUserId;
    }

    public static asRequestBody(info: PaymentInfo): any {
        const requestBody = {
            destination_user_id: info.destinationUserId,
            value: info.value
        };

        Object.assign(requestBody, {...CreditCard.asRequestBody(info.creditCard)});

        return requestBody;
    }
}
