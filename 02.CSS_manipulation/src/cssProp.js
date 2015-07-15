function cssProp() {
    'use strict';

   var htmlElem = arguments[0];
   var prop = arguments[1];
   var val = arguments[2];

    // set single property
    // cssProp(htmlElement, cssProperty, value);
    if (arguments.length === 3) {
        return htmlElem.style[prop] = val;
    }

    if (arguments.length === 2) {

    	// set multiple properties
    	// cssProp(htmlElement, {cssProperty: value, cssProperty: value});
    	if (typeof(prop) === 'object') {
    		Object.keys(prop).forEach(function (key) {
    			htmlElem.style[key] = prop[key];
    		});
    	}

    	// get CSS property value
    	// cssProp(htmlElement, cssProperty);
    	else if (typeof(prop) === 'string') {
    		return htmlElem.style[prop];
    	}
    }

}
