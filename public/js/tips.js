function showImage(){
	var rand_no = Math.random();
	rand_no = rand_no * 27;
	rand_no = Math.ceil(rand_no);
	var img=document.getElementById("home");
	img.innerHTML='<img src="../public/img/'+rand_no+'.png">';
}

function swap(i) {
	$('ul#tips li').css('left','-1477px');	  
	$(i).addClass('select');
	$(i).animate({
		left: '23px'
		}, 300, function() {
	  }); 
  }

function wipe(i) {
		$('ul#tips li').css('left','-1477px');	  
		$(i).removeClass('select');
	}