import { RestaurantsPage } from './restaurants.po';
describe('Restaurants page', () => {
    let page: RestaurantsPage;

    beforeEach(() => {
        page = new RestaurantsPage();
    });

    it('should have app-list-restaurants element', () => {
        page.navigateTo();
        expect(page.getElement()).toBeDefined();
    });

    it('should show tabs', () => {
        page.navigateTo();
        expect(page.getTabs()).toBeTruthy();
    });
});