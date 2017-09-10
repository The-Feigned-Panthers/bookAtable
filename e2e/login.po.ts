import { protractor, browser, by, element } from 'protractor';

export class LoginPage {
  navigateTo(url) {
    return browser.get(url);
  }
  getLocation() {
      return browser.getCurrentUrl();
  }

  getElement() {
    return element(by.css('app-login'));
  }

  getPageTitle() {
    browser.waitForAngularEnabled(false);
    return element(by.tagName('legend'));
  }

  getInputEmail() {
    browser.waitForAngularEnabled(false);
    return element(by.cssContainingText('input', 'username'));
  }
  getInputPassword() {
    browser.waitForAngularEnabled(false);
    return element(by.cssContainingText('input', 'password'));
  }

  getLoginButton() {
    browser.waitForAngularEnabled(false);
    return element(by.buttonText('Signup'));
  }
  loginCorrectUser(email, password) {
    const EC = protractor.ExpectedConditions;
    const condition = EC.urlContains('home');

    browser.waitForAngularEnabled(false);
    element(by.id('email')).sendKeys(email);
    element(by.id('password')).sendKeys(password);
    element(by.buttonText('Login')).click();
    browser.wait(condition, 1000);
  }

  loginIncorrectUser(email, password) {
    const EC = protractor.ExpectedConditions;
    const condition = EC.urlContains('login');

    browser.waitForAngularEnabled(false);
    element(by.id('email')).sendKeys(email);
    element(by.id('password')).sendKeys(password);
    element(by.buttonText('Login')).click();
    browser.wait(condition, 1000);
  }
}
