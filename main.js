$(function(){

	menu();

	var $head = $("#head");
	var direction = 0;
	var food;
	var movement = setInterval(function() {});
	clearInterval(movement);
	function menu () {
		var menuChoice = prompt('What do you want?\nPlay Snake - 1\nSettings - 0\nQuit - No need to press a button, just walk away man');
		if(menuChoice == 1){
			playGame();
		}else if(menuChoice == 2){
			//settings() not a function yet
		}else{
			///quit();
		}
	}

	function playGame () {
		////local storage
		////.css -- for no animation
		/// addd elemenet to head for and delete end 


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


	function snakeBody() {
      	var length = 4;
     	snake = [];
      	for (var i = length-1; i>=0; i--) {
         	snake.push({x:i, y:0});
      	}  
 	}

	function move(direction) {

		var headX = $head.position().top ;
		var headY = $head.position().left ;
		function eat () {
						

				var $food = $("#food");

				$food = {
					x: (Math.floor((Math.random() * 29))) * 20,
					y: (Math.floor((Math.random() * 19))) * 20
				}

				console.log($food.x + ', ' + $food.y)
				if($food.x == headX && $food.y == headY){

				}    
			}
		eat();

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
		    
		    var headX = $head.position().top ;
			var headY = $head.position().left ;
			die();
		
			
			function die() {
				if(headX <= -20 || headX >= 400 || headY <= -20 || headY >= 600){
					
					alert('Dead');
					menu();
					//playGame();
				}	
			}

		}, 300);

	}

});







