describe('My First Test', () => {
  it('Visits the Cypress website', () => {
    cy.visit('https://www.cypress.io');
    cy.contains('Cypress').should('be.visible');
  });
});
