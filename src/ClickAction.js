import SelectorAction from './SelectorAction';

export default class ClickAction extends SelectorAction {
	attachTo(browser) {
		return browser.click(this.selector);
	}
}
