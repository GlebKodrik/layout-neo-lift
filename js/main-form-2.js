// Отправка заявки 
$(document).ready(function() {
	$('#form').submit(function(event) { 
		event.preventDefault();
		$.ajax({
			type: "POST",
			url: "mailer/smart.php",
			data: $(this).serialize()
		}).done(function() {
			$('.content').hide();
			$('.js-overlay-thank-you').fadeIn();
			$(this).find('input').val('');
			$('#form').trigger('reset');
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



