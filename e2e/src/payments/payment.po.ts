import { browser, element, by } from "protractor";
require('./waitReady.js');

export class UserListPage {
    navigateTo() {
        return browser.get(browser.baseUrl) as Promise<any>;
    }
    getUserInfo(){
        element.all(by.css('.users__id')).first().isDisplayed();
    }
    //Função para abrir o modal de pagamento
    getPaymentModal(){
        element.all(by.buttonText('Pagar')).first().click();
        browser.sleep(2000);
        element(by.className('payment')).isPresent();
    }
    //Função para preencher o valor de pagamento
    getPaymentValue(value:number){
        return element(by.css('input[formControlName="payment_value"]')).sendKeys(value);
    }
    //Função para testar mensagem de valor inválido
    messageValueZero(){
        element(by.css('input[formControlName="payment_value"]')).sendKeys(0);
        browser.sleep(2000);
        element(by.className('payment__feedback')).isDisplayed();
    }
    //Função para o pagamento feito com sucesso
    paymentSuccess(){
         element(by.tagName('select')).element(by.tagName('option')).click();
         element(by.xpath('//select/option[.="Cartão com final 1111"]')).click();
         browser.sleep(2000);
         element(by.className('payment__btn')).click();
    }
    //Função para o pagamento feito com erro
    paymentFailed(){
        element(by.tagName('select')).element(by.tagName('option')).click();
        element(by.xpath('//select/option[.="Cartão com final 1234"]')).click();
        browser.sleep(2000);
        element(by.className('payment__btn')).click();
   }
   //Função para fechar os modais de sucesso/falha
   close(closeItem: string){
    browser.sleep(2000);
    element(by.className(closeItem)).click();
   }
}