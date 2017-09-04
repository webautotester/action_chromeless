import GotoAction from './GotoAction';
import ClickAction from './ClickAction';
import MouseDownAction from './MouseDownAction';
import MouseUpAction from './MouseUpAction';
import TypeAction from './TypeAction';
import ScrollToAction from './ScrollToAction';
import ScrollToElementAction from './ScrollToElementAction';
import WaitAction from './WaitAction';
import BackAction from './BackAction';

export function createAction(actionJSON) {
	switch (actionJSON.type) {
	case 'GotoAction':
		return new GotoAction(actionJSON.url);
	case 'ClickAction':
		return new ClickAction(actionJSON.selector);
	case 'MouseUpAction':
		return new MouseUpAction(actionJSON.selector);
	case 'MouseDownAction':
		return new MouseDownAction(actionJSON.selector);
	case 'TypeAction':
		return new TypeAction(actionJSON.text, actionJSON.selector);
	case 'ScrollToAction':
		return new ScrollToAction(actionJSON.x, actionJSON.x);
	case 'ScrollToElementAction':
		return new ScrollToElementAction(actionJSON.selector);
	case 'WaitAction':
		return new WaitAction(actionJSON.ms);
	case 'BackAction':
		return new BackAction();
	}
	return new WaitAction(1000);
}