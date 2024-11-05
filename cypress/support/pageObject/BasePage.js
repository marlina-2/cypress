export default class BasePage {
  open() {
    cy.visit(Cypress.env('BASE_URL'));
  }
}
