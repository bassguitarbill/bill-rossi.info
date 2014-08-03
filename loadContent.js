$(document).ready(function() {
	$('#logo').load('svg.html');
	
	
	/* Quotes */
	$.getJSON('quotes.json', function(quotes) {
		$('#quote').html(quotes[Math.floor(Math.random() * quotes.length)]);
	});
});