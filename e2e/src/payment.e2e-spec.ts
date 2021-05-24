import { element, by } from 'protractor';
import { protractor } from 'protractor/built/ptor';
import { PaymentPage } from './payment.po'

describe('Payment', () => {
    let paymentModal: PaymentPage;

    beforeEach(async () => {
        paymentModal = new PaymentPage;
        await paymentModal.navigateTo()
    })

    it('should make a payment to a contact with success', async () => {
        await element.all(by.className("button-payment-user-network")).first().click()
        await paymentModal.setInputValue(1000);
        await paymentModal.setCardPayment();
        await paymentModal.clickButtonSubmit();
        const resultPayment = await paymentModal.getStatuspayment();
        expect(resultPayment).toContain("Pagamento realizado! 💸")
    });
});
