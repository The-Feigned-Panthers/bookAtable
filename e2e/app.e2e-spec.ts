import { AppPage } from './app.po';

describe('book-atable App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should have app-root element', () => {
    page.navigateTo();
    expect(page.getRootElement()).toBeDefined();
  });
});
