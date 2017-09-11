import { RestaurantsPage } from './restaurants.po';
describe('Restaurants page', () => {
    let page: RestaurantsPage;

    beforeEach(() => {
        page = new RestaurantsPage();
    });

    it('should have app-list-restaurants element', () => {
        page.navigateTo('/restaurants');
        expect(page.getElement()).toBeDefined();
    });

    it('should show tabs', () => {
        page.navigateTo('/restaurants');
        expect(page.getTabs()).toBeTruthy();
    });

    it('should show all restaurants', () => {
        page.navigateTo('home');
        page.navigateTo('/restaurants');
        page.waitForControl();
        expect(page.getRestaurants().count()).toBe(6);
    });
});
