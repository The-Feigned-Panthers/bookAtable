import { browser, by, element } from 'protractor';

export class RestaurantsPage {
  navigateTo() {
    return browser.get('/restaurants');
  }

  getElement() {
    return element(by.css('app-list-restaurants'));
  }

  getTabs() {
    return  element(by.css('#myTab'));
  }
}