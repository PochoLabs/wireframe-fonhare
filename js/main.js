$(document).ready(function(){
	$('.carousel').carousel({
        interval: 5000 //changes the speed
    });

	// for test hosting
	var domain = $(location).attr('hostname');
	if(domain === 'localhost'){
		$('a.serving').each(function(){
			var newLink = $(this).attr('href').slice(8);
			$(this).attr('href', newLink);
		});
	}
});
