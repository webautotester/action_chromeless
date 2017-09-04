import Action from './Action';

export default class TypeAction extends Action {
	constructor(text, selector) {
		super();
		this.selector = selector;
		this.text = text;
	}

	attachTo(browser) {
		return browser.type(this.text, this.selector);
	}

	toString() {
		return `${super.toString()}: ${this.text} , ${this.selector}`;
	}

	equalsTo(action) {
		return (super.equalsTo(action) && (this.selector === action.selector) && (this.text === action.text));
	}
}