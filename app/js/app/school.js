import Swiper from "swiper/bundle";

$(function() {

	document.querySelectorAll('.school-main').forEach(function(parent) {
		const swiperSmall = new Swiper(parent.querySelector('.school-main__small-slider'), {
			threshold: 5,

			slidesPerView: 5,
			spaceBetween: 4,
			watchSlidesVisibility: true,
			watchSlidesProgress: true,
		});

		const swiperBig = new Swiper(parent.querySelector('.school-main__big-slider'), {
			threshold: 5,

			navigation: {
				prevEl: parent.querySelector('.school-main__prev'),
				nextEl: parent.querySelector('.school-main__next'),
			},

			slidesPerView: 1,

			thumbs: {
				swiper: swiperSmall,
			},
		});
	});
});