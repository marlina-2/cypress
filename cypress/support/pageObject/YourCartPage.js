/// <reference types="cypress" />

import BasePage from './BasePage';

class YourCartPage extends BasePage {
  get pageTitle() {
    return cy.get('span[data-test="title"]');
  }

  checkYourCartPageIsOpened() {
    this.pageTitle.should('have.text', 'Your Cart');
  }
}

export default new YourCartPage();
