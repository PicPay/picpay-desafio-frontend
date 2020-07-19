import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('deve navegar para a pagina inicial', () => {
    page.navigateToStart();
    expect(page.getTitle()).toEqual('Usuários');
  });

  it('deve selecionar um usuário e ir para a página de pagamento', () => {
    page.clearLocalStorage();
    page.selectUserButton.click();
    expect(page.getPath()).toContain('pagamento');
  });

  it('deve ir para a página de cadastrar cartão', () => {
    page.goToNewCardPageButton.click();
    expect(page.getPath()).toContain('novo-cartao');
  });

  it('deve preencher formulário de cadastrar cartão', () => {
    page.cardNumberField.sendKeys('1111111111111111');
    page.cvvField.sendKeys('789');
    page.expiryDateField.sendKeys('0118');
    expect(page.cardNumberField.getAttribute('value')).toEqual('1111 1111 1111 1111');
    expect(page.cvvField.getAttribute('value')).toEqual('789');
    expect(page.expiryDateField.getAttribute('value')).toEqual('01/18');
  });

  it('deve clicar no botão de criar cartão e ir para a página de meus cartões', () => {
    page.createCardButton.click();
    expect(page.getPath()).toContain('cartoes');
  });

  it('deve selecionar o primeiro cartão e ir para a página de pagamento', () => {
    page.selectCardButton.click();
    expect(page.getPath()).toContain('pagamento');
  });

  it('deve preencher o campo de valor', () => {
    page.valueField.sendKeys('2000');
    expect(page.valueField.getAttribute('value')).toEqual('R$ 20,00');
  });

  it('deve enviar pagamento e ir para a página inicial', () => {
    page.sendPaymentButton.click();
    expect(page.getTitle()).toEqual('Usuários');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
