import { element, by } from 'protractor';
import { AppPage } from './app.po';

describe('Home App', () => {

  let appPage: AppPage;

  beforeEach(async () => {
    appPage = new AppPage();
    await appPage.navigateTo();
  })

  it('should navigation from home app', async () => {
    const titlePage = await appPage.getTitleText();
    expect(titlePage).toEqual("Picpay Desafio Frontend");
  });

  it('should display list of contacts', async () => {
    const listContactsCount = await element.all(by.className("list-contacts")).count()
    expect(listContactsCount).toEqual(1);
  });

  it('should display modal of payment when click button payment contact', async () => {
    const btnOpenModalPayment = element.all(by.className("button-payment-user-network")).first()
    const modal = element.all(by.className("modal show")).first();
    await btnOpenModalPayment.click();
    const isOpenModal = await modal.isPresent()
    expect(isOpenModal).toBe(true)
  });

});
