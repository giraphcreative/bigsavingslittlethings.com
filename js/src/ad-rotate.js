

$(function(){

	$(".ad > div:gt(0)").hide();

	setInterval( function(){
		$('.ad > div:first')
			.hide()
			.next()
			.show()
			.end()
			.appendTo('.ad');
		console.log('rotate');
	}, 10000);
	
});

