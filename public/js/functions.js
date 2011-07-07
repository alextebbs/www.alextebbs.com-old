$(document).ready(function()
	{
	
        function sleep (command,time) {
            var t=setTimeout( command , time ) ;
        }

        function hideall() {
        $("ul#two").hide();
		$("section#about").hide();
		$("section#contact").hide();
		}
    
        hideall();
        
		$('ul#tips li.select').animate({
		left: '+=1500'
		}, 500, function() {
        sleep("$('div#card').slideDown('slow');", 1000);
		});
		
		$("a#home").click(function()
		  {
		    $("#spacer").slideDown();
			hideall();
		  });
		
		$("a.about").click(function()
		  {
            $("#spacer").slideUp();
			$("section#contact").hide();
		    $("ul#two").hide();
			$("section#about").slideToggle("slow");
		  });
		  
		$("a.contact").click(function()
		  {
            $("#spacer").slideUp();
		    $("ul#two").hide();
			$("section#about").hide();
			$("section#contact").slideToggle("slow");
		  });

		$("a.portfolio").click(function()
		  {
            $('ul#two li a').removeClass('selected');
		    $("section#about").hide();
			$("section#contact").hide();
		    $("#webdesign").hide();
		    $("#graphicdesign").hide();
            $("#spacer").slideUp();
			$("ul#two").slideToggle("slow");
		  });

	});
