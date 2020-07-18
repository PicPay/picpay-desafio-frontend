export interface Payment {
    cardNumber: string;
    ccv: number;
    value: number;
    expireDate: string;
    destinationUserId: number;
}
