$(document).ready(function() {

/* Scroll to the page block
============================*/

$(".menu__link").on("click", function(event) {

	event.preventDefault();

	var currentBlock = $(this).attr("href");
	var currentBlockHeight = $(currentBlock).offset().top;

	$("html, body").animate({
		scrollTop: currentBlockHeight - 20
	}, 800);

});


	
});