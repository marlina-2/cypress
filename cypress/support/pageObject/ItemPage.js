/// <reference types="cypress" />

import BasePage from './BasePage';

class ItemPage extends BasePage {
  get itemImage() {
    return cy.get('.inventory_details_img');
  }

  get itemDescription() {
    return cy.get('[data-test="inventory-item-desc"]');
  }

  get itemPrice() {
    return cy.get('[data-test="inventory-item-price"]');
  }

  get itemName() {
    return cy.get('[data-test="inventory-item-name"]');
  }

  get addToCartButton() {
    return cy.get('#add-to-cart');
  }

  get removeFromCartButton() {
    return cy.get('#remove');
  }

  isItemImageVisible() {
    this.itemImage.should('be.visible');
  }

  checkItemImageAlt(name) {
    this.itemImage.should('have.attr', 'alt', name);
  }

  isItemDescriptionVisible() {
    this.itemDescription.should('be.visible');
  }

  checkItemDescriptionText(text) {
    this.itemDescription.should('have.text', text);
  }

  isItemPriceVisible() {
    this.itemPrice.should('be.visible');
  }

  checkItemPrice(price) {
    this.itemPrice.invoke('text').then((text) => {
      const priceWithoutDollar = parseFloat(text.replace('$', ''));
      expect(priceWithoutDollar).to.be.equal(price);
    });
  }

  isItemNameVisible() {
    this.itemName.should('be.visible');
  }

  checkItemNameText(text) {
    this.itemName.should('have.text', text);
  }

  addToCart() {
    this.addToCartButton.click();
    this.removeFromCartButton.should('have.text', 'Remove');
  }

  removeFromCart() {
    this.removeFromCartButton.click();
    this.addToCartButton.should('have.text', 'Add to cart');
  }
}

export default new ItemPage();
