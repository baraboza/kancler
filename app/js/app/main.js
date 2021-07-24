import Swiper from "swiper/bundle";

$(function() {
	document.querySelectorAll('.main-offers').forEach(function(parent) {
		const slidesPerView = $(parent).data('slides-per-view');

		const swiper = new Swiper(parent.querySelector('.swiper-container'), {
			threshold: 5,

			navigation: {
				prevEl: parent.querySelector('.main-offers__prev'),
				nextEl: parent.querySelector('.main-offers__next'),
			},

			slidesPerView: 1,
			spaceBetween: 20,

			breakpoints: {
				768: {
					slidesPerView: slidesPerView === 4 ? 2 : 1
				},

				992: {
					slidesPerView: slidesPerView === 4 ? 3 : 2
				},

				1280: {
					slidesPerView: slidesPerView,
				}
			}
		});
	});
});