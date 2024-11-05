import LoginPage from '../../support/pageObject/LoginPage.js';
import InventoryPage from '../../support/pageObject/InventoryPage.js';
import ItemPage from '../../support/pageObject/ItemPage.js';
import testData from '../../fixtures/credentials.json';
import YourCartPage from '../../support/pageObject/YourCartPage.js';

describe('Item Page Tests', () => {
  beforeEach(() => {
    LoginPage.open();
    LoginPage.logIn(
      testData.userNames.correctUserName,
      testData.passwords.correctPassword,
      YourCartPage
    );
    InventoryPage.openItemByIndex(0);
  });

  it('Check item details', () => {
    ItemPage.checkItemImageAlt('Sauce Labs Backpack');
    ItemPage.checkItemNameText('Sauce Labs Backpack');
    ItemPage.checkItemDescriptionText(
      'carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.'
    );
    ItemPage.checkItemPrice(29.99);
  });

  it('Check toggle Add to Cart and Remove buttons', () => {
    ItemPage.addToCart();
    ItemPage.removeFromCart();
  });
});
