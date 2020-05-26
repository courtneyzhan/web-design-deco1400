$(document).ready( function() {
  // console.log("Hello");
  
	$('.section').on('scrollSpy:enter', function() {
    // console.log('enter:', $(this).attr('id'));
    $('.local-navigation #' + $(this).attr('id') + "-link").addClass("active");
	});

	$('.section').on('scrollSpy:exit', function() {
    // console.log('exit:', $(this).attr('id'));
    $('.local-navigation #' + $(this).attr('id') + "-link").removeClass("active");
	});

  $.scrollSpy($('.section'))
  
  
});