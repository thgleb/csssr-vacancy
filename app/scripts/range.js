function Range(elem) {
	this._elem = elem;

	if (!this._elem) {
		return;
	}

	this._control = this._elem.querySelector('.range__control');
	this._options = this._elem.querySelectorAll('.range__visual-option');

	if (!this._control || this._options.length === 0) {
		return;
	}

	this._clickListeners = [];
}

Range.prototype.initialize = function () {
	[...this._options].forEach(option => {
		const listener = this._clickHandler.bind(this);

		option.addEventListener('click', listener);
		this._clickListeners.push(listener);
	});
};

Range.prototype.destroy = function () {
	[...this._options].forEach((option, i) => {
		option.removeEventListener('click', this._clickListeners[i]);
	});

	this._clickListeners = [];
};

Range.prototype._clickHandler = function (e) {
	e.preventDefault();

	const value = parseInt(e.currentTarget.getAttribute('data-value'), 10) || 0;

	this._clearCheckedOptions();
	this._setCheckedOption(value);
};

Range.prototype._clearCheckedOptions = function () {
	[...this._options].forEach(option => option.removeAttribute('data-checked'));
};

Range.prototype._setCheckedOption = function (index) {
	this._control.value = index;
	this._options[index].setAttribute('data-checked', true);
};

export default Range;
