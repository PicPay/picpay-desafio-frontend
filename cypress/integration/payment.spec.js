/// <reference types="cypress" />

context('Desafio picpay', () => {
  it('should make a payment', () => {
    cy.visit('/');
    cy.get(':nth-child(1) > .user > .pay-button').click();
    cy.get('.value').type('123');
    cy.get('.cards').select('1111111111111111');
    cy.get('form.ng-dirty > .pay-button').click();
    cy.wait(1000)
    cy.get('span').contains('O pagamento foi concluido com sucesso.');
  })
});