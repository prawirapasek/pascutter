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
 			maxheight: 132,
 			openToggle: '<span class="icon icon-down"></span>',
 			closeToggle: '<span class="icon icon-up"></span>'
 		},

 		methods = {

 			closeText: function() {

 			},

 			openText: function() {

 			},

 			toggleText: function() {

 			},

 			init: function(options) {

 				var o = $.extend(defaults, options);

 				return this.each(function(){

 					var el = $(this),
 						slideText = el.find('.excerpt-slide-down'),
 						textHeight = slideText.children().height();

 					if ( textHeight > o.maxHeight ) {
 						
 					} else {

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
	      $.error('Method ' + method + ' does not exist on jQuery.Text Down');
	    }
 	};

 })(jQuery)