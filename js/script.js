$(document).ready( function() {
  
  $("form#activity-form").submit(function() {
    event.preventDefault();
    var userName = $("input[name=username]").val();
    console.log(userName);
    // $(this).toggle();
    $("form#details").show();
    $(this).html("Welcome, " + userName);
  });
  
  $("form#details").submit(function() {
    event.preventDefault();
    $(this).toggle();
  })
  
  // Hamburger icon on mobile size
	var windowWidth = window.innerWidth;
	if (windowWidth > 700) {
		$(".sidebar").show();
		$(".overlay").hide();
	} else {
		$(".sidebar").hide();
		
		$(".hamburger").click(function() {
      console.log("Hello");
			$(".sidebar").show();
			$(".heading h1").css("z-index", "-1");
			$(".event .date").css("z-index", "-1");
			$(".overlay").show();
			$(".overlay").click(function() {
				$(".sidebar").hide();
				$(".overlay").hide();
			});
		});
	};
  
	window.onresize = function(event) {
		var windowWidth = window.innerWidth;
		console.log(windowWidth);
		if (windowWidth > 700) {
			$(".sidebar").show();
			$(".overlay").hide();
		} else {
			$(".sidebar").hide();
			
			$(".hamburger").click(function() {
        console.log("Hello");
				$(".sidebar").show();
				$(".heading h1").css("z-index", "-1");
				$(".event .date").css("z-index", "-1");
				$(".overlay").show();
				$(".overlay").click(function() {
					$(".sidebar").hide();
					$(".overlay").hide();
				});
			});
		};
	};

	
	// faq icon drop down
  $('.faq-icon').click(function() {
    console.log("Hello!!")
    $(this).parent().parent().parent().find('p').toggle(400, "swing", null);
    // $(this).css("color", "red");
    $(this).toggleClass("down")
    // $(this).toggleClass("fa-rotate-90");
  });
  
  $('.faq-header').click(function() {
    console.log("Hello!!")
    $(this).parent().find('p').toggle(400, "swing", null);
    // $(this).css("color", "red");
    $(this).toggleClass("down")
    // $(this).toggleClass("fa-rotate-90");
  });
  
  // submit inquiry form
  $("#inquiry-form").submit(function() {
	  event.preventDefault();
	  $("#inquiry-form label, #inquiry-form input, #inquiry-form div").hide();
	  $("span#submission").html("Thanks for your submission, " + $("input[name=firstName]").val() + ". Our team will get back to you as soon as possible.");
	  $("button").attr("disabled", true);
	  $("button").html("Successfully submitted")
  });
  
  
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