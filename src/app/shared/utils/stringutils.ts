export abstract class StringUtils {         
    public static getLastFourDigits(cardNumber: string): string {
        return cardNumber ? cardNumber.trim().substr(cardNumber.length - 4) : '';
    }
}