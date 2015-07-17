var dom = (function(){
	// dom.remove(element);
	// dom.append(targetElement, element);
	// dom.after(targetElement, element);
	// dom.prepend(targetElement, element);
	// dom.before(targetElement, element);
	// dom.val(targetElement);

	return {
		remove: function (element) {
			if (element.parentNode) {
				return element.parentNode.removeChild(element);
			}
		},
		append: function (targetElement, element) {
			return targetElement.appendChild(element);
		},
		after: function (targetElement, element) {
			if (targetElement.parentNode) {
				return targetElement.parentNode.insertBefore(element, targetElement.nextSibling);
			}
		},
		prepend: function (targetElement, element) {
			// at beginning of targetElement
			return this.before(targetElement.firstChild, element);
		},
		before: function (targetElement, element) {
			return targetElement.parentNode.insertBefore(element, targetElement)
		},
		val: function (targetElement) {
			return targetElement.value;
		}
	};

})();