import { LoginPage } from './login.po';
describe('Login page', () => {
    let page: LoginPage;

    beforeEach(() => {
        page = new LoginPage();
        page.navigateTo('/login');
    });

    it('should have app-login element', () => {
        expect(page.getElement()).toBeDefined();
    });

    it('should show correct page name', () => {
        expect(page.getPageTitle().getText()).toBe('Login');
    });

    // it('should show correct form fields and button', () => {

        it('should have input email element', () => {
            expect(page.getInputEmail()).toBeDefined();
        });

        it('should have input password element', () => {
            expect(page.getInputPassword()).toBeDefined();
        });

        it('should have submit button element', () => {
            expect(page.getLoginButton()).toBeDefined();
        });
    // });

    it('should not login non-existing user and stay at login page', ( () => {
        page.loginIncorrectUser('didexe@gmail.com', '1234567');
        expect(page.getLocation()).toBe('http://localhost:49152/login');
    }));

    it('should successfully login existing user and redirect to home page', ( () => {
        page.loginCorrectUser('didexe@gmail.com', '123456');
        expect(page.getLocation()).toBe('http://localhost:49152/home');
    }));

    it('should successfully logout user and show login button', ( () => {
        page.navigateTo('/home');
        page.logoutUser();
        expect(page.getLoginButton()).toBeDefined();
    }));

});
