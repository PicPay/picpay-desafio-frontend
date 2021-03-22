import { browser, by, element } from "protractor";

export class AppUsuarioPage {

    listaCartoes = element.all(by.tagName('option'));

    value = element(by.id('value'));
    card_number = element(by.id('card_number'));
    
    btnPagar = element(by.className('usuarios__pagar--botao'));
    btnCancelar = element(by.id('btn-cancelar'));
    btnEfetuarPagamento = element(by.id('btn-pagar'));
    btnFecharNotificacao = element(by.id('btn-fechar-notificacao'));

    esperar = (milisegundos: number) => {
        browser.sleep(milisegundos);
    }

    navegarParaPaginaInicial() {
        return browser.get(browser.baseUrl) as Promise<any>;
    }

    obterElementoXpath(xpath: string) {
        return element(by.xpath(xpath));
    }

    selecionarCartao() {
        this.listaCartoes.get(1).click();
    }

    obterBotaoPagar() {
        return this.obterElementoXpath('/html/body/app-root/section/main/app-usuario/section/app-usuario-listagem/div/div[1]/button');
    }

    obterTituloModalPagamento() {
        return this.obterElementoXpath('/html/body/app-root/section/main/app-usuario/section/app-usuario-pagamento/div/div/div');
    }

    obterTituloRecibo() {
        return this.obterElementoXpath('/html/body/app-root/section/main/app-usuario/section/app-usuario-notificacao/div/div/div[2]/span[1]');
    }
}