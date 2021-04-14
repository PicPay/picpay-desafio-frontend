import { AppPage } from './app.po';

describe('Testando Desafio Front-end PicPay', () => {
  let appPage: AppPage;

  beforeEach(() => {
    appPage = new AppPage();
  });

  it('Deve navegar para listagem de usuários', ()=> {
    appPage.acessarListagem();
  })

  it('Deve abrir e fechar o modal', ()=>{
    expect(appPage.pegarBotao("Pagar").click());
    expect(appPage.pegarBotao("Fechar").click());
  })

  it('Deve abrir o modal e enviar transação com sucesso', () => {
    expect(appPage.pegarBotao("Pagar").click());
    expect(appPage.pegarInput('number', '10000'));
    expect(appPage.abrirOption());
    expect(appPage.selecionarOption("first-child"));
    expect(appPage.pegarBotaoPagarNoModal());
    expect(appPage.pegarTituloDoModal("Recibo de Pagamento"));
    expect(appPage.pegarBotao("Fechar").click());
  });

  it('Deve abrir o modal e dá erro na transação', () => {
    expect(appPage.pegarBotao("Pagar").click());
    expect(appPage.pegarInput('number', '10000'));
    expect(appPage.abrirOption());
    expect(appPage.selecionarOption("last-child"));
    expect(appPage.pegarBotaoPagarNoModal());
    expect(appPage.pegarTituloDoModal("Erro na Transação"));
    expect(appPage.pegarBotao("Tentar novamente").click());
  });

});
