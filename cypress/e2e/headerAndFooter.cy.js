describe('Check header and footer', () => {
  beforeEach(() => {
    cy.visit('https://guest:welcome2qauto@qauto.forstudy.space/');
  });

  it('Check header', () => {
    cy.get('a[class="btn header-link -active"]');
    cy.get("button[appscrollto='aboutSection']");
    cy.get('button[appscrollto="contactsSection"]');
    cy.get('button[class="header-link -guest"]');
    cy.get('button.header_signin');
  });

  it('Check footer', () => {
    cy.get('span.icon-facebook').parent('a');
    cy.get('span.icon-telegram').parent('a');
    cy.get('span.icon-youtube').parent('a');
    cy.get('span.icon-instagram').parent('a');
    cy.get('span.icon-linkedin').parent('a');
    cy.get('.display-4').contains('ithillel.ua');
    cy.get('.contacts_link').contains('support@ithillel.ua');
  });
});
