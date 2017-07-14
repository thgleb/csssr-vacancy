import './event-polyfill.js';

class AutoResizeTextarea {
	constructor(textarea) {
		if (!textarea || textarea.tagName !== 'TEXTAREA') {
			return;
		}

		this._textarea = textarea;

		this._initialParameters = {
			overflowY: this._textarea.style.overflowY,
			height: this._textarea.style.height
		};
	}
	initialize() {
		this._textarea.style.height = 'auto';
		this._textarea.style.overflowY = 'hidden';

		this._inputListener = this._inputHandler.bind(this);

		this._textarea.addEventListener('input', this._inputListener);
		this._dispatchInputEvent();

		this._resizeListener = this._dispatchInputEvent.bind(this);
		window.addEventListener('resize', this._resizeListener);
	}
	destroy() {
		this._textarea.style.overflowY = this._initialParameters.overflowY;
		this._textarea.style.height = this._initialParameters.height;

		this._textarea.removeEventListener('input', this._inputListener);
		delete this._inputListener;

		window.removeEventListener('resize', this._resizeListener);
	}
	_inputHandler(e) {
		this._textarea.style.height = 'auto';
		this._textarea.style.height = e.target.scrollHeight + 'px';
	}
	_dispatchInputEvent() {
		this._textarea.dispatchEvent(new Event('input'));
	}
}

export default AutoResizeTextarea;
