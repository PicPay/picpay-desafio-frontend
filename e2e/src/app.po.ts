import { browser, by, element, WebElementPromise } from "protractor";

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getPageTitle() {
    return element(by.css("app-header p.text-gray-800")).getText() as Promise<
      string
    >;
  }

  getUserCardButtonText() {
    return element(
      by.css("app-user-item app-button button")
    ).getText() as Promise<string>;
  }

  getUserCardButton() {
    return element(
      by.css("app-user-item app-button button")
    ).getWebElement() as WebElementPromise;
  }

  getModalHeaderText() {
    return element(by.css("app-modal header h2")).getText() as Promise<string>;
  }
}
