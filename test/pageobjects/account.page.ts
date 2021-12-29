import { ChainablePromiseElement } from 'webdriverio';

import Page from './page';

class AccountPage extends Page {
    public get welcomeHeader(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
        return $(`.b-tophead-right.user-things.pull-right`);
    }
}

export default new AccountPage();
