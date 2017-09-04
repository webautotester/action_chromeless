import SelectorAction from './SelectorAction';

export default class ScrollToElement extends SelectorAction {
	attachTo(browser) {
		return browser.scrollToElement(this.selector);
	}
}