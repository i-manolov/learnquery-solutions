var domSelector = function(selectors) {
    'use strict';

    if (selectors === undefined) {
    	return [];
    } 
    else {
        // must select by id, class, tag

        // by id
        var firstChar = selectors.charAt(0);
        var restOfString = selectors.slice(1);
        if (firstChar === '#') {
            return $.makeArray(document.getElementById(restOfString));
        }

        // by class
        else if (firstChar === '.') {
            return $.makeArray(document.getElementsByClassName(restOfString));
        }
        // by tag
        else if (firstChar.match(/[a-z]/i)) {
            return $.makeArray(document.getElementsByTagName(selectors));
        } else {
            throw new SyntaxError();
        }
    }
};
