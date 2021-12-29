import IdentifierPage from  '../pageobjects/identifier.page';
import PasswordPage from '../pageobjects/password.page';
import AccountPage from '../pageobjects/account.page';

describe('Signing in rezka account', () => {
    it('signing in the account with valid credentials', async () => {
        await IdentifierPage.open();

        await IdentifierPage.inputIdentifier(process.env.EMAIL);
        await PasswordPage.inputPassword(process.env.PASSWORD);
        await expect(await AccountPage.welcomeHeader).toBeExisting();
    });
});

describe('Signing in rezka account', () => {
    it('signing in the account with invalid credentials', async () => {
        await browser.reloadSession();
        await IdentifierPage.open();

        await IdentifierPage.inputIdentifier(process.env.EMAIL);
        await PasswordPage.inputPassword(process.env.PASSWORD + "1");
        await expect(await AccountPage.welcomeHeader).not.toBeExisting();
    });
});
