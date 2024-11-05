/// <reference types="cypress" />

import LoginPage from '../../support/pageObject/LoginPage.js';
import InventoryPage from '../../support/pageObject/InventoryPage.js';
import YourCartPage from '../../support/pageObject/YourCartPage.js';
import ItemPage from '../../support/pageObject/ItemPage.js';

describe('Check Inventory page', () => {
  beforeEach(() => {
    LoginPage.open();
    LoginPage.logIn(
      Cypress.env('USER_NAME'),
      Cypress.env('USER_PASSWORD'),
      YourCartPage
    );
  });

  it('Main UI elements are visible', () => {
    InventoryPage.isBurgerMenuVisible();
    InventoryPage.isShoppingCartVisible();
    InventoryPage.isSortingSelectorVisible();
  });

  it('Check options count in sorting drop down', () => {
    InventoryPage.checkSortOptionsCount(4);
  });

  it('Your Cart page is opened after clicking on shopping cart button', () => {
    InventoryPage.openShoppingCart().checkYourCartPageIsOpened();
  });

  it('Item Page page is opened after clicking on item name', () => {
    InventoryPage.openCartByClickOnName('Sauce Labs Backpack');
    ItemPage.isItemImageVisible();
    ItemPage.isItemDescriptionVisible();
    ItemPage.isItemPriceVisible();
    ItemPage.isItemNameVisible();
  });
});
