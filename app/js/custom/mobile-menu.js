;(function() {


var menu = document.querySelector(".js-menu");
	menu.classList.remove("js-menu--no-js");

var toggle = document.querySelector(".js-menu__toggle");
	toggle.addEventListener("click", setMenuView);



function setMenuView() {

	menu.classList.toggle("js-menu--opened");
	toggle.classList.toggle("js-menu__toggle--closed");
	toggle.classList.toggle("js-menu__toggle--opened");
	
}



})();