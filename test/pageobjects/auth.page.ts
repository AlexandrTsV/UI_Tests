import { ChainablePromiseElement } from 'webdriverio';

import Page from './page';

export default class AuthPage extends Page {
    public get btnLogin(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
        return $(`button.login_button.btn.btn-action`);
    }

    public get btnForm(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
        return $(`.b-tophead__login`);
    }
}
