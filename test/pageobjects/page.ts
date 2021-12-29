export default class Page {
    public open(): Promise<string> {
        return browser.url(`https://rezka.ag/`)
    }
}
