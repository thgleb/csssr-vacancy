import svg4everybody from 'svg4everybody';
import $ from 'jquery';

import AutoResizeTextarea from './textarea-autoresize.js';
import Range from './range.js';

$(() => {
	svg4everybody();
});

const textarea = new AutoResizeTextarea(document.querySelector('.textarea'));
textarea.initialize();

const range = new Range(document.querySelector('.range'));
range.initialize();
