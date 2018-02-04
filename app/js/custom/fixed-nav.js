$(document).ready(function() {


$(document).on("scroll", function(event) {
	
	var viewport = $(window).innerWidth();

	if (viewport >= 1200) {

		var distanceScroll		= $(this).scrollTop();

		var mainNav 			= $(".js-menu");
		var mainNavHeight 		= $(".js-menu").innerHeight();
		var pageHeader  		= $(".page-header");
		var pageHeaderHeight 	= $(".page-header").innerHeight();		

		if (distanceScroll > pageHeaderHeight + 70) {
			mainNav.addClass("js-menu__fixed");
			$(".page-header__inner").css("paddingTop", mainNavHeight);
			
			// Change height in wrap nav menu
			$(".menu__wrap-desctop").css("minHeight", 70);
			$(".js-menu__link--main").attr("href", "#js-page-header");

		} else {			
			mainNav.removeClass("js-menu__fixed");
			$(".page-header__inner").removeAttr("style");
			$(".menu__wrap-desctop").removeAttr("style");
			$(".js-menu__link--main").removeAttr("href");
		}

	}

});


});