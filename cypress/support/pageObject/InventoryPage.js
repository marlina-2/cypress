/// <reference types="cypress" />

import YourCartPage from './YourCartPage.js';
import ItemPage from './ItemPage.js';
import BasePage from './BasePage';

class InventoryPage extends BasePage {
  get pageTitle() {
    return cy.get('span[data-test="title"]');
  }

  get burgerMenu() {
    return cy.get('#react-burger-menu-btn');
  }

  get shoppingCart() {
    return cy.get('a[data-test="shopping-cart-link"]');
  }

  get sortingSelector() {
    return cy.get('select[data-test="product-sort-container"]');
  }

  get sortingSelectorOptions() {
    return cy.get('select[data-test="product-sort-container"]>option');
  }

  checkInventoryPageIsOpened() {
    this.pageTitle.should('have.text', 'Products');
  }

  isBurgerMenuVisible() {
    this.burgerMenu.should('be.visible');
  }

  isShoppingCartVisible() {
    this.shoppingCart.should('be.visible');
  }

  isSortingSelectorVisible() {
    this.sortingSelector.should('be.visible');
  }

  checkSortOptionsCount(count) {
    this.sortingSelectorOptions.should('have.length', count);
  }

  openShoppingCart() {
    this.shoppingCart.click();
    return YourCartPage;
  }

  openCartByClickOnName(name) {
    cy.contains('[data-test="inventory-item-name"]', name).click();
    return ItemPage;
  }

  openItemByIndex(index) {
    cy.get('[data-test="inventory-item-name"]').eq(index).click();
  }
}

export default new InventoryPage();
