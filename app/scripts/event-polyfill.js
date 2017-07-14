export default (() => {
	if (typeof window.Event === 'function') {
		return;
	}

	function CustomEvent(event, params) {
		params = params || {
			bubbles: false,
			cancelable: false
		};

		const e = document.createEvent('CustomEvent');
		e.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);

		return e;
	}

	CustomEvent.prototype = window.Event.prototype;

	window.Event = CustomEvent;
})();
