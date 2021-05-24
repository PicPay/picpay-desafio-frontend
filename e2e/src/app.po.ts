import { browser } from 'protractor';

export class AppPage {

  async navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  async getTitleText() {
    return browser.getTitle() as Promise<string>;
  }
}
