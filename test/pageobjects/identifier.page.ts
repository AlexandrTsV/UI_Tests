import { ChainablePromiseElement } from 'webdriverio';
import AuthPage from './auth.page';

class IdentifierPage extends AuthPage {
    public get identifierInputField(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
        return $(`#login_name`);
    }

    public async inputIdentifier(username: string): Promise<void> {
        await this.btnForm.click();
        await this.identifierInputField.setValue(username);
    }

    public open(): Promise<string> {
        return super.open();
    }
}

export default new IdentifierPage();
