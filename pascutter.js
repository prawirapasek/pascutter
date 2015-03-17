/*
 * pascutter v1.0.0 
 *
 * Copyright (c) 2015 Prawira Putra Pasek <pasek@egomedia-bali.com>
 * Licensed under the MIT license
 *
 */

 (function($){

 	$.fn.pascutter = function(method) {

 		var object = this,
 			$obj = $(object);

 		var defaults = {
 			speed: 700,
 			height: 132,
 			toggle : {
 				open : 'Open',
 				close : 'Close',
 				classes : ''
 			},
 			responsive: true,
 		},

		o = $.extend(defaults, method),

 		methods = {

 			init: function() {

 				return this.each(function(){
 					var obj = $(this);

 					obj.parent().append('<a href="javascript:;" class="toggle-text '+ o.toggle.classes +' open">'+ o.toggle.open +'</a>');
 					slide(obj);
 					if(o.responsive && o.responsive === true){
 						$(window).on('resize', function(){slide(obj);});
 					}
 					console.log(obj);
 				});

 			},

 			close: function(obj) {
 				obj.stop(true, true).animate({'max-height': o.height}, o.speed);
 			},

 			open: function(obj) {
 				var text = obj.children();
 				obj.stop(true, true).animate({'max-height': text.outerHeight()}, o.speed);
 			},

 			destroy: function() {
 				var par = $obj.parent();
 				par.off('click', 'toggle-text');
 				par.find('.toggle-text').remove();
 				$obj.children().removeAttr('style');
 			}
 			
 		};

 		var handler = function(obj) {
			var par = obj.parent();
			par.off('click', '.toggle-text');
			par.on('click', '.toggle-text', function(){
				var evt = $(this);
				if ( evt.hasClass('open') ) {
					methods.open(obj, o);
					evt.addClass('close').removeClass('open').html(o.toggle.close);
				} else {
					methods.close(obj, o);
					evt.addClass('open').removeClass('close').html(o.toggle.open);
				}
			});	
		};

		var slide = function(obj) {
			var text = obj.children(),
				par = obj.parent();

			if ( text.height() > o.height ) {
				$('.toggle-text').addClass('open').removeClass('close').html(o.toggle.open);
				methods.close(obj);
				handler(obj);
			} else {
				par.off('click', '.toggle-text');
				par.find('.toggle-text').remove();
			}

		};

 		if (methods[method]) {
	      	return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
	    } else if (typeof method === 'object' || !method ) {
	      	return methods.init.apply( this, arguments );
	    } else {
	      	$.error('Method ' + method + ' does not exist on jQuery Text Down');
	    }

 	};

 })(jQuery);