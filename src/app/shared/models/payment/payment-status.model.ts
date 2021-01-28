export default class PaymentStatus {
    success: boolean
    status: string

    constructor(success: boolean, status: string) {
        this.success = success
        this.status = status
    }
}