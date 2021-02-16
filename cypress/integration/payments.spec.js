
describe('should test payments page', () => {
  beforeEach(() => {
    cy.fixture('users.json').as('usersJSON');

    cy.server();

    cy.route('https://www.mocky.io/v2/5d531c4f2e0000620081ddce', '@usersJSON').as('users');
    cy.visit('/payments');

  });

  it('should render users list', () => {
    cy.wait('@users');

    cy.get('mat-card').its('length').should('be.gt', 1);
  });

  it('should open payment modal', () => {
    cy.wait('@users');

    cy.get('.users-list .mat-raised-button').first().click();

    cy.get('.payment-modal--title').should('contain', 'Qual é o valor do pagamento?')
  });

  it('should open payment confirmation modal', () => {
    cy.wait('@users');

    cy.get('.users-list .mat-raised-button').first().click();

    cy.get('#paymentAmountInput').clear()
    cy.get('#paymentAmountInput').type('100')

    cy.wait(100);

    cy.get('#confirmData').click();

    cy.get('.payment-modal--title').should('contain', 'Pagando')

  });

  it('should send a payment', () => {
    cy.wait('@users');

    cy.get('.users-list .mat-raised-button').first().click();

    cy.get('#paymentAmountInput').clear();
    cy.get('#paymentAmountInput').type('200000');
    cy.get('#paymentAmountInput').blur();

    cy.wait(100);

    cy.get('#confirmData').click();

    cy.get('.payment-modal--title').should('contain', 'Pagando');

    cy.get('#selectCreditCard').click();

    cy.get('mat-option').last().click();

    cy.get('#sendPaymentBtn').click();

    cy.fixture('payment.json').as('paymentJSON');

    cy.server();

    cy.route('https://run.mocky.io/v3/533cd5d7-63d3-4488-bf8d-4bb8c751c989', '@paymentJSON').as('payment');

    cy.get('.payment-modal--title').should('contain', 'Seu pagamento foi enviado com sucesso!');

  });
});
