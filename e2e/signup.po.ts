import { protractor, browser, by, element } from 'protractor';

export class SignupPage {
  navigateTo(url) {
    return browser.get(url);
  }
  getLocation() {
      return browser.getCurrentUrl();
  }

  getElement() {
    return element(by.css('app-signup'));
  }

  getPageTitle() {
    // browser.waitForAngularEnabled(false);
    return element(by.tagName('legend'));
  }
  getInputUserName() {
    browser.waitForAngularEnabled(false);
    return element(by.id('username'));
  }

  getInputFirstName() {
    browser.waitForAngularEnabled(false);
    return element(by.id('firstname'));
  }

  getInputLastName() {
    browser.waitForAngularEnabled(false);
    return element(by.id('lastname'));
  }
  getInputEmail() {
    browser.waitForAngularEnabled(false);
    return element(by.id('username'));
  }
  getInputPassword() {
    browser.waitForAngularEnabled(false);
    return element(by.id('password'));
  }

  getInputPasswordCompare() {
    browser.waitForAngularEnabled(false);
    return element(by.id('passwordcompare'));
  }

  getSignupButton() {
    browser.waitForAngularEnabled(false);
    return element(by.buttonText('Signup'));
  }

  signupCorrectUser(username, firstname, lastname, email, password, passwordcheck) {
    const EC = protractor.ExpectedConditions;
    const condition = EC.urlContains('home');

    // browser.waitForAngularEnabled(false);
    // browser.wait(element(by.buttonText('Signup')).isDisplayed, 1000);
    element(by.css('#username')).sendKeys(username);
    element(by.id('firstname')).sendKeys(firstname);
    element(by.id('lastname')).sendKeys(lastname);
    element(by.id('email')).sendKeys(email);
    element(by.id('password')).sendKeys(password);
    element(by.id('passwordcheck')).sendKeys(passwordcheck);
    element(by.id('radio1')).isSelected();
    element(by.buttonText('Sugnup')).click();
    browser.wait(condition, 1000);
  }

  signupIncorrectUser(username, firstname, lastname, email, password, passwordcheck) {
    const EC = protractor.ExpectedConditions;
    const condition = EC.urlContains('signup');

    browser.waitForAngularEnabled(false);
    // browser.wait(element(by.buttonText('Signup')).isDisplayed, 1000);
    element(by.css('#username')).sendKeys(username);
    element(by.id('firstname')).sendKeys(firstname);
    element(by.id('lastname')).sendKeys(lastname);
    element(by.id('email')).sendKeys(email);
    element(by.id('password')).sendKeys(password);
    element(by.id('passwordcheck')).sendKeys(passwordcheck);
    element(by.id('radio1')).isSelected();
    element(by.buttonText('Signup')).click();
    browser.wait(condition, 1000);
  }
}
