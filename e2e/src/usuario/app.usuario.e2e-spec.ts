import { browser, logging } from "protractor";
import { AppUsuarioPage } from "./app.usuario.po";

describe('AppUsuarioPage', () => {

    let page: AppUsuarioPage;

    beforeEach(() => {
        page = new AppUsuarioPage();
    });

    it('Deve carregar pagina inicial', () => {
        page.navegarParaPaginaInicial();
        const textBotaoPagar = page.obterBotaoPagar().getText();

        expect(textBotaoPagar).toEqual('Pagar');
    });

    it('Deve abrir modal de pagamento', () => {
        page.btnPagar.click();
        const tituloModalPagamento = page.obterTituloModalPagamento().getText();
        
        expect(tituloModalPagamento).toEqual('Pagamento');
    });
    
    it('Deve preencher formulario com sucesso', () => {
        page.value.sendKeys(150000);
        page.selecionarCartao();

        page.btnEfetuarPagamento.click();
        page.esperar(2000);

        const tituloRecibo = page.obterTituloRecibo().getText();
        expect(tituloRecibo).toEqual('Recibo de pagamento');
    });

    it('Deve fechar modal de notificacao e exibir lista de usuarios novamente', () => {
        page.btnFecharNotificacao.click();
        const textBotaoPagar = page.obterBotaoPagar().getText();
        
        expect(textBotaoPagar).toEqual('Pagar');
    });
    
    afterEach(async () => {
        const logs = await browser.manage().logs().get(logging.Type.BROWSER);
        expect(logs).not.toContain(jasmine.objectContaining({
          level: logging.Level.SEVERE,
        } as logging.Entry));
    });
});