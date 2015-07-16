var cssClass = (function() {
    'use strict';

    // cssClass.add(htmlElement, className);
    // cssClass.remove(htmlElement, className);
    // cssClass.toggle(htmlElement, className);
    // cssClass.has(htmlElement, className);

    return {
    	add: function (htmlElement, className) {
        return htmlElement.className += ' ' + className;
    	},
    	remove: function(htmlElement, className) {
    	    return htmlElement.className = htmlElement.className.replace(className, '');
    	},
    	toggle: function (htmlElement, className) {
    		return (this.has(htmlElement, className)) ? this.remove(htmlElement, className) : this.add(htmlElement, className);
    	},
    	has: function (htmlElement, className) {
    		return (htmlElement.className.match(className)) ? true : false;
    	}

    }
})();
