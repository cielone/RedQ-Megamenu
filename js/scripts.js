(function($) {
	"use strict";

    var shrinkHeader = 300;


    // $('#header').next().html('<div style="height: 103px"></div>');
    var shrink = $('#header').next();

    	shrink.css('margin-top', 103);

    // $('.shrinkHeader').css('margin-top', 103);

    $(window).scroll(function() {
        var scroll = getCurrentScroll();
        if (scroll >= shrinkHeader) {
            $('.header').addClass('shrink');
        } else {
            $('.header').removeClass('shrink');

        }
    });

    function getCurrentScroll() {
        return window.pageYOffset || document.documentElement.scrollTop;
    }
})(jQuery);

(function($) {
	"use strict";

	var easing = 'jswing';

	var RedQ = {

		redQ_init : function() {
			RedQ.redQ_nav_hover();
		},

		// redQ_nav_hover : function() {
		// 	$('.dropdown').on('mouseenter', function() {
		// 		var self = $(this);

		// 		self.find('.dropdown-menu').stop().slideDown(300, easing);
		// 	});

		// 	$('.dropdown').on('mouseleave', function() {
		// 		var self = $(this);

		// 		self.find('.dropdown-menu').stop().slideUp(300, easing);
		// 	});
		// },


	};

	RedQ.redQ_init();

})(jQuery);