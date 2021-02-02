import { AppPage } from "./app.po";
import { browser, element, logging } from "protractor";

describe("workspace-project App", () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it("should display a list of users", () => {
    page.navigateTo();
    expect(page.getUsers().isPresent()).toBeTruthy();
  });

  it("should display a payment modal when click on user button", () => {
    page.navigateTo();
    page.clickPayButton();
    expect(page.getPaymentModal().isPresent()).toBeTruthy();
  });

  it("should create a transaction", () => {
    page.navigateTo();
    page.clickPayButton();
    browser.wait(page.getPaymentModal().isPresent());
    page.getValueInput().sendKeys(10);
    page.getCardsSelect().click();
    page.getOptions().get(0).click();
    page.getModalPayButton().click();
    expect(page.getModalTitleText()).toEqual("Recibo de pagamento");
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(
      jasmine.objectContaining({
        level: logging.Level.SEVERE,
      } as logging.Entry)
    );
  });
});
