import { browser, by, element } from 'protractor';
import { protractor } from 'protractor/built/ptor';

export class PaymentPage {

  async navigateTo(): Promise<any> {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  async wait() {
    var EC = protractor.ExpectedConditions;
    const elm = element.all(by.className("btn-success")).first();
    await browser.wait(EC.elementToBeClickable(elm), 15000);
    elm.click();
  }

  async setInputValue(value: number): Promise<void> {
    const inputValue = element.all(by.id("value-payment"));
    await inputValue.sendKeys(value);
  }

  async setCardPayment(): Promise<void> {
    const card = element.all(by.className("card")).first().all(by.tagName("input"));
    await card.get(0).click();
  }

  async clickButtonSubmit(): Promise<void> {
    const button = element.all(by.className("btn-success")).first();
    await button.click();
  }

  async getStatuspayment(): Promise<string> {
    const resultText = element.all(by.className("info")).all(by.tagName('h3'));
    return await resultText.getText();
  }

  async closeModalPayment(): Promise<void> {
    const buttonClose = element.all(by.className("close-modal")).all(by.tagName('button'));
    await buttonClose.click();
  }

}
