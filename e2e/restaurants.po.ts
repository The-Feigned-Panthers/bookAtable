import { browser, by, element } from 'protractor';

export class RestaurantsPage {
  navigateTo(url) {
    return browser.get(url);
  }

  getElement() {
    return element(by.css('app-list-restaurants'));
  }

  getTabs() {
    return element(by.css('#myTab'));
  }

  waitForControl() {
    // browser.waitForAngularEnabled(false);
    return browser.wait(() => {
      return element(by.className('control')).isDisplayed;
    }, 2000);
  }
  getRestaurants() {
    browser.waitForAngularEnabled(false);
    return element.all(by.className('restaurant'));
  }
}
