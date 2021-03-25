export class CreditCard {
    cardNumber: string;
    cvv: number;
    expiryDate: string;

    public static asRequestBody(card: CreditCard): any {
        const requestBody = {};

        for (const key of Object.keys(card)) {
            const keyInSnakeCase = key.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
            requestBody[keyInSnakeCase] = card[key];
        }

        return requestBody;
    }
}
