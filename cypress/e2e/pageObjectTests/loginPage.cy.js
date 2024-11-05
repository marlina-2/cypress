import LoginPage from '../../support/pageObject/LoginPage.js';
import InventoryPage from '../../support/pageObject/InventoryPage.js';
import testData from '../../fixtures/credentials.json';

describe('Check login page', () => {
  beforeEach(() => {
    LoginPage.open();
  });

  it('Log in with valid credentials', () => {
    LoginPage.logIn(
      testData.userNames.correctUserName,
      testData.passwords.correctPassword
    );
    InventoryPage.checkInventoryPageIsOpened();
  });

  it('Log in with invalid username', () => {
    LoginPage.typeUsername(testData.userNames.incorrectUserName);
    LoginPage.typePassword(testData.passwords.correctPassword);
    LoginPage.clickLoginButton();
    LoginPage.checkErrorMessageText(
      'Epic sadface: Username and password do not match any user in this service'
    );
  });

  it('Log in with invalid password', () => {
    LoginPage.typeUsername(testData.userNames.correctUserName);
    LoginPage.typePassword(testData.passwords.incorrectPassword);
    LoginPage.clickLoginButton();
    LoginPage.checkErrorMessageText(
      'Epic sadface: Username and password do not match any user in this service'
    );
  });

  it('Log in with invalid username and password', () => {
    LoginPage.typeUsername(testData.userNames.incorrectUserName);
    LoginPage.typePassword(testData.passwords.incorrectPassword);
    LoginPage.clickLoginButton();
    LoginPage.checkErrorMessageText(
      'Epic sadface: Username and password do not match any user in this service'
    );
  });

  it('Log in without username', () => {
    LoginPage.typePassword(testData.passwords.correctPassword);
    LoginPage.clickLoginButton();
    LoginPage.checkErrorMessageText('Epic sadface: Username is required');
  });

  it('Log in without password', () => {
    LoginPage.typeUsername(testData.userNames.correctUserName);
    LoginPage.clickLoginButton();
    LoginPage.checkErrorMessageText('Epic sadface: Password is required');
  });

  it('Log in without username and password', () => {
    LoginPage.clickLoginButton();
    LoginPage.checkErrorMessageText('Epic sadface: Username is required');
  });
});
