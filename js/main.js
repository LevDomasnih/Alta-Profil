'use strict';

var window_w = $(window).innerWidth();


$(window).on('load', function() {
	/*------------------
		Preloder
	--------------------*/
	$(".loader").fadeOut();
	$("#preloder").delay(400).fadeOut("slow");

});


(function($) {

	/*------------------
		Navigation
	--------------------*/
	$('.nav-switch').on('click', function(event) {
		$('.nav-menu').slideToggle(400);
		event.preventDefault();
	});

	/*------------------
		Background set
	--------------------*/
	$('.set-bg').each(function() {
		var bg = $(this).data('setbg');
		$(this).css('background-image', 'url(' + bg + ')');
	});

	/*------------------
		Hero Slider
	--------------------*/
	var hero_s = $(".hero-slider");
    hero_s.owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        items: 1,
        dots: false,
        animateOut: 'fadeOutRight',
    	animateIn: 'fadeInLeft',
        navText: ['<i class="fa fa-long-arrow-left"></i> НАЗАД', 'ВПЕРЕД<i class="fa fa-long-arrow-right"></i>'],
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true,
        mouseDrag: false,
        onInitialized: function() {
        	var a = this.items().length;
        	if(a < 10){
            	$("#snh-1").html("<span>01" + " / </span>0" + a);
       		} else{
       			$("#snh-1").html("<span>01" + " / </span>" + a);
       		}
        }
    }).on("changed.owl.carousel", function(a) {
        var b = --a.item.index, a = a.item.count;
        if(a < 10){
        	$("#snh-1").html("<span>0" + ( 1 > b ? b + a : b > a ? b - a : b) + " / </span>0" + a);
    	} else{
    		$("#snh-1").html("<span> "+ (1 > b ? b + a : b > a ? b - a : b) + " / </span>" + a);
    	}
    });

	/*------------------
		Projects Slider
	--------------------*/
	var project = $('#projects-carousel').owlCarousel({
		nav: true,
		loop: true,
		margin:20,
		navText: ['<i class="fa fa-long-arrow-left"></i> НАЗАД', 'ВПЕРЕД<i class="fa fa-long-arrow-right"></i>'],
		responsive:{
			0:{
				items:1,
				margin: 0
			},
			600:{
				items:2
			},
			800:{
				items:2
			},
			992:{
				items:3
			},
			1200:{
				items:4
			},
		}
	});

	/* animate filter */
	var owlAnimateFilter = function(even) {
		$(this)
		.addClass('__loading')
		.delay(70 * $(this).parent().index())
		.queue(function() {
			$(this).dequeue().removeClass('__loading')
		});
	}

	/* Projects filter */
	$('.projects-filter-nav li').on('click', function(e) {
		var filter_data = $(this).data('filter');

		/* return if current */
		if($(this).hasClass('btn-active')) return;

		/* active current */
		$(this).addClass('btn-active').siblings().removeClass('btn-active');

		/* Filter */
		project.owlFilter(filter_data, function(_owl) {
			$(_owl).find('.single-project').each(owlAnimateFilter);
		});
	});

	/*------------------
		Review Slider
	--------------------*/
	var test_s = $("#test-slider");
    test_s.owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        items: 1,
        dots: false,
        autoplay: false,
        onInitialized: function() {
        	var a = this.items().length;
        	if(a < 10){
            	$("#snh-2").html("<span>01" + "/ </span>0" + a);
       		} else{
       			$("#snh-2").html("<span>01" + "/ </span>" + a);
       		}
        }
    }).on("changed.owl.carousel", function(a) {
        var b = --a.item.index, a = a.item.count;
        if(a < 10){
        	$("#snh-2").html("<span>0" + ( 1 > b ? b + a : b > a ? b - a : b) + "/ </span>0" + a);
    	} else{
    		$("#snh-2").html("<span> "+ (1 > b ? b + a : b > a ? b - a : b) + "/ </span>" + a);
    	}
    });



})(jQuery);


/*------------------
	Sayding
--------------------*/
$(function(){
	$('.sayding-first').hover(
		function(){
			$('.sayding-main').css('backgroundImage', 'url(img/forItem/sayding1.jpg)');
		},
		function() {
			$('.sayding-main').css('backgroundImage', 'url(img/forItem/sayding.jpg)')
		}
	)
	$('.sayding-second').hover(
		function(){
			$('.sayding-main').css('backgroundImage', 'url(img/forItem/sayding2.jpg)');
		},
		function() {
			$('.sayding-main').css('backgroundImage', 'url(img/forItem/sayding.jpg)')
		}
	)
	$('.sayding-third').hover(
		function(){
			$('.sayding-main').css('backgroundImage', 'url(img/forItem/sayding3.jpg)');
		},
		function() {
			$('.sayding-main').css('backgroundImage', 'url(img/forItem/sayding.jpg)')
		}
	)
	$('.sayding-four').hover(
		function(){
			$('.sayding-main').css('backgroundImage', 'url(img/forItem/sayding4.jpg)');
		},
		function() {
			$('.sayding-main').css('backgroundImage', 'url(img/forItem/sayding.jpg)')
		}
	)
	$('.sayding-five').hover(
		function(){
			$('.sayding-main').css('backgroundImage', 'url(img/forItem/sayding5.jpg)');
		},
		function() {
			$('.sayding-main').css('backgroundImage', 'url(img/forItem/sayding.jpg)')
		}
	)
	$('.sayding-six').hover(
		function(){
			$('.sayding-main').css('backgroundImage', 'url(img/forItem/sayding6.jpg)');
		},
		function() {
			$('.sayding-main').css('backgroundImage', 'url(img/forItem/sayding.jpg)')
		}
	)
});

/*------------------
	Front Panels
--------------------*/
$(function(){
	$('.fp-first').hover(
		function(){
			$('.front-panels-main').css('backgroundImage', 'url(img/front-panels/front-panel1.jpg)');
		},
		function() {
			$('.front-panels-main').css('backgroundImage', 'url(img/front-panels/front-panels-main.jpg)')
		}
	)
	$('.fp-second').hover(
		function(){
			$('.front-panels-main').css('backgroundImage', 'url(img/front-panels/front-panel2.jpg)');
		},
		function() {
			$('.front-panels-main').css('backgroundImage', 'url(img/front-panels/front-panels-main.jpg)')
		}
	)
	$('.fp-third').hover(
		function(){
			$('.front-panels-main').css('backgroundImage', 'url(img/front-panels/front-panel3.jpg)');
		},
		function() {
			$('.front-panels-main').css('backgroundImage', 'url(img/front-panels/front-panels-main.jpg)')
		}
	)
	$('.fp-four').hover(
		function(){
			$('.front-panels-main').css('backgroundImage', 'url(img/front-panels/front-panel4.jpg)');
		},
		function() {
			$('.front-panels-main').css('backgroundImage', 'url(img/front-panels/front-panels-main.jpg)')
		}
	)
	$('.fp-five').hover(
		function(){
			$('.front-panels-main').css('backgroundImage', 'url(img/front-panels/front-panel5.jpg)');
		},
		function() {
			$('.front-panels-main').css('backgroundImage', 'url(img/front-panels/front-panels-main.jpg)')
		}
	)
	$('.fp-six').hover(
		function(){
			$('.front-panels-main').css('backgroundImage', 'url(img/front-panels/front-panel6.jpg)');
		},
		function() {
			$('.front-panels-main').css('backgroundImage', 'url(img/front-panels/front-panels-main.jpg)')
		}
	)
});

/*------------------
	Gaz Resh
--------------------*/
$(function(){
	$('.gr-first').hover(
		function(){
			$('.gaz-resh-main').css('backgroundImage', 'url(img/gaz-resh/gaz-resh1.jpg)');
		},
		function() {
			$('.gaz-resh-main').css('backgroundImage', 'url(img/gaz-resh/gaz-resh-main.jpg)')
		}
	)
	$('.gr-second').hover(
		function(){
			$('.gaz-resh-main').css('backgroundImage', 'url(img/gaz-resh/gaz-resh2.jpg)');
		},
		function() {
			$('.gaz-resh-main').css('backgroundImage', 'url(img/gaz-resh/gaz-resh-main.jpg)')
		}
	)
	$('.gr-third').hover(
		function(){
			$('.gaz-resh-main').css('backgroundImage', 'url(img/gaz-resh/gaz-resh3.jpg)');
		},
		function() {
			$('.gaz-resh-main').css('backgroundImage', 'url(img/gaz-resh/gaz-resh-main.jpg)')
		}
	)
	$('.gr-four').hover(
		function(){
			$('.gaz-resh-main').css('backgroundImage', 'url(img/gaz-resh/gaz-resh4.jpg)');
		},
		function() {
			$('.gaz-resh-main').css('backgroundImage', 'url(img/gaz-resh/gaz-resh-main.jpg)')
		}
	)
	$('.gr-five').hover(
		function(){
			$('.gaz-resh-main').css('backgroundImage', 'url(img/gaz-resh/gaz-resh5.jpg)');
		},
		function() {
			$('.gaz-resh-main').css('backgroundImage', 'url(img/gaz-resh/gaz-resh-main.jpg)')
		}
	)
	$('.gr-six').hover(
		function(){
			$('.gaz-resh-main').css('backgroundImage', 'url(img/gaz-resh/gaz-resh6.jpg)');
		},
		function() {
			$('.gaz-resh-main').css('backgroundImage', 'url(img/gaz-resh/gaz-resh-main.jpg)')
		}
	)
});

/*------------------
	Alta Decor
--------------------*/
$(function(){
	$('.ad-firsts').hover(
		function(){
			$('.alta-decor-main').css('backgroundImage', 'url(img/alta-decor/alta-decor1.png)');
		},
		function() {
			$('.alta-decor-main').css('backgroundImage', 'url(img/alta-decor/alta-decor-main.png)')
		}
	)
	$('.ad-second').hover(
		function(){
			$('.alta-decor-main').css('backgroundImage', 'url(img/alta-decor/alta-decor2.jpg)');
		},
		function() {
			$('.alta-decor-main').css('backgroundImage', 'url(img/alta-decor/alta-decor-main.png)')
		}
	)
	$('.ad-third').hover(
		function(){
			$('.alta-decor-main').css('backgroundImage', 'url(img/alta-decor/alta-decor3.png)');
		},
		function() {
			$('.alta-decor-main').css('backgroundImage', 'url(img/alta-decor/alta-decor-main.png)')
		}
	)
	$('.ad-four').hover(
		function(){
			$('.alta-decor-main').css('backgroundImage', 'url(img/alta-decor/alta-decor4.jpg)');
		},
		function() {
			$('.alta-decor-main').css('backgroundImage', 'url(img/alta-decor/alta-decor-main.png)')
		}
	)
	$('.ad-five').hover(
		function(){
			$('.alta-decor-main').css('backgroundImage', 'url(img/alta-decor/alta-decor5.png)');
		},
		function() {
			$('.alta-decor-main').css('backgroundImage', 'url(img/alta-decor/alta-decor-main.png)')
		}
	)
	$('.ad-six').hover(
		function(){
			$('.alta-decor-main').css('backgroundImage', 'url(img/alta-decor/alta-decor6.png)');
		},
		function() {
			$('.alta-decor-main').css('backgroundImage', 'url(img/alta-decor/alta-decor-main.png)')
		}
	)
});

/*------------------
	Vodostok
--------------------*/
$(function(){
	$('.vod-first').hover(
		function(){
			$('.vodostok-main').css('backgroundImage', 'url(img/vodostok/vodostok1.png)');
		},
		function() {
			$('.vodostok-main').css('backgroundImage', 'url(img/vodostok/vodostok-main.png)')
		}
	)
	$('.vod-second').hover(
		function(){
			$('.vodostok-main').css('backgroundImage', 'url(img/vodostok/vodostok2.png)');
		},
		function() {
			$('.vodostok-main').css('backgroundImage', 'url(img/vodostok/vodostok-main.png)')
		}
	)
	$('.vod-third').hover(
		function(){
			$('.vodostok-main').css('backgroundImage', 'url(img/vodostok/vodostok3.png)');
		},
		function() {
			$('.vodostok-main').css('backgroundImage', 'url(img/vodostok/vodostok-main.png)')
		}
	)
	$('.vod-four').hover(
		function(){
			$('.vodostok-main').css('backgroundImage', 'url(img/vodostok/vodostok4.png)');
		},
		function() {
			$('.vodostok-main').css('backgroundImage', 'url(img/vodostok/vodostok-main.png)')
		}
	)
	$('.vod-five').hover(
		function(){
			$('.vodostok-main').css('backgroundImage', 'url(img/vodostok/vodostok5.png)');
		},
		function() {
			$('.vodostok-main').css('backgroundImage', 'url(img/vodostok/vodostok-main.png)')
		}
	)
});