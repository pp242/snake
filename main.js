$(function () { /// had it in this because its good practice
 
	
	var $menu = $('#menu')
	var $head = $('#head');
	var $this = $(this);
	var $score = $('#score') 
 	var $screen = $('#screen')							//declaring all the ids and classes from the html, there are alot, if unsure about id then refer to html otherwise it should be fairly obvious
	var	snake1x = $('.nextThing')
    var snake1y = $('.nextThing')
    var $food = $('.food');
	var snake = $('.body');
	var $playGame = $('#playGame');
	var $leaderboardButton = $('#leaderboardButton');
	var $creditsButton = $('#creditsButton');
	var $settings = $('#settings');
	var $settings2 = $('#settings2');
	var $menuButton = $('#menuButton');
	var $result = $('#result');
	var $leaderboard = $('#leaderboard');
	var $backToMenu = $('#backToMenu');
	var $backToMenuI = $('#backToMenuI');   /// this are different back to the menu buttons for different pages hence the slight changes
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
	var $newBodyElement = $('<div class="nextThing snake-element"></div>'); /// all the body elements have this
	var $backToMenuS = $('#backToMenuS');
	var $insane = $('#insane')
	var $fast = $('#fast');
	var $normal = $('#normal');
	var $slow = $('#slow');
	var $credits = $('#credits');
	var $backToMenuC = $('#backToMenuC');
	var $backToMenuS2 = $("#backToMenuS2")
	var $settingScreen2 = $('#settingScreen2')
	var $backgroundMusic = $('.backgroundMusic');
	var $dieMusic = $('.dieMusic');
	var $dieBackground = $('.dieBackground');
	var getSpeed = 100;					//declaration for the speed of the intervals of each movement of the head of the snake
	var getColour = 1;					//declaration for the colour of the snakes body, 1 for rainbow, 2 black	
	var score = 0;						/// gives a score of zero before game starts
	var movement = setInterval(function() {});			///set the variable
	var foodcoordinates = {							/// declare the foodcoordinates so they start from somewhere
		x : 0 ,
		y : 0
	}
	var direction = 0; 					//the direction gets the key input and saves in this
	var wrongDirection = 0; 			// find what key was pressed and gets the key input for the opposite direction
 	var highScore = localStorage.getItem("highScore");		//gets the highscore from local storage so it can be outputted on the page
 	$score.text('s c o r e : ' + score + '. . . . . .h i g h s c o r e : ' + highScore);
	var screenX = $screen.offset().left ;  ///gets offset from the phone edge to the computer screen
	var screenY = $screen.offset().top ;
	var snakeX = $head.eq(0).position().left + screenX; //adds the offset to the head position so we can find the pixel the head is far the edge of the screen
	var snakeY = $head.eq(0).position().top + screenY;
	
	clearInterval(movement);
	

	$rainbowSnake.addClass('opacity');			//for the settings it hides the buttons that are currently pressed so you know what the current settings are
	$normal.addClass('opacity');
	// $dieMusic.pause();
	// $dieBackground.pause();
	//$food.pause();
	$('.voice')[0].pause();					/// mades sure that this sounds do not play on start
	$('.dieMusic')[0].pause();
	$('.food')[0].pause();
	menu();


	function menu () {
		$settingScreen.addClass('visibility');
		$instructions.addClass('visibility');
		$leaderboard.addClass('visibility');
		$deadScreen.addClass('visibility');
		$credits.addClass('visibility');			//this hide the screens that we are not on currently
		$settingScreen2.addClass('visibility');
		//$dieBackground.pause();
		score = 0;   //redeclare score equals zero so that the score get deleted when you die
		visible($menu)		//// checks if menu is visible if not gets rid of it
		
		$playGame.click(function(event){		/// click function to start the function playgame which plays the game
	 		playGame();
	 		$menu.addClass('visibility');			/// add class to hide the menu to play the game
		});
		
		buttonColor($playGame);	  				//// does the a random colour whenever highlighted, see line 512 to check the function
		$instructionsButton.click(function(event){
		 	instructions();					//// takes to instructions screen
		 	$menu.addClass('visibility');	/// this keeps doing it adding a class to hide the menu
		});
		
		buttonColor($instructionsButton);
		$leaderboardButton.click(function(event){
	 		leaderboard();					/// /// takes to leaderboard screen
	 		$menu.addClass('visibility');
		});
		
		buttonColor($leaderboardButton);
		$settings.click(function(event){
			settings();						/// takes to setting screen
		 	$menu.addClass('visibility')
		});
		buttonColor($settings2);
		$settings2.click(function(event){
			settingsMore();						/// takes to setting screen 2
		 	$menu.addClass('visibility')
		});

		buttonColor($settings);
		$creditsButton.click(function(event){
		 	$menu.addClass('visibility');
		 	credit();							/// takes to credit screen
		});
		
		buttonColor($creditsButton);
		//$menu.addClass('visibility')
	}

	function playGame () {
		////.css -- for no animation
		/// addd elemenet to head for and delete end
		//// had a head element and body changed it to just snakebody for ease 

		createFood();				/// creates food and puts it a random point
    	$(document).keydown(function(event){
    		clearInterval(movement);
	    	if(event.keyCode == 38 && event.keyCode != wrongDirection)// checks if the button pressed is up and the last button wasnt down
		    {
		      	direction = event.keyCode;			//// stores the number in direction
		     	move(direction);					//// calls move function and gives the direction it happened in
		     	event.preventDefault();				/// stops scrolling, this is the same for the next 3

		    }else if(event.keyCode == 40 && event.keyCode != wrongDirection)// //checks if the button pressed is down and the last button wasnt up
		    {
		      	direction = event.keyCode;
		      	move(direction);
		      	event.preventDefault();
		    }else if(event.keyCode == 37 && event.keyCode != wrongDirection)/// checks if the button pressed is left and the last button wasnt right
		    {
		      	direction = event.keyCode;
		      	move(direction);
		      	event.preventDefault();
		    }else if(event.keyCode == 39 && event.keyCode != wrongDirection)/// checks if the button pressed is right and the last button wasnt left
		    {
		      	direction = event.keyCode;
		      	move(direction);
		      	event.preventDefault();
		    }else if(event.keyCode == 32){				//// space bar was suppose to pause the game
		    	direction = event.keyCode;
		    	move(direction);
		    	event.preventDefault();
		    }else{
		    	move(direction);
		    } 
	  	});
	}  	
		    $("#buttonLeft").click(function(event){
		    	clearInterval(movement);					//// clears the direction that was previously pressed so that it doesnt move diagonally and doesnt remeber what buttons were previously pressed and keep moving in those directions
		    	direction = 37;								//// buttons for the differents directions 
				move(direction);							//// again calls the move functions so that the the head can be moved

		 	});

		    $("#buttonRight").click(function(event){
		    	clearInterval(movement);
		    	direction = 39;
				move(direction);						///all these do the same as the top one but for different directions
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

		movement = setInterval(function(){ ///sets interval, this is every iteration of movement, this saves the direction of movement and replays it until direction value is change(someone clicks the button or key)

			if(direction == 38)//up 38						if the direction is up from the button oor key input it moves the head up
		    {
		      	$head.eq(0).css({top: "-=20px"},"fast");
		      	wrongDirection = 40;						
		    }else if(direction == 40)//down 40 				if the direction is down from the button oor key input it moves the head down etc.. same for 2 below
		    {
		      	$head.eq(0).css({top: "+=20px"},"fast");	/// this moves it below, the ,fast is not required needs deleting
		      	wrongDirection = 38;						/// gives what number what would be the wrong direction so we can use it to stop going back on yourself
		    }else if(direction == 37)//left 37
		    {
		      	$head.eq(0).css({left: "-=20px"},"fast");
		      	wrongDirection = 39;
		    }else if(direction == 39)//right 39. 
		    {
		      	$head.eq(0).css({left: "+=20px"},"fast");
		      	wrongDirection = 37;
		    }else if(direction == 32){
		    	$head.css.eq(0)({left: "+=0px",top: "+=0px"},"fast");
		    } 
		    var headX = $head.eq(0).position().left ;
			var headY = $head.eq(0).position().top ;		///gives coordinates of the position of the head to the screen div
			
			moveBody(headX, headY);			/// calls differents functions 
			dyingIntoWall();
			eaten();
		}, getSpeed);  				//// goes every after getspeed milliseconds, this is set by the user in the settings or by default 100 ms
	}
	createFood();

	function moveBody (x, y) { //// responsible for getting body elements to follow the one ahead of it, x and y are the heads coordinates 

		
		var $theSnake = $('.snake-element');  /// more declarations, this is the array we keep the snake body elements
		var $theOldSnake = $('.snake-element').clone();
		
		if ($theSnake.length) {			

			var prevX = x;			///declares variables to store the position of the front body element which will give to the next element
			var prevY = y;				
			var $oldBodyElement = null;
			
			$theSnake.each(function (i, $currentBlock) { //// each loop to check each element of the array
				
				
				if (i != 0 ) {					// not to look at the first element
					var index = i - 1;			/// important as it means we grab the position of the ahead element, this is better for next couple lines as its better to write index instead of i-1
					
					prevX = $theOldSnake.eq(index).css('left');		/// stores the position a the ahead body element here, every body elements position is stored in here
					prevY = $theOldSnake.eq(index).css('top');
					var nameX = $head.eq(0).position().left + 'px' ;		/// stores the position of the head with px so it can be compared later
					var nameY = $head.eq(0).position().top + 'px' ;
					
					
					if($theOldSnake.eq(index).hasClass('nextThing')){		/// checks if the array has element of a body element, the head should have this element, 
						//debugger
					
						if(prevX == nameX &&  prevY == nameY){			/// this checks if any of the body elements have the same positions of the head, if it does then it throws dead and the snake dies, this is for when the snakes collides with itself
							dead();
						}

					}$theSnake.eq(i).css({			///this gives the position of each ahead bodys element of the array theSnake to the behind body element 
						top: prevY,
						left: prevX 
					});			
				}
			});
		}
	}
	function dead () {					//when you die this is called
		deadScreen();					/// different screen
		$head.eq(0).css({top: '200px', left: '200px'});  		/// goes to middle of screen to start again
		clearInterval(movement);					/// clearing the movement the snake has so that its not moving when the game starts
		$('.nextThing').remove();					/// deletes all body elements
		
	}
 
  	function createFood() {
      	
     	var $food = $('.food');					////creates food in random positions as long as its a mutliple of 20 otherwise the head will never touch it as the head only moves by 20,
     	foodcoordinates = {
     		x: (Math.floor(Math.random()*29)*20) + screenX,	//// spawns food  anywhere, as long as its every 20 from 0 to 580 on the x axis, anymore off phone screeen, less is the same
        	y: (Math.floor((Math.random()*18)+2)*20) + screenY //// same as above from 40 to 400 every 20. anymore it goes off the phone screen, less into scoreboard
     	}

		var $foodXY = $food.offset({			///sets the foods location on the screen
			left : foodcoordinates.x ,
			top : foodcoordinates.y
		});

  	}

  	function eaten() {			 /// called when food is eaten
  		
	    var snakeX = $head.eq(0).position().left + screenX;
		var snakeY = $head.eq(0).position().top + screenY;			////this is mentioned above but redeclared for some reason	
		var $newBodyElement = $('<div class="nextThing snake-element"></div>'); /// this is the body element added to the snake
  		
  		if (foodcoordinates.x === snakeX && foodcoordinates.y === snakeY || foodcoordinates.y === snakeY && foodcoordinates.x ===snakeX) {
  			score++;					////checks to see if the snake head intercepts the food
			$('.food')[0].play();			/// plays sound when you eat
  			var highScore = localStorage.getItem("highScore");
  			var highScore2 = localStorage.getItem("highScore2"); ///score save into local storage for the highscores
  			var highScore3 = localStorage.getItem("highScore3");
  			var highScore4 = localStorage.getItem("highScore4");
  			var highScore5 = localStorage.getItem("highScore5");

			if(highScore !== null){
			    if (score >= highScore) {
			        localStorage.setItem("highScore", score);      
			    }else if(highScore > score && score >= highScore2){
			    	localStorage.setItem("highScore2", score);				//// checks if the score is a new highscore, and if it ranks on the leaderboard
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
  				highScore = score;					///// outputs it on the playgame screen so you can see it as you play
  			}
  			$score.text('s c o r e : ' + score + '. . . . . .h i g h s c o r e : ' + highScore);
  			
  			$highScore.text('h i g h s c o r e : ' + highScore);
			$highScore2.text('second highscore : ' + ++highScore2);
			$highScore3.text('third highscore : ' + ++highScore3);
			$highScore4.text('fourth highscore : ' + ++highScore4);
			$highScore5.text('fifth highscore : ' + ++highScore5);				//// outputs it to the leaderboard



			foodcoordinates.x = (Math.floor(Math.random()*29)*20) + screenX;
      		foodcoordinates.y = (Math.floor((Math.random()*18)+2)*20) + screenY;
      		var $foodXY = $food.offset({
				left : foodcoordinates.x ,			///if a piece of food is eaten the food relocates itself to random coordinates
				top : foodcoordinates.y 
			});

      		$head.eq(0).after($newBodyElement);
      		var randomColor = getRandomColor();
			if(getColour == 1){						////checks the settings to see what button was pressed so that it knows which type of snake the user has inputted
				$newBodyElement.css({
				backgroundColor: randomColor //// this generates a random colour
				});
			}else if(getColour == 2){
				$newBodyElement.css({
				backgroundColor: 'black' //// this generates just a plain black snake
				});
			}

			
   			var snake1x = snakeX; /// not sure to be honest, kinda scared to delete it
      		var snake1y = snakeY;
    	}
	}
	function dyingIntoWall() {
		var headX = $head.eq(0).position().left ;
		var headY = $head.eq(0).position().top ; ///checks to see if you goof the screen and if user did, the snake dies
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
		var color = '#';				///// this is the random colour generator by using a for loop to randomly pick 1 of 16 character which make up colour using the hexidecimal systems
		for (var i = 0; i < 6; i++) {
	    	color += letters[Math.floor(Math.random() * 16)];
	  	}return color;
	}

	function leaderboard() {

		visible($leaderboard);
		
		highScore = localStorage.getItem("highScore");
		highScore2 = localStorage.getItem("highScore2");
		highScore3 = localStorage.getItem("highScore3");
		highScore4 = localStorage.getItem("highScore4");		/// gets high scores from local storage and puts it on the game and outputs it on the leaderboard
		highScore5 = localStorage.getItem("highScore5");
		$highScore.text('h i g h s c o r e : ' + highScore);
		$highScore2.text('second highscore : ' + highScore2);
		$highScore3.text('third highscore : ' + highScore3);
		$highScore4.text('fourth highscore : ' + highScore4);
		$highScore5.text('fifth highscore : ' + highScore5);
		
		
		changeColor($highScore);
		changeColor($highScore2);			/// this changes the colour of the tiles they are on, the function is at line 521
		changeColor($highScore3);
		changeColor($highScore4);
		changeColor($highScore5);

		$backToMenu.click(function(event){				//// click function to menu
	 		menu();
	 		$leaderboard.addClass('visibility');
		});
		buttonColor($backToMenu); /// this will change the colour of the button to a random colour while the mouse is over the button and turn it off then the mouse leaves it 
	}
	function instructions () {
		visible($instructions);    //// checks if instructions is visible to screen if not the make it so

		$backToMenuI.click(function(event){
	 		menu();
	 		$instructions.addClass('visibility');		/// back to menu button
		});
		buttonColor($backToMenuI);
	}
	function deadScreen () {
		
		$('.dieMusic')[0].play();			/// plays dead music
		setTimeout(function() {
   			 $('.voice')[0].play();			//// delays a little then game over is said
		}, 1000);
		visible($deadScreen);

		$deathScore.text('Your Score is:  ' + score); /// gives score
		$backToMenuD.click(function(event){
	 		menu();
	 		$deadScreen.addClass('visibility');
		});
		buttonColor($backToMenuD);
	}
	function settings(){
		visible($settingScreen);

		$blackSnake.click(function(event){
	 		getColour = 2;
			$blackSnake.addClass('opacity');//// when you click a colour button it hides it and shows the other button so you know which button you are on and which you can click same for below
			$rainbowSnake.removeClass('opacity');
		});
		buttonColor($blackSnake);

		$rainbowSnake.click(function(event){
	 		getColour = 1;
			$blackSnake.removeClass('opacity');
			$rainbowSnake.addClass('opacity');
		});

		buttonColor($rainbowSnake);
		$fast.click(function(event){ ///// when you click a speed button it hides it and shows the other buttons so you know which button youn are on and which you can click same for the same functions below, slight change with the adding and removing of classes for each
	 		getSpeed = 70;
	 		$fast.addClass('opacity');
	 		if($normal.hasClass('opacity')){
	 			$normal.removeClass('opacity');
	 		}else if($slow.hasClass('opacity')){
	 			$slow.removeClass('opacity');
	 		}else if($insane.hasClass('opacity')){
	 			$insane.removeClass('opacity');
	 		}
	 	});	
		buttonColor($fast);

	 	$normal.click(function(event){
	 		getSpeed = 100;
	 		$normal.addClass('opacity');
	 		if($fast.hasClass('opacity')){
	 			$fast.removeClass('opacity');
	 		}else if($slow.hasClass('opacity')){
	 			$slow.removeClass('opacity');
	 		}else if($insane.hasClass('opacity')){
	 			$insane.removeClass('opacity');
	 		}
	 	});	
		buttonColor($normal);

	 	$slow.click(function(event){
	 		getSpeed = 150;
	 		$slow.addClass('opacity');
	 		if($fast.hasClass('opacity')){
	 			$fast.removeClass('opacity');
	 		}else if($normal.hasClass('opacity')){
	 			$normal.removeClass('opacity');
	 		}else if($insane.hasClass('opacity')){
	 			$insane.removeClass('opacity');
	 		}
	 	});	
		buttonColor($slow);

	 	$insane.click(function(event){
	 		getSpeed = 40;
	 		$insane.addClass('opacity');
	 		if($fast.hasClass('opacity')){
	 			$fast.removeClass('opacity');
	 		}else if($normal.hasClass('opacity')){
	 			$normal.removeClass('opacity');
	 		}else if($slow.hasClass('opacity')){
	 			$slow.removeClass('opacity');
	 		}
	 	});	
		buttonColor($insane);

		$backToMenuS.click(function(event){
	 		menu();
	 	});	
		buttonColor($backToMenuS);
	}
	function settingsMore () {
		visible($settingScreen2);


		$backToMenuS2.click(function(event){
	 		menu();
	 	});	
		buttonColor($backToMenuS2);


	}






	function credit () { ///// credit screen
		visible($credits);
		$backToMenuC.click(function(event){
	 		menu();
	 	});	
		buttonColor($backToMenuC);


	}function buttonColor(x){ /// generates random colour to show
		x.mouseover(function(event){
	 		x.css({
	 			background: randomColor
	 		})  
		});
		x.mouseleave(function(event){
	 		x.css({
	 			background: 'transparent'
	 		})
	 	});
	}function changeColor(x){ /// changes colour of tile
		x.mouseover(function(event){
	 		x.css({
	 			background: getRandomColor
	 		})  
		});
	}function visible (x) {
		if(x.hasClass('visibility')){
			x.removeClass('visibility');   //// checks if x is visible if not gets rid of it
		}
	}
});







