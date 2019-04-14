// JavaScript Document
(function() {

	// just place a div at top right
	var div = document.createElement('div');
	div.style.position = 'fixed';
	div.style.alignmentBaseline
	div.textContent = 'Injected!';
	document.body.appendChild(div);

	alert('inserted self... ');

})();