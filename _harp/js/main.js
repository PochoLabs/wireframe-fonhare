$(document).ready(function(){
	$('.carousel').carousel({
        interval: 5000 //changes the speed
    });

	var domain = $(location).attr('hostname');

	if(domain === 'localhost'){
		$('.serving').each(function(){
			var newLink = $(this).attr('href').slice(18);
			$(this).attr('href', newLink);
		});

		$('.navbar-brand').each(function(){
			var newLink = $(this).attr('href').slice(18);
			$(this).attr('href', newLink);
		});
	}

});
