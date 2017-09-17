$(function(){

	menu();

	var $head = $("#head");
	var direction = 0;  
	var food;
	var body;
	var snake = [] ;
	var score = 0;
	var movement = setInterval(function() {});
	clearInterval(movement);


	function menu () {
		var menuChoice = prompt('What do you want?\nPlay Snake - 1\nSettings - 2\nQuit - No need to press a button, just walk away man');
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
		//// had a head element and body changed it to just snakebody for ease 


    	$(document).keydown(function(event){
    		clearInterval(movement);
	    	if(event.keyCode==38)//up
		    {
		      	direction = event.keyCode;
		     	move(direction);
		    }else if(event.keyCode==40)//down
		    {
		      	direction = event.keyCode;
		      	move(direction);
		    }else if(event.keyCode==37)//left
		    {
		      	direction = event.keyCode;
		      	move(direction);
		    }else if(event.keyCode==39)//right
		    {
		      	direction = event.keyCode;
		      	move(direction);
		    } 
	  	});
	}  	
		    $("#buttonLeft").click(function(event){
		    	clearInterval(movement);
		    	direction = 37;
				move(direction);
		 	});

		    $("#buttonRight").click(function(event){
		    	clearInterval(movement);
		    	direction = 39;
				move(direction);
				});

		  	$("#buttonTop").click(function(event){
		  		clearInterval(movement);
		    	direction = 38;
		    	move(direction);
		  	});

		  	$("#buttonBottom").click(function(event){
		  		clearInterval(movement);
		    	direction = 40;
		    	move(direction);
		  	});


	function snakeBody() {
      	var length = 4;
     	snake = [];
      	for (var i = length-1; i>=0; i--) {
         	snake.push({x:i, y:0});
      	}  
 	}
 	function hitBody(x, y, array) {
      for(var i = 0; i < array.length; i++) {
        if(array[i].x === x && array[i].y === y)
        return true;
      } 
      return false;
  	}

	function move(direction) {


		movement = setInterval(function(){ 
		
	    	if(direction==38)//up
		    {
		      	$head.css({top: "-=20px"},"fast");
		    }else if(direction==40)//down
		    {
		      	$head.css({top: "+=20px"},"fast");
		    }else if(direction==37)//left
		    {
		      	$head.css({left: "-=20px"},"fast");
		    }else if(direction==39)//right
		    {
		      	$head.css({left: "+=20px"},"fast");
		    } 
		    
		    var headX = $head.position().top ;
			var headY = $head.position().left ;
			die();
		
			
			function die() {
				if(headX <= -20 || headX >= 400 || headY <= -20 || headY >= 600){
					
					alert('Dead');
					$head.css({top: '100px', left: '100px'});
					clearInterval(movement);
					menu();
					//playGame();
				}	
			}
				

		}, 300);

	}
		var headX = $head.position().top ;
		var headY = $head.position().left ;
		// function eat () {
						

		// 		var $food = $("#food");

		// 		$food = {
		// 			x: (Math.floor((Math.random() * 29))) * 20,
		// 			y: (Math.floor((Math.random() * 19))) * 20
		// 		}

		// 		console.log($food.x + ', ' + $food.y + ' , ' + score)
		// 		if($food.x === headX && $food.y === headY){
		// 			score += 10;
		// 			$food = {
		// 				x: (Math.floor((Math.random() * 29))) * 20,
		// 				y: (Math.floor((Math.random() * 19))) * 20
		// 			}
		// 			console.log($food.x + ', ' + $food.y + ' ' + score)

		// 		}    
		// 	}
		// eat();

  	function createFood() {
      	
     	var $food = $(".food");
     	food = {
        	x: (Math.floor(Math.random()*29)*20),
        	y: (Math.floor(Math.random()*19)*20)
     	}
     	var foodX = food.x;
     	var foodY = food.y;

     	$food.css({top: foodY + 'px', left: foodX + 'px'})
     	
     	console.log(foodX + ' ' + foodY)

      	for (var i=0; i>snake.length; i++) {
        	var snakeX = snake[i].x;
       		var snakeY = snake[i].y;
      
        	if ($food.x===snakeX && $food.y === snakeY || $food.y === snakeY && $food.x===snakeX) {
          		$food.x = (Math.floor(Math.random()*29)*20);
          		$food.y = (Math.floor(Math.random()*19)*20);
          		console.log($food.x + ' ' + $food.y)
        	}
      	}	
  	}
  	createFood();

});







