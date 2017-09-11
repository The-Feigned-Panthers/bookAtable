import { SignupPage } from './signup.po';
describe('Signup page', () => {
    let page: SignupPage;

    beforeEach(() => {
        page = new SignupPage();
        page.navigateTo('/signup');
    });

    it('should have app-signup element', () => {
        expect(page.getElement()).toBeDefined();
    });

    it('should show correct page name', () => {
        expect(page.getPageTitle().getText()).toBe('Register');
    });

    // it('should show correct form fields and button', () => {

        it('should have input username element', () => {
            expect(page.getInputUserName()).toBeDefined();
        });

        it('should have input first name element', () => {
            expect(page.getInputFirstName()).toBeDefined();
        });

        it('should have input last name element', () => {
            expect(page.getInputLastName()).toBeDefined();
        });

        it('should have input email element', () => {
            expect(page.getInputEmail()).toBeDefined();
        });

        it('should have input password element', () => {
            expect(page.getInputPassword()).toBeDefined();
        });

        it('should have input password check element', () => {
            expect(page.getInputPasswordCompare()).toBeDefined();
        });

        it('should have submit button element', () => {
            expect(page.getSignupButton()).toBeDefined();
        });

    // });

    it('should not signup incorrect user and stay at signup page', ( () => {
        page.signupIncorrectUser('test', 'test', 'test', 'didexe@gmail.com', 'test12', 'test12');
        expect(page.getLocation()).toBe('http://localhost:49152/signup');
    }));

    it('should successfully signup correct user and redirect to home page', ( () => {
        page.signupCorrectUser('username', 'firstname', 'lastname', 'test@gmail.com', 'test12', 'test12');
        expect(page.getLocation()).toBe('http://localhost:49152/home');
    }));

});
