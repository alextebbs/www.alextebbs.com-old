$(document).ready(function()
	{
	
        function sleep (command,time) {
            var t=setTimeout( command , time ) ;
        }

        function hideall() {
		$("section#about").hide();
		$("section#contact").hide();
		$("section#design").hide();
		$("section#develop").hide();		
		$("section#proj").hide();
		}
		
        hideall();
        
        sleep("$('section#proj').slideDown('slow');", 200)

		$("a.about").click(function()
		  {
		  	$("ul#two").hide();
			$("section#contact").hide();
			$("section#proj").slideUp();
			$("section#resume").slideUp();
			$("section#about").slideToggle("slow");
		  });
		  
		$("a.contact").click(function()
		  {
		    $("ul#two").hide();
			$("section#proj").slideUp();
			$("section#resume").slideUp();
			$("section#about").hide();
			$("section#contact").slideToggle("slow");
		  });

		$("a.portfolio").click(function()
		  {
            $('ul#two li a').removeClass('selected');
		    $("section#about").hide();
			$("section#contact").hide();
			$("section#resume").hide();
			$("section#proj").slideUp();
            $("#spacer").slideUp();
			$("ul#two").slideToggle("slow");
		  });
	
        $('nav').show();
		
		$("a[href='#top']").click(function() {
		$("html, body").animate({ scrollTop: 0 }, "slow");
		return false;
});

	});
