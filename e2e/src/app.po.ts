import { browser, by, element } from 'protractor';

export class AppPage {

  selectUserButton = element(by.css('.pay'));
  goToNewCardPageButton = element(by.css('.payment-form'));
  createCardButton = element(by.css('.btn-primary'));
  selectCardButton = element(by.css('.select'));
  sendPaymentButton = element(by.id('send-payment'));

  valueField = element(by.name('value'));

  cardNumberField = element(by.name('card_number'));
  cvvField = element(by.name('cvv'));
  expiryDateField = element(by.name('expiry_date'));

  navigateToStart = () => {
    return browser.get('/');
  }

  getTitle = () => {
    return element(by.css('.head .title')).getText();
  }

  clearLocalStorage = () => {
    browser.executeScript('window.localStorage.clear();');
  }

  getPath = () => {
    return browser.getCurrentUrl();
  }

}
