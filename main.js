var log = console.log.bind(console);

var mainDiv;

window.onload = init;

function init() {
	log('loaded!!');

	loadDom();

	makeBoxes();

}

function loadDom() {
	mainDiv = getDom('mainDiv');
}

function getDom(id) {
	return document.getElementById(id);
}

function makeDom(tag, className) {
	var dom = document.createElement(tag);
	if (className) {
		dom.className = className;
	}
	return dom;
}

var strokeWidths = [0.25, 0.5, 0.75, 1.0, 1.25, 1.5, 1.75, 2.0, 2.5, 3.0, 3.5, 4.0, 5.0];

function makeBoxes() {


	for (var i = 0; i < strokeWidths.length; i++) {
		makeBox(strokeWidths[i])
	}

}


function makeBox(strokeWidth) {
	makeBoxWithDimen(strokeWidth, 40, 40);
}

function makeBoxWithDimen(strokeWidth, height, width) {

	var box = makeDom('div', 'testBox');
	box.style.width = width + 'px';
	box.style.height = height + 'px';
	box.style.borderWidth = strokeWidth + 'px';

	box.textContent = strokeWidth + ' px';
	box.style.lineHeight = (height - 5) + 'px'

	mainDiv.appendChild(box);

}



