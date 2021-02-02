import { browser, by, element } from "protractor";

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getTitleText() {
    return element(
      by.css("app-root .content span")
    ).getText() as Promise<string>;
  }

  getUsers() {
    return element(by.css("app-root .users"));
  }

  clickPayButton() {
    return element
      .all(by.css("app-root .users .user"))
      .get(0)
      .element(by.css(".pay-button"))
      .click();
  }

  getPaymentModal() {
    return element(by.css("app-root .modal"));
  }

  getValueInput() {
    return element(by.css("app-root .modal input[type=number]"));
  }

  getCardsSelect() {
    return element(by.css("app-root .modal .cards select"));
  }

  getOptions() {
    return element.all(by.css("app-root .modal .cards select option"));
  }

  getModalPayButton() {
    return element(by.css("app-root .modal .pay-button"));
  }

  getModalTitleText() {
    return element(
      by.css("app-root .modal .title")
    ).getText() as Promise<string>;
  }
}
