import { AppPage } from "./app.po";
import { browser, logging } from "protractor";

describe("workspace-project App", () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it("should display header", () => {
    page.navigateTo();
    expect(page.getPageTitle()).toEqual("SendPay");
  });

  it('should have users card', () => {
    browser.waitForAngular()

    expect(page.getUserCardButtonText()).toEqual("Pagar")
  })

  it('should open modal', async () => {
    browser.waitForAngular()

    const el = await page.getUserCardButton()
    el.click()

    expect(page.getModalHeaderText()).toEqual("Pagamento")
  })

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
