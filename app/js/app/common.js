import Select from './modules/Select';
import Swiper from "swiper/bundle";

$(function() {
	
	$('.js-scroll-link').click(function(e) {
		e.preventDefault();
		$('html, body').animate({
			scrollTop: $( $(this).attr('href') ).offset().top
		}, 1000);
	});

	$('.select').each((i, el) => new Select(el));

	document.querySelectorAll('.reviews').forEach(function(parent) {
		const swiper = new Swiper(parent.querySelector('.swiper-container'), {
			threshold: 5,
			loop: true,
			autoHeight: true,

			navigation: {
				prevEl: parent.querySelector('.reviews__prev'),
				nextEl: parent.querySelector('.reviews__next'),
			},

			slidesPerView: 1,
			spaceBetween: 20,
		});
	});

	$('.spoilers__item-head').click(function() {
		$(this).toggleClass('--active');
		$(this).next().slideToggle(300);
	});

	$('.header__toggle').click(function() {
		$('.header__nav').slideToggle();
	});

	$('.courses-filter__button-grid-cols').click(function() {
		if ($(this).hasClass('--active')) return;

		$('.courses-filter__button-grid-rows').removeClass('--active');
		$(this).addClass('--active');

		$('.schools')
			.hide()
			.removeClass('schools--rows')
			.fadeIn(300);
	});

	$('.courses-filter__button-grid-rows').click(function() {
		if ($(this).hasClass('--active')) return;

		$('.courses-filter__button-grid-cols').removeClass('--active');
		$(this).addClass('--active');

		$('.schools')
			.hide()
			.addClass('schools--rows')
			.fadeIn(300);
	});


	$('.js-tabs-wrap').each(function(i, el) {
		const 
			buttons = $(el).find('.js-tabs-button'),
			contents = $(el).find('.js-tabs-content');

		buttons.eq(0).addClass('--active');
		contents.eq(0).fadeIn(300);

		buttons.click(function(e) {
			e.preventDefault();
			if ($(this).hasClass('--active')) return;

			buttons.removeClass('--active');
			contents.hide();

			$(this).addClass('--active');
			$($(this).attr('href')).fadeIn(300);
		});
	});
});