$(document).ready( function() {
  //
	$(".hamburger").click(function() {
		$(".sidebar").show();
		$(".heading h1").css("z-index", "-1");
		$(".event .date").css("z-index", "-1");
		// $(".heading").hide();
		$(".overlay").show();
		$(".overlay").click(function() {
			$(".sidebar").hide();
			$(".overlay").hide();
		});
	});
	
  $('.faq-icon').click(function() {
    console.log("Hello!!")
    $(this).parent().parent().parent().find('p').toggle(400, "swing", null);
    // $(this).css("color", "red");
    $(this).toggleClass("down")
    // $(this).toggleClass("fa-rotate-90");
  })
  
  // ScrollSpy for local navigation
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