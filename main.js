$(function(){


	var $head = $("#head");
	var direction = 0;
	var movement = setInterval(function() {});
	function
	function playGame () {
    	$(document).keydown(function(event){
    		clearInterval(movement);
	    	if(event.keyCode==38)//up
		    {
		      	$head.animate({top: "-=20px"},"fast");
		      	direction = event.keyCode;
		     	move(direction);
		      
		    }
		    else if(event.keyCode==40)//down
		    {
		      	$head.animate({top: "+=20px"},"fast");
		      	direction = event.keyCode;
		      	move(direction);
		      		      
		    }
		    else if(event.keyCode==37)//left
		    {
		      	$head.animate({left: "-=20px"},"fast");
		      	direction = event.keyCode;
		      	move(direction);
		      
		    }
		    else if(event.keyCode==39)//right
		    {
		      	$head.animate({left: "+=20px"},"fast");
		      	direction = event.keyCode;
		      	move(direction);
		      
		    }

	  	});
	}  	


		    $("#buttonLeft").click(function(event){
		    	$head.animate({
		      	"left": "-=20px"
		    	},"fast");
		 	});
		    $("#buttonRight").click(function(event){
		    	$head.animate({
		      	"left": "+=20px"
		    	},"fast");
		    });
		  	$("#buttonTop").click(function(event){
		    	$head.animate({
		      	top: "-=20px"
		    	},"fast")
		  	});
		  	$("#buttonBottom").click(function(event){
		    	$head.animate({
		    	  top: "+=20px"
		    	},"fast")
		  	});


	function move(direction) {

		movement = setInterval(function(){ 

			

	    	if(direction==38)//up
		    {
		      	$head.animate({top: "-=20px"},"fast");
		    }
		    else if(direction==40)//down
		    {
		      	$head.animate({top: "+=20px"},"fast");
		    }
		    else if(direction==37)//left
		    {
		      	$head.animate({left: "-=20px"},"fast");
		    }
		    else if(direction==39)//right
		    {
		      	$head.animate({left: "+=20px"},"fast");
		    }

		}, 500);

	}


	function die() {
		if(){}
			

	}



});










