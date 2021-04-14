import { browser, by, element } from 'protractor';

export class AppPage {
  acessarListagem() {
    return browser.get('');
  }

  pegarInput(className: string, valor: string){
    return element(by.css(`.${className}`)).sendKeys(valor);
  }

  abrirOption(){
    return element(by.css(".mat-form-field-type-mat-select")).click();
  }

  selecionarOption(child: string){
    return element(by.css(`.mat-option:${child}`)).click();
  }

  pegarBotao(buttonText: string){
    return element(by.buttonText(buttonText))
  }

  pegarBotaoPagarNoModal(){
    return element(by.css(`.pay`)).click();
  }

  pegarTituloDoModal(title: string){
    const titleElement = element(by.css(".mat-dialog-title"));
    expect(titleElement.getText()).toEqual(title);
  }
}
