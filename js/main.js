
// Отправка заявки 
$(document).ready(function() {
	$('#form-mail').submit(function(event) { 
		event.preventDefault();
		$.ajax({
			type: "POST",
			url: "mailer/smart2.php",
			data: $(this).serialize()
		}).done(function() {
			$('.overlay').hide();
			$('.js-overlay-thank-you').fadeIn();
			$('#animate')[0].beginElement();
			$(this).find('input').val('');
			$('#form-mail').trigger('reset');
		});
		return false;
	});
});

// Закрыть попап «спасибо»
$('.js-close-thank-you').click(function() { // по клику на крестик
	$('.js-overlay-thank-you').fadeOut();
});

$(document).mouseup(function (e) { // по клику вне попапа
    var popup = $('.thankl');
    if (e.target!=popup[0]&&popup.has(e.target).length === 0){
        $('.js-overlay-thank-you').fadeOut();
    }
});

$(document).mouseup(function (e) { // по клику вне попапа
	var popup = $('.popup');
    if (e.target!=popup[0]&&popup.has(e.target).length === 0){
		$('.overlay').fadeOut();
    }
});

// Маска ввода номера телефона (плагин maskedinput)
$(function($){
	$('[name="number"]').mask("+7(999) 999-9999");
});

function show(){
	$('.overlay').fadeIn();
};
setTimeout(show,6000);

$(document).ready(function () {
	$('.call').on("click", function () {
		$('.overlay').fadeIn();
	});
	$('.popup-close').on("click", function () {
		$('.overlay').fadeOut();
	});
});

$(window).on('load', function () {
	$preloader = $('.loaderArea'),
		$preloader.delay(1).fadeOut('slow');
});
