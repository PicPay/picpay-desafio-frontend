import { browser, element, by } from 'protractor';
import { Given, Then, When, Before, setDefaultTimeout } from 'cucumber';
import { expect } from './../config/chai-imports';
import { PaymentPage } from './pages/payment.po';

const paymentPage: PaymentPage = new PaymentPage();

setDefaultTimeout(browser.defaultTimeout);

Given('que eu esteja visualizando o formulário de {string}', { timeout: browser.pageLoadingTimeout }, async (text) => {
    await expect(await paymentPage.title.getText()).to.deep.include(text);
});

When('devo clicar no botão {string}', { timeout: browser.pageLoadingTimeout }, async (text) => {
    await expect(await paymentPage.btnPay.getText()).to.contain(text);

    await browser.actions().mouseMove(paymentPage.btnPay).perform().then(() => {
        paymentPage.btnPay.click();
    });
});

When('devo digitar um valor com {string}', { timeout: browser.pageLoadingTimeout }, async (text) => {
    await paymentPage.fieldValue.element(by.css('input')).sendKeys(text);
});

When('devo clicar em {string}', { timeout: browser.pageLoadingTimeout }, async (text) => {
    await browser.actions().mouseMove(paymentPage.fieldCard.element(by.css('mat-select'))).perform().then(() => {
        paymentPage.fieldCard.element(by.css('mat-select')).click();

        browser.sleep(1000);
    });
});

When('devo selecionar {string}', { timeout: browser.pageLoadingTimeout }, async (text) => {
    await browser.actions()
    .mouseMove(paymentPage.selectPanel.element(by.cssContainingText('.mat-option-text', text))).perform().then(() => {
        paymentPage.selectPanel.element(by.cssContainingText('.mat-option-text', text)).click();

        browser.sleep(1000);
    });
});

When('devo visualizar o retorno de {string}', { timeout: browser.pageLoadingTimeout }, async (text) => {
    expect(await paymentPage.dialogAlertTitle.getText()).to.contain(text);
});

When('devo visualizar a mensagem de retorno {string}', { timeout: browser.pageLoadingTimeout }, async (text) => {
    expect(await paymentPage.dialogAlertDescription.getText()).to.contain(text);
});

Then('devo visualizar os retorno de validação {string}', { timeout: browser.pageLoadingTimeout }, async (text) => {
    await expect(await paymentPage.fieldValue.element(by.css('.app-validator-field-message')).getText()).to.contain(text);
    await expect(await paymentPage.fieldCard.element(by.css('.app-validator-field-message')).getText()).to.contain(text);
});

Then('devo fechar o modal com o botão {string}', { timeout: browser.pageLoadingTimeout }, async (text) => {
    expect(await paymentPage.dialogAlertButton.getText()).to.contain(text);

    await paymentPage.dialogAlertButton.click();
});


