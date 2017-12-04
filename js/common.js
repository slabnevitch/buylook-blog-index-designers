$(function() {

	$(window).scroll(function() {
		var $top = $('.header__top'),
				topHeight = $top.height(),
				$target = $('.header__bottom');

		if($(this).scrollTop() > topHeight){
				
				$target.addClass('header__bottom--abs');
		}else{
			$target.removeClass('header__bottom--abs');
		}
	});
		

	$(document).ready(function() {

		
		
		var $menu = $("#my-menu").mmenu({
			extensions: [ 'theme-dark', 'effect-menu-slide', 'pagedim-black'],
			navbar: {
				title: "Меню"
			},

			offCanvas: {
				position: "left"
			}
		});

		var $icon = $(".toggle-mnu"),
		api = $menu.data( "mmenu" );

		api.bind("open:start", function($panel){
			$icon.addClass('on');
			$('.header-menu--mobile').removeClass('hidden');
		});
		api.bind('close:finish', function() {
			$icon.removeClass('on');
			$('.header-menu--mobile').addClass('hidden');
		});

		$("#designer-products, #similar-products").owlCarousel({
			items: 6,
			loop: true,
			margin: 36,
			nav: true,
			navText: [],
			// autoplay: true,
			responsiveClass: true,
			responsive:{
				0:{
					items:1,
					nav:true,
					margin: 0
				},
				480:{
					items:1,
					nav:true
					
				},
				768:{
					items:3,
					nav:true
				},

				800:{
					items:4,
					nav:true
				},
				992:{
					items:5,
					nav:true,
					
				},
				1140:{
					items:6,
					nav:true,
					
				}
			}
		});

		$("#other-looks").owlCarousel({
			items: 3,
			loop: true,
			margin: 36,
			nav: true,
			// center: true,
			navText: [],
			onInitialized: callback,
		  onDragged: dragged,
		  onDrag: drag,
		  onTranslated: translated,
			autoplay: true,
			responsiveClass: true,
			smartSpeed: 500,
			responsive:{
				0:{
					items:1,
					nav:true
				},
				480:{
					items:1,
					nav:true
					

				},
				768:{
					items:3,
					nav:true,
					margin: 20
					
				},
				992:{
					items:3,
					nav:true,
					margin: 0
					
					
				},
				1140:{
					items:3,
					nav:true
					
				}
			}
		});

		function translated() {
		scaleItem();
		}
		function callback(){
			scaleItem();
		}
		function dragged(){
			scaleItem();
		}
		function drag(){
			scaleItem();
		}
		function scaleItem(){
			var items = $('#other-looks .owl-item.active'),
					width = document.body.clientWidth;
				
				
				$stageOuter = $('#objects-car .owl-stage-outer');
				
				if(width > 920){

							
					items.each(function(i, elem){
						var item = $(this);
						
						
							if(i == 1){
								item.addClass('owl-item-scalled');
								item.siblings().removeClass('owl-item-scalled');

								
							}
						
						
					});
				}else{
					
					items.each(function(i, elem){
						var item = $(this);
						item.removeClass('owl-item-scalled');
					
				});
			}
		}
	
		// Owl
		$('#car-arrivals').owlCarousel({
			items: 4,
			loop: true,
			nav: true,
			margin: 30,
			navText: [],
			smartSpeed: 500,
			responsiveClass: true,
			responsive:{
				0:{
					items:1,
					
				},
				360:{
					items: 1,
					margin:30
					
					
				},
				480:{
					items: 1,
					margin:0
					
					
				},

				650:{
					items:2,
					margin: 15
					
					
				},
				769:{
					items:3,
					margin: 15
					
				},

				1052:{
					items:4
					
					
				},
				1140:{
					// items:6,
					nav:true

					
				}
			}
		});

		// Owl
		$('#car-announcement').owlCarousel({
			items: 1,
			loop: true,
			nav: true,
			navText: [],
			margin: 15
		});

		$('#car-banner').owlCarousel({
			items: 1,
			loop: true,
			nav: false,
			navText: [],
			animateOut: 'fadeOut',
			animateIn: 'fadeIn',
			autoHeight: true,
			mouseDrag: false,
			smartSpeed: 500,
			onInitialized: carBannerInitialized
		});

		function carBannerInitialized(e) {
			
			$('#car-banner.owl-carousel .owl-dots').appendTo('.index-slider-nav');
		}
	// end of Owl

	// Tooltipster
	var tooltipCart = $('.tooltip-cart').tooltipster({
		contentCloning: true,
		trigger: 'click',
		interactive: true,
		functionPosition: function(instance, helper, position){
        position.side = 'bottom';

        var container = document.querySelector('.header__info-right'),
        	containerRight = container.getBoundingClientRect().right;
        var summ = position.coord.left + position.size.width,
        	difference = summ - containerRight;
      
        position.coord.top += 25,
        position.coord.left -= difference;
     
        return position;
    },
		functionReady: function() {
			setTimeout(function() {
				document.body.addEventListener('click', methodsTooltipListener);
				
					
			}, 300);

			if($('.tooltipster-base #tooltip-delivery_content').length !== 0 || $('.tooltipster-base .popup-sizes').length !== 0){
					$('.tooltipster-base').find('.tooltipster-arrow').css('display', 'none');
				}
			},
		
		functionAfter: function() {
			
		
				document.body.removeEventListener('click', methodsTooltipListener);

		}
		  
	});
	var tooltip = $('.tooltip').tooltipster({
		contentCloning: true,
		interactive: true,
		trigger: 'click',
		 functionPosition: function(instance, helper, position){
        
        
        
      
       if(position.coord.top < 0){
     
       }else{
       	
       }
       console.log(position.coord.top);

        return position;
    },
		functionReady: function() {
			setTimeout(function() {
				document.body.addEventListener('click', methodsTooltipListener);
				
			}, 300);

			if($('.tooltipster-base #tooltip-delivery_content').length !== 0 || $('.tooltipster-base .popup-sizes').length !== 0  ){
					
					$('.tooltipster-base').find('.tooltipster-arrow').css('display', 'none');
				}
			},
		
		functionAfter: function() {
			
		
				document.body.removeEventListener('click', methodsTooltipListener);

		}
		  
	});

	
	// $('#tooltip-delivery').click(function(e) {
	// 	$('#tooltip-delivery').tooltipster('open');
	// });
	
	// $('#tooltip-sizes').click(function(e) {
	// 	$('#tooltip-sizes').tooltipster('open');
	// });

	// $('.header__cart').click(function(e) {
	// 	$('#tooltip-cart').tooltipster('open');

	// });

	function cartTooltip(elem){

	}
	function methodsTooltipListener(e){
		console.log(e.target.className);
			 if(e.target.className === 'ico-close'){
			 	tooltip.tooltipster('close');
			 }

		 	// tooltip.tooltipster('close');
		 	// tooltipCart.tooltipster('close');

		e.stopPropagation();
	}

	// end of Tooltipster

	});

	// ikSelect

	$('.select-quantity').ikSelect({
			autoWidth: true,
			
			onShow: function (inst) {
				
				$('.ik_select_link_focus .ik_select_link_text').addClass('lk-opened');
			},
			onHide: function (inst) {
				$('.ik_select_link_focus .ik_select_link_text').removeClass('lk-opened');
			}
		});
	
	$('.select-color').ikSelect({
			
			dynamicWidth: true,
			customClass: 'color',
			ddCustomClass: 'color-dropdown',
			
			onShow: function (inst) {
				
				$('.ik_select_link_text').addClass('lk-opened');
			},
			onHide: function (inst) {
				$('.ik_select_link_text').removeClass('lk-opened');
			}
	});

	$('.select-size').ikSelect({

			customClass: 'size',
			ddCustomClass: 'size-dropdown',
			extraWidth: 30,
			
			onShow: function (inst) {
				
				$('.ik_select_link_text').addClass('size-opened');
			},
			onHide: function (inst) {
				$('.ik_select_link_text').removeClass('size-opened');
			}
	});

	$('.prod-select-quantity').ikSelect({
			
			dynamicWidth: true,
			customClass: 'quantity',
			ddCustomClass: 'quantity-dropdown',
			extraWidth: 30,
			
			onShow: function (inst) {
				
				$('.ik_select_link_text').addClass('quantity-opened');
			},
			onHide: function (inst) {
				$('.ik_select_link_text').removeClass('quantity-opened');
			},
			
	});

	$('.filter-select__color').ikSelect({

			dynamicWidth: true,
			customClass: 'select-color',
			ddCustomClass: 'select-color-dropdown',
			onShow: function (inst) {
				
				$('.ik_select_link_text').addClass('select-color-opened');
			},
			onHide: function (inst) {
				$('.ik_select_link_text').removeClass('select-color-opened');
			},
			
		});

	$('.filter-select__size').ikSelect({
			dynamicWidth: true,
			customClass: 'select-size',
			ddCustomClass: 'select-size-dropdown',
			onShow: function (inst) {
				
				$('.ik_select_link_text').addClass('select-size-opened');
			},
			onHide: function (inst) {
				$('.ik_select_link_text').removeClass('select-size-opened');
			},
			
		});

	$('.filter-select__range').ikSelect({
			
			dynamicWidth: true,
			customClass: 'select-range',
			ddCustomClass: 'select-range-dropdown',
			onShow: function (inst) {
				
				$('.ik_select_link_text').addClass('select-range-opened');
			},
			onHide: function (inst) {
				$('.ik_select_link_text').removeClass('select-range-opened');
			},
			
		});
	
	$('.look-parameters__unit-select select').ikSelect({
			dynamicWidth: true,
			customClass: 'look-parameters',
			ddCustomClass: 'look-parameters-dropdown',
			onShow: function (inst) {
				
				
			},
			onHide: function (inst) {
				
			},
			
		});
	
	// end of ikSelect

	$('.cart__tip-header').click(function(e) {
		e.preventDefault();
		var $parent = $(this).closest('.cart__tip'),
				$tipBody = $parent.find('.cart__tip-body'),
				$chevron = $parent.find('.cart__tip-chevron');
		$tipBody.stop(true, true).slideToggle(300);
		$parent.siblings().find('.cart__tip-body').slideUp(300);
		$parent.siblings()
					.find('.cart__tip-chevron')
					.removeClass('chevron-up');
		$chevron.toggleClass('chevron-up');
	});

	$('.socials-toggle').click(function(e) {
		e.preventDefault();
		$(this).toggleClass('socials-toggle--open')
				.parent()
				.find('.socials-list')
				.fadeToggle();
	});

	var cartItemRender = (function() {

		return {
			init: function() {
				
				cartItemRender.regListeners();
			},

			regListeners: function() {
				$('.cart__item-close').on('click', cartItemRender.closeButtonListener);
				$('.add-to-cart').on('click', cartItemRender.addButtonListener);
				$('.look-parameters__unit-top .ico-close').on('click', cartItemRender.looKContentCloseHandler);
			},

			closeButtonListener: function(e) {
				e.preventDefault();
				var $parent = $(this).closest('.cart__list'),
						$currentItem = $(this).closest('.cart__item');
						

				if(cartItemRender.closeConfirm()){
					$currentItem.remove();
				}else{
					return;
				}
			},

			looKContentCloseHandler: function(e) {
					var $list = $(this).closest('.acordeon-subitem'),
							$unit = $(this).closest('.look-parameters__unit');

					if(cartItemRender.closeConfirm()){
						$unit.remove();
					}else{
						return;
					}
			},
		

			addButtonListener: function(e) {
				var $cartCounter = $('.header__cart .header__cart-count');
						
				$cartCounter.text(+$cartCounter.text() + 1);
				

				$('#tooltip-cart').tooltipster('open');
				
				setTimeout(function() {
						$('#tooltip-cart').tooltipster('close');
				}, 3000)
			},

			closeConfirm: function() {
				var flag = confirm('Действительно хотите удалить?');
				return flag;
			}
		}
	})();
	cartItemRender.init();

	// Accordeon-----------------------------------
		var $handlers = $('.acordeon-link');
		$handlers.click(function(e) {
			e.preventDefault();
			console.log(e.target.className);
			var $currentItem = $(this).closest('.acordeon-item');
			if($currentItem.hasClass('acordeon-item-with-sublist')){
			
			$currentItem.find('.acordeon-sublist')
					.stop(true, true)
					.slideToggle();
			$currentItem.toggleClass('sidebar-menu__item--active');
			$currentItem.siblings()
						.removeClass('sidebar-menu__item--active')
						.find('.acordeon-sublist')
						.stop(true, true)
						.slideUp();
				
			$currentItem.find('.filter-link-bottom')
						.toggleClass('filter-link-bottom--active');
			$currentItem.siblings().find('.filter-link-bottom').removeClass('filter-link-bottom--active');
			
			}else{
				return;
			}
		});
	// end Accordeon-----------------------------------

	// To top-----------------------------------
		$('.to-top').click(function(){
			$('html, body').animate({scrollTop: 0}, 800);
		});
	// end -----------------------------------
	
	// Fotorama-----------------------------------------
		var fotorama = $('.fotorama').fotorama({
			thumbborderwidth: 0
		}).data('fotorama');

	//end Fotorama-----------------------------------------

});

