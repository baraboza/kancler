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
});