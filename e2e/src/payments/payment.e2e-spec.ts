import { UserListPage } from './payment.po';
import { browser, by, element, logging } from 'protractor';
require('./waitReady.js');

describe ('users list for payments' , () => {
    let userListPage: UserListPage

    beforeEach(() => {
        userListPage = new UserListPage();
    })
    it('Should open navigate', () => {
        expect(userListPage.navigateTo());
    })
    it('should display user list', () => {
        expect(userListPage.getUserInfo());
    });
    //Teste para abrir o modal de pagamento
    it('Should open payment modal', () => {
        userListPage.getPaymentModal();
        expect(element(by.className('payment')).waitReady()).toBeTruthy();
    })
    it('Should show error message to value 0', () => {
        userListPage.messageValueZero();
        expect(element(by.className('payment__feedback')).waitReady()).toBeTruthy();
    })
    //Teste para preencher o valor de pagamento selecionando o cartão válido
    it('Should get success payment', () => {
        userListPage.getPaymentValue(5000);
        userListPage.paymentSuccess();
        expect(element(by.className('success')).waitReady()).toBeTruthy();
        userListPage.close('success__btn');
    })
    //Teste para preencher o valor de pagamento selecionando o cartão inválido
    it('Should get failed payment', () => {
        userListPage.getPaymentModal();
        userListPage.getPaymentValue(900000);
        userListPage.paymentFailed(); 
        expect(element(by.className('error')).waitReady()).toBeTruthy();
        userListPage.close('error__btn');
    })
    afterEach(async () => {
        // Assert that there are no errors emitted from the browser
        const logs = await browser.manage().logs().get(logging.Type.BROWSER);
        expect(logs).not.toContain(jasmine.objectContaining({
          level: logging.Level.SEVERE,
        } as logging.Entry));
      });
})