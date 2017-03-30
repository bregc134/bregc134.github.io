$('.nav-item').click(function() {
	var button_name = $(this).data('button');

	console.log(button_name);
	$('.content').attr('class', 'column content');
	$('.content').addClass(button_name);

	$('.nav-item').removeClass('active');
	$(this).addClass('active');

	if(button_name == 'beyonce'){
		$('.slay').removeClass('hide');
		$ ('audio')[0].play();
		$(this).removeClass('active');
	}

});


$('.close').click(function(){
	$('.slay').addClass('hide');

});

























