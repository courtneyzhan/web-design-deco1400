$(document).ready( function() {
  
  var difficulty = "";
  var teams = false;
  var id = generateID();
  var userName = "";
  var bannerMessage = "";
  var newBannerMessage;
  var darkMode = false;
  
  $("#container").simpleCalendar();

  
  $("form#activity-form").submit(function() {
    event.preventDefault();
    userName = $("input[name=username]").val();
    console.log(userName);
    // $(this).toggle();
    $("form#details").show();
    
    bannerMessage = "Welcome, " + userName + "! Your ID is " + id + "."
    $(this).html(bannerMessage);
    $(this).css("text-align", "right");
    $(this).css("padding-bottom", "0px");
    
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
    if (teams) {
      var member1 = $("#teamid1").val();
      var member2 = $("#teamid2").val();
      var member3 = $("#teamid3").val();
      if (member1 != "" || member2 != "" || member3 != "" ) {
        newBannerMessage += " Team members are: ";
      }
      if (member1 != "") {
        newBannerMessage += member1;
      }
      if (member2 != "") {
        newBannerMessage += ", " + member2;
      }
      if (member2 != "") {
        newBannerMessage += ", " + member3;
      }
    }
    $("form#activity-form").html(newBannerMessage);
  });
  
  $("#teams").click(function() {
    $("#teamid, #teamid1, #teamid2, #teamid3").toggle();
    teams = !teams;
    newBannerMessage = bannerMessage;
  });
  
  $("form#questions-hard, form#questions-easy").submit(function() {
    var responded = true;
    event.preventDefault();
      // answer is true
    var questionNumber = 1;
    responded &= questionAnswers(1, difficulty);
    responded &= questionAnswers(2, difficulty);
    responded &= questionAnswers(3, difficulty);
    if (responded) {
      console.log("Complete");
      // $(this).hide();
      $("div#finish-quiz").show();
      $("button").attr("disabled", true);
      $("span#name").html(userName)
      if (teams == true) {
        $("#team-notice").show();
      }
    }
    
  });
  
  $("form#booking-form").submit(function() {
    event.preventDefault();
    $(this).hide();
    $("div.notice").show();
  });
  
  $("#dark-mode-button").click(function() {
    $("body").toggleClass("dark-mode");
    $("footer").css("color", "black");
  })
  
  // Hamburger icon on mobile size
  showHamburger();
	window.onresize = function(event) {
		showHamburger();
	};

	
	// faq icon drop down
  $('.faq-icon').click(function() {
    $(this).parent().parent().parent().find('p').toggle(400, "swing", null);
    // $(this).css("color", "red");
    $(this).toggleClass("down");
    // $(this).toggleClass("fa-rotate-90");
  });
  
  $('.faq-header-link').click(function() {
    $(this).parent().find(".faq-icon").click();
  });
  
  $("#faq-expand-all").click(function() {
    event.preventDefault();
    $(".faq-icon").click();
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

$(document).scroll(function() {
  checkOffset();
});

function checkOffset() {
  if ($(".local-navigation").offset().top + $(".local-navigation").height() >= $("footer").offset().top) {
    $(".local-navigation").css("position", "absolute");
  }
  if ($(document).scrollTop() + window.innerHeight < $("footer").offset().top) {
    $(".local-navigation").css("position", "fixed");
    
  }
}

function questionAnswers(questionNumber, difficulty) {
  var answers = [];
  if (difficulty == "easy") {
    answers = ["left", "fish", "eel"];
  } else {
    answers = ["hard"];
  }
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
        $("form#questions-easy span.feedback" + questionNumber).css("color", "orangered");
        return false;
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