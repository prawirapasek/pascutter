/*
 * Text Down v1.0.0 
 *
 * Copyright (c) 2015 Prawira Putra Pasek <pasek@egomedia-bali.com>
 * Licensed under the MIT license
 * 
 */

 (function($){

 	var defaults = {
 			speed: 500,
 			maxHeight: 132,
 			openToggleText: 'Open',
 			closeToggleText: 'Close',
 			responsive: true,
 			toggleClass: ''
 		},

 		methods = {

 			closeText: function(el, o) {
 				el.stop(true, true).animate({'max-height': o.maxHeight}, o.speed);
 			},

 			openText: function(el, o) {
 				var text = el.children();
 				el.stop(true, true).animate({'max-height': text.height()}, o.speed);
 			},

 			toggleText: function(el, o) {
 				var par = el.parent();
 				par.off('click', '.toggle-text');
				par.on('click', '.toggle-text', function(){
					var evt = $(this);
					if ( evt.hasClass('open') ) {
						methods.openText(el, o);
						evt.toggleClass('open close').html(o.closeToggleText);
					} else {
						methods.closeText(el, o);
						evt.toggleClass('open close').html(o.openToggleText);
					}
				});	
 			},

 			slideText: function(el, o) {
 				var text = el.children(),
 					par = el.parent();

 				if ( text.height() > o.maxHeight ) {
 					methods.closeText(el, o);
 					methods.toggleText(el, o);
				} else {
					$('.toggle-text').remove();
					par.off('click', '.toggle-text');
				}

 			},

 			init: function(options) {

 				var o = $.extend(defaults, options);

 				return this.each(function(){
 					var el = $(this);

 					el.parent().append('<a href="javascript:;" class="toggle-text '+ o.toggleClass +' open">'+ o.openToggleText +'</a>');
 					methods.slideText(el, o);
 					if(o.responsive && o.responsive === true){
 						$(window).on('resize', function(){methods.slideText(el, o);});
 					}
 				});

 			}
 			
 		};

 	$.fn.textDown = function(method) {
 		if (methods[method]) {
	      	return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
	    } else if (typeof method === 'object' || !method ) {
	      	return methods.init.apply( this, arguments );
	    } else {
	      	$.error('Method ' + method + ' does not exist on jQuery Text Down');
	    }

 	};

 })(jQuery);