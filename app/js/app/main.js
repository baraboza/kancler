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

	document.querySelectorAll('.main-reviews').forEach(function(parent) {
		const swiper = new Swiper(parent.querySelector('.swiper-container'), {
			threshold: 5,
			loop: true,
			autoHeight: true,

			navigation: {
				prevEl: parent.querySelector('.main-reviews__prev'),
				nextEl: parent.querySelector('.main-reviews__next'),
			},

			slidesPerView: 1,
			spaceBetween: 20,
		});
	});

	document.querySelectorAll('.main-accreds').forEach(function(parent) {
		const swiper = new Swiper(parent.querySelector('.swiper-container'), {
			threshold: 5,

			navigation: {
				prevEl: parent.querySelector('.main-accreds__prev'),
				nextEl: parent.querySelector('.main-accreds__next'),
			},

			slidesPerView: 'auto',
			spaceBetween: 30,

			breakpoints: {
				768: {
					spaceBetween: 75,
				},
			}
		});
	});
});