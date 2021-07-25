import Select from './modules/Select';

$(function() {
	
	$('.js-scroll-link').click(function(e) {
		e.preventDefault();
		$('html, body').animate({
			scrollTop: $( $(this).attr('href') ).offset().top
		}, 1000);
	});

	$('.select').each((i, el) => new Select(el));
});