$(function () {

	
	var $menu = $('#menu')
	var $head = $('#head');
	var $this = $(this);
	var $score = $('#score') 
 	var $screen = $('#screen')
	var	snake1x = $('.nextThing')
    var snake1y = $('.nextThing')
    var $food = $('.food');
	var snake = $('.body');
	var $playGame = $('#playGame');
	var $leaderboardButton = $('#leaderboardButton');
	var $credits = $('#credits');
	var $settings = $('#settings');
	var $menuButton = $('#menuButton');
	var $result = $('#result');
	var $leaderboard = $('#leaderboard');
	var $backToMenu = $('#backToMenu');
	var $backToMenuI = $('#backToMenuI');
	var $backToMenuD = $('#backToMenuD');
	var $instructionsButton = $('#instructionsButton');
	var $instructions = $('#instructions');
	var $highScore = $('#highScore');
	var $highScore2 = $('#highScore2');
	var $highScore3 = $('#highScore3');
	var $highScore4 = $('#highScore4');
	var $highScore5 = $('#highScore5');
	var $deadScreen = $('#deadScreen');
	var $deathScore = $('#deathScore');
	var $settingScreen = $('#settingScreen');
	var $blackSnake = $('#blackSnake');
	var $rainbowSnake = $('#rainbowSnake');
	var $newBodyElement = $('<div class="nextThing snake-element"></div>');
	var $backToMenuS = $('#backToMenuS');
	var $fast = $('#fast');
	var $normal = $('#normal');
	var $slow = $('#slow');
	var getSpeed = 100;
	var getColour = 1;
	var score = 0;
	var movement = setInterval(function() {});
	var foodcoordinates = {
		x : 0 ,
		y : 0
	}
	var direction = 0; 
	var wrongDirection = 0; 
 	var highScore = localStorage.getItem("highScore");
 	$score.text('s c o r e : ' + score + '. . . . . .h i g h s c o r e : ' + highScore);
	var screenX = $screen.offset().left ;
	var screenY = $screen.offset().top ;
	var snakeX = $head.eq(0).position().left + screenX;
	var snakeY = $head.eq(0).position().top + screenY;
	menu();
	clearInterval(movement);
	
	function menu () {
		$settingScreen.addClass('visibility');
		$instructions.addClass('visibility');
		$leaderboard.addClass('visibility');
		$deadScreen.addClass('visibility');
		$rainbowSnake.addClass('visibility');
		$normal.addClass('visibility');

		if($menu.hasClass('visibility')){
			$menu.removeClass('visibility');
		}
		$playGame.click(function(event){
	 		playGame();
	 		$menu.addClass('visibility');
		});
		$playGame.mouseover(function(event){
	 		$playGame.css({
	 			background: getRandomColor
	 		})  
		});
		$playGame.mouseleave(function(event){
	 		$playGame.css({
	 			background: 'transparent'
	 		})
	 	});	  
		$instructionsButton.click(function(event){
		 	instructions();
		 	$menu.addClass('visibility');
		});
		$instructionsButton.mouseover(function(event){
	 		$instructionsButton.css({
	 			background: getRandomColor
	 		})  
		});
		$instructionsButton.mouseleave(function(event){
	 		$instructionsButton.css({
	 			background: 'transparent'
	 		})   		
		});
		$leaderboardButton.click(function(event){
	 		leaderboard();
	 		$menu.addClass('visibility');
		});
		$leaderboardButton.mouseover(function(event){
	 		$leaderboardButton.css({
	 			background: getRandomColor
	 		})  
		});
		$leaderboardButton.mouseleave(function(event){
	 		$leaderboardButton.css({
	 			background: 'transparent'
	 		})  
		});
		$settings.click(function(event){
			settings();
		 	$menu.addClass('visibility')
		});
		$settings.mouseover(function(event){
	 		$settings.css({
	 			background: getRandomColor
	 		})  
		});
		$settings.mouseleave(function(event){
	 		$settings.css({
	 			background: 'transparent'
	 		})  
		});
		$credits.click(function(event){
		 	$menu.addClass('visibility');
		});
		$credits.mouseover(function(event){
	 		$credits.css({
	 			background: getRandomColor
	 		})  
		});
		$credits.mouseleave(function(event){
	 		$credits.css({
	 			background: 'transparent'
	 		})  
		});
		//$menu.addClass('visibility')
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
		}, getSpeed);
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
					
					
					if($theOldSnake.eq(index).hasClass('nextThing')){
						//debugger
					
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
		deadScreen();
		score = 0;
		$head.eq(0).css({top: '200px', left: '200px'});
		clearInterval(movement);
		$('.nextThing').remove();
		
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
  			var highScore2 = localStorage.getItem("highScore2");
  			var highScore3 = localStorage.getItem("highScore3");
  			var highScore4 = localStorage.getItem("highScore4");
  			var highScore5 = localStorage.getItem("highScore5");

			if(highScore !== null){
			    if (score >= highScore) {
			        localStorage.setItem("highScore", score);      
			    }else if(highScore > score && score >= highScore2){
			    	localStorage.setItem("highScore2", score);
			    }else if(highScore2 > score && score >= highScore3){
			    	localStorage.setItem("highScore3", score);
			    }else if(highScore3 > score && score >= highScore4){
			    	localStorage.setItem("highScore4", score);
			    }else if(highScore4 > score && score >= highScore5){
			    	localStorage.setItem("highScore5", score);
			    }
			}
			else{
			    localStorage.setItem("highScore", score);
			}
  			if(score>highScore){
  				highScore = score;
  			}
  			$score.text('s c o r e : ' + score + '. . . . . .h i g h s c o r e : ' + highScore);
  			
  			$highScore.text('h i g h s c o r e : ' + highScore);
			$highScore2.text('second highscore : ' + ++highScore2);
			$highScore3.text('third highscore : ' + ++highScore3);
			$highScore4.text('fourth highscore : ' + ++highScore4);
			$highScore5.text('fifth highscore : ' + ++highScore5);



			foodcoordinates.x = (Math.floor(Math.random()*29)*20) + screenX;
      		foodcoordinates.y = (Math.floor((Math.random()*18)+2)*20) + screenY;
      		var $foodXY = $food.offset({
				left : foodcoordinates.x ,
				top : foodcoordinates.y 
			});

      		$head.eq(0).after($newBodyElement);
      		var randomColor = getRandomColor();
			if(getColour == 1){
				$newBodyElement.css({
				backgroundColor: randomColor
				});
			}else if(getColour == 2){
				$newBodyElement.css({
				backgroundColor: 'black'
				});
			}

			
   			var snake1x = snakeX;
      		var snake1y = snakeY;
    	}
	}
	function dyingIntoWall() {
		var headX = $head.eq(0).position().left ;
		var headY = $head.eq(0).position().top ;
		if(headX <= -20 || headY >= 420 || headY <= 0 || headX >= 600){
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

	function leaderboard() {

		
		if($leaderboard.hasClass('visibility')){
			$leaderboard.removeClass('visibility');
		}
		highScore = localStorage.getItem("highScore");
		highScore2 = localStorage.getItem("highScore2");
		highScore3 = localStorage.getItem("highScore3");
		highScore4 = localStorage.getItem("highScore4");
		highScore5 = localStorage.getItem("highScore5");
		$highScore.text('h i g h s c o r e : ' + highScore);
		$highScore2.text('second highscore : ' + highScore2);
		$highScore3.text('third highscore : ' + highScore3);
		$highScore4.text('fourth highscore : ' + highScore4);
		$highScore5.text('fifth highscore : ' + highScore5);
		
		$highScore.mouseover(function(event){
	 		$highScore.css({
	 			background: getRandomColor
	 		})  
		});
		$highScore2.mouseover(function(event){
	 		$highScore2.css({
	 			background: getRandomColor
	 		})  
		});
		$highScore3.mouseover(function(event){
	 		$highScore3.css({
	 			background: getRandomColor
	 		})  
		});
		$highScore4.mouseover(function(event){
	 		$highScore4.css({
	 			background: getRandomColor
	 		})  
		});
		$highScore5.mouseover(function(event){
	 		$highScore5.css({
	 			background: getRandomColor
	 		})  
		});
		$backToMenu.click(function(event){
	 		menu();
	 		$leaderboard.addClass('visibility');
		});
		$backToMenu.mouseover(function(event){
	 		$backToMenu.css({
	 			background: getRandomColor
	 		})  
		});
		$backToMenu.mouseleave(function(event){
	 		$backToMenu.css({
	 			background: 'transparent'
	 		})
	 	});
	}
	function instructions () {
		if($instructions.hasClass('visibility')){
			$instructions.removeClass('visibility');
		}
		$backToMenuI.click(function(event){
	 		menu();
	 		$instructions.addClass('visibility');
		});
		$backToMenuI.mouseover(function(event){
	 		$backToMenuI.css({
	 			background: getRandomColor
	 		})  
		});
		$backToMenuI.mouseleave(function(event){
	 		$backToMenuI.css({
	 			background: 'transparent'
	 		})
	 	});
	}
	function deadScreen () {
		$deathScore.text('Your Score is:  ' + score);
		if($deadScreen.hasClass('visibility')){
			$deadScreen.removeClass('visibility');
		}


		$backToMenuD.click(function(event){
	 		menu();
	 		$deadScreen.addClass('visibility');
		});
		$backToMenuD.mouseover(function(event){
	 		$backToMenuD.css({
	 			background: getRandomColor
	 		})  
		});
		$backToMenuD.mouseleave(function(event){
	 		$backToMenuD.css({
	 			background: 'transparent'
	 		})
	 	});
	}
	function settings(){
		if($settingScreen.hasClass('visibility')){
			$settingScreen.removeClass('visibility');
		}


		$blackSnake.click(function(event){
	 		getColour = 2;
			$blackSnake.toggleClass('visibility');
			$rainbowSnake.toggleClass('visibility');
		});
		$blackSnake.mouseover(function(event){
	 		$blackSnake.css({
	 			background: randomColor
	 		})  
		});
		$blackSnake.mouseleave(function(event){
	 		$blackSnake.css({
	 			background: 'transparent'
	 		})
	 	});
		$rainbowSnake.click(function(event){
	 		getColour = 1;
			$blackSnake.toggleClass('visibility');
			$rainbowSnake.toggleClass('visibility');
		});
		$rainbowSnake.mouseover(function(event){
	 		$rainbowSnake.css({
	 			background: randomColor
	 		})  
		});
		$rainbowSnake.mouseleave(function(event){
	 		$rainbowSnake.css({
	 			background: 'transparent'
	 		})
	 	});
		$fast.click(function(event){
	 		getSpeed = 70;
	 		$fast.toggleClass('visibility');
	 		if($normal.hasClass('visibility')){
	 			$normal.removeClass('visibility');
	 		}else if($slow.hasClass('visibility')){
	 			$slow.removeClass('visibility');
	 		}
	 	});	
		$fast.mouseover(function(event){
	 		$fast.css({
	 			background: randomColor
	 		})  
		});
		$fast.mouseleave(function(event){
	 		$fast.css({
	 			background: 'transparent'
	 		})
	 	});
	 	$normal.click(function(event){
	 		getSpeed = 100;
	 		$normal.toggleClass('visibility');
	 		if($fast.hasClass('visibility')){
	 			$fast.removeClass('visibility');
	 		}else if($slow.hasClass('visibility')){
	 			$slow.removeClass('visibility');
	 		}
	 	});	
		$normal.mouseover(function(event){
	 		$normal.css({
	 			background: randomColor
	 		})  
		});
		$normal.mouseleave(function(event){
	 		$normal.css({
	 			background: 'transparent'
	 		})
	 	});
	 	$slow.click(function(event){
	 		getSpeed = 150;
	 		$slow.toggleClass('visibility');
	 		if($fast.hasClass('visibility')){
	 			$fast.removeClass('visibility');
	 		}else if($normal.hasClass('visibility')){
	 			$normal.removeClass('visibility');
	 		}
	 	});	
		$slow.mouseover(function(event){
	 		$slow.css({
	 			background: randomColor
	 		})  
		});
		$slow.mouseleave(function(event){
	 		$slow.css({
	 			background: 'transparent'
	 		})
	 	});




		$backToMenuS.click(function(event){
	 		menu();
	 	});	
		$backToMenuS.mouseover(function(event){
	 		$backToMenuS.css({
	 			background: randomColor
	 		})  
		});
		$backToMenuS.mouseleave(function(event){
	 		$backToMenuS.css({
	 			background: 'transparent'
	 		})
	 	});
	}
});







