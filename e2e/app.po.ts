import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getRootElement() {
    return element(by.css('app-root'));
  }
  getHeaderElement() {
    return element(by.css('app-header'));
  }

  getRouterOutletElement() {
    return element(by.css('router-outlet'));
  }
  getHomeElement() {
    return element(by.css('app-home'));
  }

  getFooterElement() {
    return element(by.css('app-footer'));
  }
}
