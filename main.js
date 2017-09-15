$(function(){


	menu();


	var $head = $("#head");
	var direction = 0;
	var movement = setInterval(function() {});
	clearInterval(movement);
	function menu () {
		var menuChoice = prompt('What do you want?\nPlay Snake - 1\nSettings - 0\nQuit - No need to press a button, just walk away man');
		if(menuChoice == 1){
			playGame();
		}else if(menuChoice == 2){
			//settings() not a function yet
		}else{

		}


	}

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
		    
		    var x = $head.position().top
			var y = $head.position().left
			die();
			console.log(x + ", " + y);
			function die() {
				if(x == -20 || x == 600 || y == -20 || y == 400){
					
					alert('Wipe yourself, you\'re bleeding!');
					menu();
					//playGame();
				}	
			}
			

		}, 500);

		
	
	}

	


	



});










