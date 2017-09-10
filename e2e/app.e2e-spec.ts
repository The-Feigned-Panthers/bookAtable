import { AppPage } from './app.po';

describe('book-atable App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo();
  });

  it('should have app-root element', () => {
    expect(page.getRootElement()).toBeDefined();
  });

  it('should have app-header element', () => {
    expect(page.getHeaderElement()).toBeDefined();
  });

  it('should have app-footer element', () => {
    expect(page.getFooterElement()).toBeDefined();
  });
});
