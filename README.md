JS Library For NightMareJS Actions
==================================

Very simple library to create [Chromeless](https://github.com/graphcool/chromeless) actions and scenario.


Install
-------

if you want to use it, you can use the npm published module

    npm install wat_action_chromeless


Otherwize, you can clone it and use webpack to build it.
npm test will ask webpack to build the library (lib/index.js).

    clone https://github.com/webautotester/action_chromeless.git
    npm install
    npm test




Action
------

The wat_action_chromeless library defines a JavaScript class for NightmareJS action (Goto, Type, Click, Wait, Back, ScrollTo, Check).

    const wat_action = require('wat_action_chromeless');
    const gotoAction = new wat_action.GotoAction('https://duckduckgo.com');
    const typeAction = new wat_action.TypeAction('#search_form_input_homepage', 'github nightmare');
    const clickAction = new wat_action.ClickAction('#search_button_homepage');
    const waitAction = new wat_action.WaitAction('#r1-0 a.result__a');


Scenario
--------

You can also create a scenario by adding actions to it.

    const scenario = new wat_action.Scenario();
    scenario.addAction(gotoAction);
    scenario.addAction(typeAction);
    scenario.addAction(clickAction);
    scenario.addAction(waitAction);


Run Chromeless 
--------------

You can attach action to Chromeless

    const { Chromeless } = require('chromeless');
    var chromeless = new Chromeless();
    gotoAction.attachTo(chromeless).end()
	.then(() => {
        //...
	})
	.catch ( (e) => {
        //...
    });

or a scenario

    scenario.attachTo(chromeless)
	.end()
	.then(() => {
        //...
	})
	.catch ( (e) => {
        //...
    });