import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getRootElement() {
    return element(by.css('app-root'));
  }
}
