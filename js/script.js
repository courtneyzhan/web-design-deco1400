$(document).ready( function() {
  
  var difficulty = "";
  
  $("form#activity-form").submit(function() {
    event.preventDefault();
    var userName = $("input[name=username]").val();
    console.log(userName);
    // $(this).toggle();
    $("form#details").show();
    
    $(this).html("Welcome, " + userName + "! Your ID is " + generateID());
    $(this).css("text-align", "right")
  });
  
  $("form#details").submit(function() {
    event.preventDefault();
    var radios = document.getElementsByName('difficulty');

    for (var i = 0, length = radios.length; i < length; i++) {
      if (radios[i].checked) {
        // do whatever you want with the checked radio
        difficulty = radios[i].value;
        // only one radio can be logically checked, don't check the rest
        break;
      }
    }
    
    $(this).toggle();
    $("form#questions-" + difficulty).show();
  });
  
  $("#teams").click(function() {
    $("#teamid, #teamid1, #teamid2, #teamid3").toggle();
  })
  
  $("form#questions-hard, form#questions-easy").submit(function() {
    event.preventDefault();
      // answer is true
    var questionNumber = 1;
    questionAnswers(1);
    questionAnswers(2);
    
  });
  
  
  // Hamburger icon on mobile size
  showHamburger();
	window.onresize = function(event) {
		showHamburger();
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
  
  // submit Contact Us inquiry form
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

function questionAnswers(questionNumber) {
  var answers = ["left", "fish"]
  var radios = document.getElementsByName("response" + questionNumber);

  for (var i = 0, length = radios.length; i < length; i++) {
    if (radios[i].checked) {
      console.log(radios[i].value);
      if ((radios[i].value) == answers[questionNumber - 1]) {
        $("form#questions-easy span.feedback" + questionNumber).html("Correct!");
        $("form#questions-easy span.feedback" + questionNumber).css("color", "green");
        return true;
      } else {
        $("form#questions-easy span.feedback" + questionNumber).html("Incorrect, try again!");
        $("form#questions-easy span.feedback" + questionNumber).css("color", "red");
        return true;
      }
      break;
    }
  }
};

function showHamburger() {
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
  
}


// https://stackoverflow.com/a/1349426
function generateID() {
  var result = "";
  var characters ="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  for (var i = 0; i < 5; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}