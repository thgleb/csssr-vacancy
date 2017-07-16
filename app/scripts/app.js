import AutoResizeTextarea from './textarea-autoresize.js';
import Range from './range.js';

const textarea = new AutoResizeTextarea(document.querySelector('.textarea'));
textarea.initialize();

const range = new Range(document.querySelector('.range'));
range.initialize();
