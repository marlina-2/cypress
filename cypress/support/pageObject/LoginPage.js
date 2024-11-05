/// <reference types="cypress" />

import InventoryPage from './InventoryPage.js';
import BasePage from './BasePage';

class LoginPage extends BasePage {
  get usernameInput() {
    return cy.get('#user-name');
  }

  get passwordInput() {
    return cy.get('#password');
  }

  get loginButton() {
    return cy.get('input[data-test="login-button"]');
  }

  get errorMessage() {
    return cy.get('[data-test="error"]');
  }

  typeUsername(username) {
    this.usernameInput.type(username);
    return this;
  }

  typePassword(password) {
    this.passwordInput.type(password);
    return this;
  }

  clickLoginButton() {
    this.loginButton.click();
  }

  checkErrorMessageText(text) {
    this.errorMessage.should('have.text', text);
  }

  logIn(username, password) {
    this.typeUsername(username);
    this.typePassword(password);
    this.clickLoginButton();
    return InventoryPage.checkInventoryPageIsOpened();
  }
}

export default new LoginPage();
