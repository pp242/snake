
$(function () {

	menu();

	var $head = $('#head');
	var $this = $(this);
	var direction = 0;  
	var food;
	var body;
	var $food = $('.food');
	var snake = $('.body');
	var score = 0;
	var movement = setInterval(function() {});
	var foodcoordinates = {
		x : 0 ,
		y : 0
	}
	var highScore = 0;
	var $score = $('#score') 
 	var $screen = $('#screen')

	var screenX = $screen.offset().left ;
	var screenY = $screen.offset().top ;
	var snakeX = $head.position().left + screenX;
	var snakeY = $head.position().top + screenY;

	clearInterval(movement);



	function menu () {
		var menuChoice = prompt('What do you want?\nPlay Snake - 1\nSettings - 2\nQuit - No need to press a button, just walk away man');
		if(menuChoice == 1){
			score = 0;
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

		createFood();
    	$(document).keydown(function(event){
    		clearInterval(movement);
	    	if(event.keyCode==38)//up
		    {
		      	direction = event.keyCode;
		     	move(direction);
		     	event.preventDefault();
		    }else if(event.keyCode==40)//down
		    {
		      	direction = event.keyCode;
		      	move(direction);
		      	event.preventDefault();
		    }else if(event.keyCode==37)//left
		    {
		      	direction = event.keyCode;
		      	move(direction);
		      	event.preventDefault();
		    }else if(event.keyCode==39)//right
		    {
		      	direction = event.keyCode;
		      	move(direction);
		      	event.preventDefault();
		    }else if(event.keyCode==32){
		    	direction = event.keyCode;
		    	move(direction);
		    	event.preventDefault();
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


	 	// function hitBody(x, y, array) {
	  //     for(var i = 0; i < array.length; i++) {
	  //       if(array[i].x === x && array[i].y === y)
	  //       return true;
	  //     } 
	  //     return false;
	  // 	}
  	function hitBody () {
  		var snakeX = $head.position().left; + screenX;
		var snakeY = $head.position().top; + screenY;
  		for (var i = 0; i < snake.length; i++) {
  			///console.log(snakeX + " !! " + snakeY)
  			// if (i > 0) {
  			// 	debugger
  			// } 
  			console.log(snake.eq(i).position().left + ' ' + snake.eq(i).position().top);

  			//snake.eq(i+1).offset().top = snake.eq(i).position().top ;
  			//console.log(snake.eq(i).position().left)
  		// 	if (snake.eq(i).position().left === snakeX && snake.eq(i).position().left === snakeY){
  		// 		alert('this is broken so im sorry');
				// $this.css({top: '20px', left: '20px'});
				// menu();
  		// 	}
  		}
  	}



  	function addToBody(){
  		
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
		    }else if(direction==32){
		    	$head.css({left: "+=0px",top: "+=0px"},"fast");
		    } 
		    
		    var headX = $head.position().left ;
			var headY = $head.position().top ;
			


			die();
			eaten();
			hitBody();
			



			function die() {
				if(headX <= -20 || headY >= 400 || headY <= 0 || headX >= 600){
					var score = 0;
					alert('Dead');
					$head.css({top: '20px', left: '20px'});
					clearInterval(movement);
					menu();
					
				}	
			}
				

		}, 200);


	}createFood();

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
      	
     	var $food = $('.food');
     	//console.log($food);
     	
		//console.log(screenX + ' ' + screenY)
     	foodcoordinates = {
        	//x: Math.abs((Math.floor(Math.random()*20))*30),
        	//y: Math.abs((Math.floor(Math.random()*20))*20)


        	x: (Math.floor(Math.random()*29)*20) + screenX,
        	y: (Math.floor((Math.random()*18)+2)*20) + screenY
     	}





     	var foodX = foodcoordinates.x;
     	var foodY = foodcoordinates.y;

		var $foodXY = $food.offset({
			left : foodcoordinates.x ,
			top : foodcoordinates.y
		});


     	//console.log(foodX + ' ' + foodY);

      
    	
      		
  	}

  	function eaten() {
	    var snakeX = $head.position().left + screenX;
		var snakeY = $head.position().top + screenY;
		var $newBodyElement = $('<div class="body"></div>');
  		if (foodcoordinates.x === snakeX && foodcoordinates.y === snakeY || foodcoordinates.y === snakeY && foodcoordinates.x ===snakeX) {
  			score++;
  			if(score>highScore){
  				highScore = score;
  			}
  			$score.text('s c o r e : ' + score + '. . . . . . h i g h s c o r e : ' + highScore);
  			
  			

      		foodcoordinates.x = (Math.floor(Math.random()*29)*20) + screenX;
      		foodcoordinates.y = (Math.floor((Math.random()*18)+2)*20) + screenY;
      		//console.log(foodcoordinates.x + ' ' + foodcoordinates.y)
      		var $foodXY = $food.offset({
				left : foodcoordinates.x ,
				top : foodcoordinates.y 
			});

      		$newBodyElement.after(snake);


    		}
		console.log(snake);
		console.log("snakeY: " + snakeY)
		console.log("snakeX: " + snakeX)
		console.log("foodcoordinatesY: " + foodcoordinates.y)
		console.log("foodcoordinatesX: " + foodcoordinates.x)
  	}
  	


});







