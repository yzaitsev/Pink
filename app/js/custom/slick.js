$(document).ready(function() {


	/* Slick http://kenwheeler.github.io/slick/
	======================================== */


	  $('.js-rewiews__wrap').slick({

		  	arrows: true,
		  	dots: false,

			responsive: [
			    {
			      breakpoint: 1200,
			      settings: {
			        arrows: false,
			        dots: true
			      }
			    }
			]		

	  });


	
	// Slick slider for section Price

	// When reload browser page active slick

	$('.js-price__slick-wrap').slick({
 	  	arrows: false,
	  	dots: true,
	  	initialSlide: 1,
	  	infinite: false,
        centerMode: true,
  	 	centerPadding: '20px',
  	 	dotsClass: "slick-dots slick-dots--price",
  	 	mobileFirst: true,
 	 	
 	 	responsive: [{
	      breakpoint: 699,
	      settings: "unslick"
    	}]
	});


	// When resize viewport
	$(window).resize(function() {

		var viewport = $(window).innerWidth();

			if (viewport <= 699) {

				var slick = $(".js-price__slick-wrap");

				if (slick.hasClass("slick-initialized")) {
					
					return false;

				} else {
					$('.js-price__slick-wrap').slick({
				 	  	arrows: false,
					  	dots: true,
					  	initialSlide: 1,
					  	infinite: false,
				        centerMode: true,
				  	 	centerPadding: '20px',
				  	 	dotsClass: "slick-dots slick-dots--price"
					});
				}

			} else {
				$('.js-price__slick-wrap').slick('unslick');
			}

	});

	
});