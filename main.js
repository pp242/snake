$(function () {

	menu();

	var $head = $('#head');
	var $this = $(this);
	var direction = 0; 
	var wrongDirection = 0; 
	var $food = $('.food');
	var snake = $('.body');
	var score = 0;
	var movement = setInterval(function() {});
	var foodcoordinates = {
		x : 0 ,
		y : 0
	}
	var $score = $('#score') 
 	var $screen = $('#screen')
 	var highScore = localStorage.getItem("highScore");
 	$score.text('s c o r e : ' + score + '. . . . . .h i g h s c o r e : ' + highScore);
	var screenX = $screen.offset().left ;
	var screenY = $screen.offset().top ;
	var snakeX = $head.eq(0).position().left + screenX;
	var snakeY = $head.eq(0).position().top + screenY;
	var snake1x = $('.nextThing')
    var snake1y = $('.nextThing')
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
		////.css -- for no animation
		/// addd elemenet to head for and delete end
		//// had a head element and body changed it to just snakebody for ease 

		createFood();
    	$(document).keydown(function(event){
    		clearInterval(movement);
	    	if(event.keyCode == 38 && event.keyCode != wrongDirection)//up
		    {
		      	direction = event.keyCode;
		     	move(direction);
		     	event.preventDefault();

		    }else if(event.keyCode == 40 && event.keyCode != wrongDirection)//down
		    {
		      	direction = event.keyCode;
		      	move(direction);
		      	event.preventDefault();
		    }else if(event.keyCode == 37 && event.keyCode != wrongDirection)//left
		    {
		      	direction = event.keyCode;
		      	move(direction);
		      	event.preventDefault();
		    }else if(event.keyCode == 39 && event.keyCode != wrongDirection)//right
		    {
		      	direction = event.keyCode;
		      	move(direction);
		      	event.preventDefault();
		    }else if(event.keyCode == 32){
		    	direction = event.keyCode;
		    	move(direction);
		    	event.preventDefault();
		    }else{
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

	function move(direction) {

		movement = setInterval(function(){ 

			if(direction == 38)//up 38
		    {
		      	$head.eq(0).css({top: "-=20px"},"fast");
		      	wrongDirection = 40;
		    }else if(direction == 40)//down 40
		    {
		      	$head.eq(0).css({top: "+=20px"},"fast");
		      	wrongDirection = 38;
		    }else if(direction == 37)//left 37
		    {
		      	$head.eq(0).css({left: "-=20px"},"fast");
		      	wrongDirection = 39;
		    }else if(direction == 39)//right 39
		    {
		      	$head.eq(0).css({left: "+=20px"},"fast");
		      	wrongDirection = 37;
		    }else if(direction == 32){
		    	$head.css.eq(0)({left: "+=0px",top: "+=0px"},"fast");
		    } 
		    var headX = $head.eq(0).position().left ;
			var headY = $head.eq(0).position().top ;
			
			moveBody(headX, headY);
			dyingIntoWall();
			eaten();
		}, 100);
	}
	createFood();

	function moveBody (x, y) {

		
		var $theSnake = $('.snake-element');
		var $theOldSnake = $('.snake-element').clone();
		
		if ($theSnake.length) {

			var prevX = x;
			var prevY = y;
			var $oldBodyElement = null;
			
			$theSnake.each(function (i, $currentBlock) {
				
				
				if (i != 0 ) {
					var index = i - 1;
					
					prevX = $theOldSnake.eq(index).css('left');
					prevY = $theOldSnake.eq(index).css('top');
					var nameX = $head.eq(0).position().left + 'px' ;
					var nameY = $head.eq(0).position().top + 'px' ;
					console.log($theOldSnake.eq(0));
					
					if($theOldSnake.eq(index).hasClass('nextThing')){
						//debugger
					
						console.log('prev x ' + prevX + ' name x ' + nameX)
						console.log(' prev y:' + prevY + ' name y ' + nameY)
						if(prevX == nameX &&  prevY == nameY){
							dead();
						}

					}$theSnake.eq(i).css({
						top: prevY,
						left: prevX 
					});			
				}
			});
		}
	}
	function dead () {
		score = 0;
		$head.eq(0).css({top: '200px', left: '200px'});
		clearInterval(movement);
		$('.nextThing').remove();
		menu();
	}
 
  	function createFood() {
      	
     	var $food = $('.food');
     	foodcoordinates = {
     		x: (Math.floor(Math.random()*29)*20) + screenX,
        	y: (Math.floor((Math.random()*18)+2)*20) + screenY
     	}
	   	var foodX = foodcoordinates.x;
     	var foodY = foodcoordinates.y;

		var $foodXY = $food.offset({
			left : foodcoordinates.x ,
			top : foodcoordinates.y
		});

  	}

  	function eaten() {
	    var snakeX = $head.eq(0).position().left + screenX;
		var snakeY = $head.eq(0).position().top + screenY;
		var $newBodyElement = $('<div class="nextThing snake-element"></div>');
  		
  		if (foodcoordinates.x === snakeX && foodcoordinates.y === snakeY || foodcoordinates.y === snakeY && foodcoordinates.x ===snakeX) {
  			score++;

  			var highScore = localStorage.getItem("highScore");

			if(highScore !== null){
			    if (score > highScore) {
			        localStorage.setItem("highScore", score);      
			    }
			}
			else{
			    localStorage.setItem("highScore", score);
			}

  			if(score>highScore){
  				highScore = score;
  			}
  			$score.text('s c o r e : ' + score + '. . . . . .h i g h s c o r e : ' + highScore);
			foodcoordinates.x = (Math.floor(Math.random()*29)*20) + screenX;
      		foodcoordinates.y = (Math.floor((Math.random()*18)+2)*20) + screenY;
      		var $foodXY = $food.offset({
				left : foodcoordinates.x ,
				top : foodcoordinates.y 
			});

      		$head.eq(0).after($newBodyElement);
      		var randomColor = getRandomColor();
			$newBodyElement.css({
				backgroundColor: randomColor
			});
   			var snake1x = snakeX;
      		var snake1y = snakeY;
    	}
	}
	function dyingIntoWall() {
		var headX = $head.eq(0).position().left ;
		var headY = $head.eq(0).position().top ;
		if(headX <= -20 || headY >= 400 || headY <= 0 || headX >= 600){
			dead();
		}	
	}
	
	var randomColor = getRandomColor();
	$(this).css({
		backgroundColor: randomColor
	});
		

		
	function getRandomColor() {
		var letters = '0123456789ABCDEF';
		var color = '#';
			for (var i = 0; i < 6; i++) {
		    	color += letters[Math.floor(Math.random() * 16)];
		  	}return color;
		}
});







