var canvas = document.getElementById("canvas");
canvas.width = 710;
canvas.height = 415;

var c = canvas.getContext('2d');
var stage_count;
stage_count=0
// Object that checks if key is pressed
let keyPressed = {
	left: false,
	right: false,
	up: false,
	down: false
}
function setstagefromblockly(stage){
	
	stage_count=stage;
	
}


// Goal object
const Goal = {
	x: canvas.width - 94,
	y: canvas.height - 70,
	width: 40,
	height: 40,
	draw: function(){
		c.beginPath();
		c.rect(this.x, this.y, this.width, this.height);
		c.fillStyle = "#13E864";
		c.fill();
		c.stroke();
		c.closePath();
	}
}
// positions of stop and chlild images for checks.
// 1st stage 
const S1 = {
	x: 120,
	y:20,
	width: 40,
	height: 40,

}

const S2 = {
	x: 120,
	y: 75,
	width: 40,
	height: 40,

}
const S3 = {
	x: 120,
	y: 185,
	width: 40,
	height: 40,

}
const S4 = {
	x: 120,
	y: 235,
	width: 40,
	height: 40,

}
const S5 = {
	x: 120,
	y: 290,
	width: 40,
	height: 40,

}
const S6 = {
	x: 320,
	y: 20,
	width: 40,
	height: 40,

}
const S7 = {
	x: 320,
	y: 235,
	width: 40,
	height: 40,

}
const S8 = {
	x: 320,
	y: 345,
	width: 40,
	height: 40,

}
const S9 = {
	x: 625,
	y: 185,
	width: 40,
	height: 40,

}
const S10 = {
	x: 625,
	y: 290,
	width: 40,
	height: 40,

 }
const G1 = {
	x: 120,
	y: 130,
	width: 40,
	height: 40,

}
const G2 = {
	x: 520,
	y: 345,
	width: 40,
	height: 40,

}
const G3 = {
	x: 620,
	y: 75,
	width: 40,
	height: 40,

}
const G4 = {
	x: 420,
	y: 235,
	width: 40,
	height: 40,

}
const G5 = {
	x: 636,
	y: 345,
	width: 40,
	height: 40,

}

// for 2nd stage 
const se1 = {
	x: 150,
	y: 90,
	width: 40,
	height: 40,

}
const se2 = {
	x: 35,
	y: 220,
	width: 40,
	height: 40,

}
const se3 = {
	x: 270,
	y: 220,
	width: 40,
	height: 40,

}
const se4 = {
	x: 270,
	y: 155,
	width: 40,
	height: 40,

}
const se5 = {
	x: 270,
	y: 280,
	width: 40,
	height: 40,

}
const se6 = {
	x: 150,
	y: 280,
	width: 40,
	height: 40,

}
const se7 = {
	x: 500,
	y: 345,
	width: 40,
	height: 40,

}
const se8 = {
	x: 500,
	y: 220,
	width: 40,
	height: 40,

}
const se9 = {
	x: 500,
	y: 90,
	width: 40,
	height: 40,

}
const se10 = {
	x: 610,
	y: 90,
	width: 40,
	height: 40,

}
const se11 = {
	x: 610,
	y: 220,
	width: 40,
	height: 40,

}
const se12 = {
	x: 615,
	y: 25,
	width: 40,
	height: 40,

}

const seGoal = {
	x: 620,
	y: 340,
	width: 40,
	height: 40,

}
//............... checks for 3rd stage 
const th1 = {
	x: 30,
	y: 90,
	width: 40,
	height: 40,

}

const th2 = {
	x: 150,
	y: 90,
	width: 40,
	height: 40,

}
const th3 = {
	x: 380,
	y: 150,
	width: 40,
	height: 40,

}
const th4 = {
	x: 500,
	y: 150,
	width: 40,
	height: 40,

}
const th5 = {
	x: 500,
	y: 280,
	width: 40,
	height: 40,

}
const th6 = {
	x: 260,
	y: 280,
	width: 40,
	height: 40,

}
const th7 = {
	x: 390,
	y: 25,
	width: 40,
	height: 40,

}

//  checks for 4th stage

const fo1 = {
	x: 30,
	y: 90,
	width: 40,
	height: 40,

}
const fo2 = {
	x: 130,
	y: 90,
	width: 40,
	height: 40,

}
const fo3 = {
	x: 230,
	y: 150,
	width: 40,
	height: 40,

}
const fo4 = {
	x: 330,
	y: 210,
	width: 40,
	height: 40,

}
const fo5 = {
	x: 430,
	y: 280,
	width: 40,
	height: 40,

}
const fo6 = {
	x: 430,
	y: 150,
	width: 40,
	height: 40,

}
const fo7 = {
	x: 330,
	y: 30,
	width: 40,
	height: 40,

}
const fo8 = {
	x: 130,
	y: 280,
	width: 40,
	height: 40,

}
const fo9 = {
	x: 530,
	y: 50,
	width: 40,
	height: 40,

}

// checks for 5th stage
const fi1 = {
	x: 35,
	y: 82,
	width: 40,
	height: 40,

}

const fi2 = {
	x: 310,
	y: 82,
	width: 40,
	height: 40,

}
const fi3 = {
	x: 310,
	y: 5,
	width: 40,
	height: 40,

}
const fi4 = {
	x: 310,
	y: 241,
	width: 40,
	height: 40,

}
const fi5 = {
	x: 450,
	y: 241,
	width: 40,
	height: 40,

}
const fi6 = {
	x: 450,
	y: 50,
	width: 40,
	height: 40,

}


// checks for 7th stage
const si1 = {
	x: 50,
	y: 120,
	width: 40,
	height: 40,

}

const si2 = {
	x: 580,
	y: 120,
	width: 40,
	height: 40,

}
const si3 = {
	x: 580,
	y: 220,
	width: 40,
	height: 40,

}
const si4 = {
	x: 400,
	y: 220,
	width: 40,
	height: 40,

}
// checks for seven stage
const sev1 = {
	x: 30,
	y: 70,
	width: 40,
	height: 40,

}
const sev2 = {
	x: 30,
	y: 166,
	width: 40,
	height: 40,

}
const sev3 = {
	x: 117,
	y: 166,
	width: 40,
	height: 40,

}
const sev4 = {
	x: 117,
	y: 214,
	width: 40,
	height: 40,

}
const sev5 = {
	x: 204,
	y: 262,
	width: 40,
	height: 40,

}
const sev6 = {
	x: 552,
	y: 118,
	width: 40,
	height: 40,

}
const sev7 = {
	x: 552,
	y: 214,
	width: 40,
	height: 40,

}
const sev8 = {
	x: 465,
	y: 354,
	width: 40,
	height: 40,

}
const sev9 = {
	x: 204,
	y: 25,
	width: 40,
	height: 40,

}
const sev10 = {
	x: 291,
	y: 115,
	width: 40,
	height: 40,

}
// checks for 8th stage 
const ei1 = {
	x: 10,
	y: 240,
	width: 40,
	height: 40,

}
const ei2 = {
	x: 290,
	y: 240,
	width: 40,
	height: 40,

}
const ei3 = {
	x: 150,
	y: 317,
	width: 40,
	height: 40,

}
const ei4 = {
	x: 150,
	y: 86,
	width: 40,
	height: 40,

}
const ei5 = {
	x: 430,
	y: 163,
	width: 40,
	height: 40,

}
const ei6 = {
	x: 570,
	y: 9,
	width: 40,
	height: 40,

}




// Ball object 
// 1st stage 
function Ball(x, y, radius, dx, dy){
	this.x = x;
	this.y = y;
	this.radius = radius;
	this.dx = dx;
	this.dy = dy;

	this.draw = function(){
		c.beginPath();
		c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
		c.fillStyle = "#FF225A";
		c.fill();
		c.stroke();
		c.closePath();
	    console.log("hahaha");
	}

	this.moveRight = function(){

		   if(this.x + radius < canvas.width){
				this.x += this.dx +93;
		   }

		  this.draw();
	}
	
	this.moveDown = function(){
		
			if(this.y + radius < canvas.height){
				this.y += this.dy +48;
			}
			
		   this.draw();
		
	}
	
	
	this.moveUp = function(){
		
			 if(this.y - radius > 0){
				this.y -= this.dy +47;
			 }
			
		   this.draw();
		
	}
	
	
	
	this.moveLeft = function(){
		
			if(this.x - radius > 0){
				this.x -= this.dx +90;
			}
			
		   this.draw();
		
	}
	// for 2nd stage 
	
	
	this.moveSecRight = function(){

		   if(this.x + radius < canvas.width){
				this.x += this.dx +118;
		   }

		  this.draw();
	}
	
	this.moveSecDown = function(){
		
			if(this.y + radius < canvas.height){
				this.y += this.dy +57;
			}
			
		   this.draw();
		
	}
	
	
	this.moveSecUp = function(){
		
			 if(this.y - radius > 0){
				this.y -= this.dy +63;
			 }
			
		   this.draw();
		
	}
	
	
	
	this.moveSecLeft = function(){
		
			if(this.x - radius > 0){
				this.x -= this.dx +116;
			}
			
		   this.draw();
		
	}
	
	// for 3rd stage 
	
	
	this.moveThiRight = function(){

		   if(this.x + radius < canvas.width){
				this.x += this.dx +111;
		   }

		  this.draw();
	}
	
	this.moveThiDown = function(){
		
			if(this.y + radius < canvas.height){
				this.y += this.dy +58.3;
			}
			
		   this.draw();
		
	}
	
	
	this.moveThiUp = function(){
		
			 if(this.y - radius > 0){
				this.y -= this.dy +58.3;
			 }
			
		   this.draw();
		
	}
	
	
	
	this.moveThiLeft = function(){
		
			if(this.x - radius > 0){
				this.x -= this.dx +111;
			}
			
		   this.draw();
		
	}
	
	
	// for 4th stage 
	
	
	this.moveFouRight = function(){

		   if(this.x + radius < canvas.width){
				this.x += this.dx +93.28;
		   }

		  this.draw();
	}
	
	this.moveFouDown = function(){
		
			if(this.y + radius < canvas.height){
				this.y += this.dy +58.83;
			}
			
		   this.draw();
		
	}
	
	
	this.moveFouUp = function(){
		
			 if(this.y - radius > 0){
				this.y -= this.dy +58.83;
			 }
			
		   this.draw();
		
	}
	
	
	
	this.moveFouLeft = function(){
		
			if(this.x - radius > 0){
				this.x -= this.dx +93.28;
			}
			
		   this.draw();
		
	}
	
	
	// for 5th stage 
	
	
	this.moveFivRight = function(){

		   if(this.x + radius < canvas.width){
				this.x += this.dx +135;
		   }

		  this.draw();
	}
	
	this.moveFivDown = function(){
		
			if(this.y + radius < canvas.height){
				this.y += this.dy +72.2;
			}
			
		   this.draw();
		
	}
	
	
	this.moveFivUp = function(){
		
			 if(this.y - radius > 0){
				this.y -= this.dy +72.2;
			 }
			
		   this.draw();
		
	}
	
	
	
	this.moveFivLeft = function(){
		
			if(this.x - radius > 0){
				this.x -= this.dx +135;
			}
			
		   this.draw();
		
	}
	
	
	// for 6th stage 
	
	
	this.moveSixRight = function(){

		   if(this.x + radius < canvas.width){
				this.x += this.dx +171.5;
		   }

		  this.draw();
	}
	
	this.moveSixDown = function(){
		
			if(this.y + radius < canvas.height){
				this.y += this.dy +92.5;
			}
			
		   this.draw();
		
	}
	
	
	this.moveSixUp = function(){
		
			 if(this.y - radius > 0){
				this.y -= this.dy +92.5;
			 }
			
		   this.draw();
		
	}
	
	
	
	this.moveSixLeft = function(){
		
			if(this.x - radius > 0){
				this.x -= this.dx +171.5;
			}
			
		   this.draw();
		
	}
	
	
	// for 7th stage 
	
	
	this.moveSevRight = function(){

		   if(this.x + radius < canvas.width){
				this.x += this.dx +79.95;
		   }

		  this.draw();
	}
	
	this.moveSevDown = function(){
		
			if(this.y + radius < canvas.height){
				this.y += this.dy +40.25;
			}
			
		   this.draw();
		
	}
	
	
	this.moveSevUp = function(){
		
			 if(this.y - radius > 0){
				this.y -= this.dy +40.25;
			 }
			
		   this.draw();
		
	}
	
	
	
	this.moveSevLeft = function(){
		
			if(this.x - radius > 0){
				this.x -= this.dx +79.95;
			}
			
		   this.draw();
		
	}
	
	
	// for 8th stage 
	
	
	this.moveEigRight = function(){

		   if(this.x + radius < canvas.width){
				this.x += this.dx +135.4;
		   }

		  this.draw();
	}
	
	this.moveEigDown = function(){
		
			if(this.y + radius < canvas.height){
				this.y += this.dy +72.2;
			}
			
		   this.draw();
		
	}
	
	
	this.moveEigUp = function(){
		
			 if(this.y - radius > 0){
				this.y -= this.dy +72.2;
			 }
			
		   this.draw();
		
	}
	
	
	
	this.moveEigLeft = function(){
		
			if(this.x - radius > 0){
				this.x -= this.dx +135.4;
			}
			
		   this.draw();
		
	}
	
	
	// for 9th stage 
	
	
	this.moveNinRight = function(){

		   if(this.x + radius < canvas.width){
				this.x += this.dx +93.2;
		   }

		  this.draw();
	}
	
	this.moveNinDown = function(){
		
			if(this.y + radius < canvas.height){
				this.y += this.dy +48.1;
			}
			
		   this.draw();
		
	}
	
	
	this.moveNinUp = function(){
		
			 if(this.y - radius > 0){
				this.y -= this.dy +48.1;
			 }
			
		   this.draw();
		
	}
	
	
	
	this.moveNinLeft = function(){
		
			if(this.x - radius > 0){
				this.x -= this.dx +93.2;
			}
			
		   this.draw();
		
	}
	
	
	// for 10th stage 
	
	
	this.moveTenRight = function(){

		   if(this.x + radius < canvas.width){
				this.x += this.dx +118;
		   }

		  this.draw();
	}
	
	this.moveTenDown = function(){
		
			if(this.y + radius < canvas.height){
				this.y += this.dy +57;
			}
			
		   this.draw();
		
	}
	
	
	this.moveTenUp = function(){
		
			 if(this.y - radius > 0){
				this.y -= this.dy +63;
			 }
			
		   this.draw();
		
	}
	
	
	
	this.moveTenLeft = function(){
		
			if(this.x - radius > 0){
				this.x -= this.dx +116;
			}
			
		   this.draw();
		
	}
	
}

// functions for movemant of balls when stages are interconnected.
function callfunctionDown(){
	console.log(stage_count);
	if(stage_count ==1){
			
		ball.moveDown();

	  }
	  else if(stage_count==2){
		 secondball.moveSecDown();
		 console.log("button",stage_count);

	  }
	 else if(stage_count==3){
	   thirdball.moveThiDown();

		  }
	else if(stage_count==4){
	   fourthball.moveFouDown();

	}
	else if(stage_count==5){
	   fivthball.moveFivDown();

		  }
    else if(stage_count==6){
	   sixthball.moveSixDown();

		  }
	else if(stage_count==7){
	   seventhball.moveSevDown();

		  }
    else if(stage_count==8){
	   eightball.moveEigDown();

		  }
	else if(stage_count==9){
	   ninthball.moveNinDown();

		  }
	else if(stage_count==10){
	   tenthball.moveTenDown();

		  }	
}
function callfunctionUp(){
	if(stage_count ==1){
			 // drawBoard();
	   ball.moveUp();
			
		  }
	else if(stage_count==2){
	   secondball.moveSecUp();
	   console.log(stage_count);

		  }
    else if(stage_count==3){
	   thirdball.moveThiUp();

		  }
	else if(stage_count==4){
	   fourthball.moveFouUp();

	}
	else if(stage_count==5){
	   fivthball.moveFivUp();

		  }
    else if(stage_count==6){
	   sixthball.moveSixUp();

		  }
	else if(stage_count==7){
	   seventhball.moveSevUp();

		  }
    else if(stage_count==8){
	   eightball.moveEigUp();

		  }
	else if(stage_count==9){
	   ninthball.moveNinUp();

		  }
	else if(stage_count==10){
	   tenthball.moveTenUp();

		  }	  
}
function callfunctionLeft(){
	if(stage_count ==1){
			 // drawBoard();
		ball.moveLeft();
	        
	    console.log(stage_count);
			
		  }
	else if(stage_count==2){
	  secondball.moveSecLeft();
	  console.log(stage_count);

		  }
	else if(stage_count==3){
	   thirdball.moveThiLeft();

		  }
	else if(stage_count==4){
	   fourthball.moveFouLeft();

	}
	else if(stage_count==5){
	   fivthball.moveFivLeft();

		  }
    else if(stage_count==6){
	   sixthball.moveSixLeft();

		  }
	else if(stage_count==7){
	   seventhball.moveSevLeft();

		  }
    else if(stage_count==8){
	   eightball.moveEigLeft();

		  }
	else if(stage_count==9){
	   ninthball.moveNinLeft();

		  }
	else if(stage_count==10){
	   tenthball.moveTenLeft();

		  }	  
}
function callfunctionRight(){
	if(stage_count ==1){
			 // drawBoard();
		ball.moveRight();
	       
			
		  }
	else if(stage_count==2){
	   secondball.moveSecRight();

		  }
	else if(stage_count==3){
	   thirdball.moveThiRight();

		  }
	else if(stage_count==4){
	   fourthball.moveFouRight();

	}
	else if(stage_count==5){
	   fivthball.moveFivRight();

		  }
    else if(stage_count==6){
	   sixthball.moveSixRihgt();

		  }
	else if(stage_count==7){
	   seventhball.moveSevRight();

		  }
    else if(stage_count==8){
	   eightball.moveEigRight();

		  }
	else if(stage_count==9){
	   ninthball.moveNinRihgt();

		  }
	else if(stage_count==10){
	   tenthball.moveTenRight();

		  }	  
}

// functions for stages
function movefunctionDown(){
	if(stage_count ==1){
			 // drawBoard();
		ball.moveDown();
	      
	    console.log(stage_count);
			
		  }
	else if(stage_count==2){
	    secondball.moveSecDown();

		  }
	  
		
}




// Wall object
function Wall(x, y, width, height){
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;

	this.draw = function(){
		c.beginPath();
		c.rect(this.x, this.y, this.width, this.height);
		c.fillStyle = "black";
		c.fill();
		c.closePath();
	}
}


// Create walls and save it in an array
let wallArray = [
new Wall(0, 100, canvas.width - 150, 5),
new Wall(150, 200, canvas.width, 5),
new Wall(150, 200, 5, 125),
new Wall(250, canvas.height - 125, 5, 125),
new Wall(350, 200, 5, 125),
new Wall(450, canvas.height - 125, 5, 125),
new Wall(550, 200, 5, 125),
new Wall(650, canvas.height - 125, 5, 125)
];

// Create the ball using the object 

let ball = new Ball(50, 35, 20, 7, 7);
let secondball=new Ball(50,35,20,7,7);
let thirdball=new Ball(50,35,20,7,7);
let fourthball=new Ball(50,35,20,7,7);
let fivthball=new Ball(50,43,25,7,7);
let sixthball=new Ball(50,35,20,7,7);
let seventhball=new Ball(50,35,20,7,7);
let eighthball=new Ball(50,35,20,7,7);
let ninthball=new Ball(50,35,20,7,7);
let tenthball=new Ball(50,35,20,7,7);

// Check function if ball touchs walls
function RectCircleColliding(circle,rect){
    let distX = Math.abs(circle.x - rect.x-rect.width/2);
    let distY = Math.abs(circle.y - rect.y-rect.height/2);

    if (distX > (rect.width/2 + circle.radius)) { return false; }
    if (distY > (rect.height/2 + circle.radius)) { return false; }

    if (distX <= (rect.width/2)) { return true; } 
    if (distY <= (rect.height/2)) { return true; }

    let dx=distX-rect.width/2;
    let dy=distY-rect.height/2;
    return (dx*dx+dy*dy<=(circle.radius*circle.radius));
}

function wallsCheck(){
	if(RectCircleColliding(ball,wallArray[0])){
		alert("You lost. Try Again!");
		document.location.reload();
	}
	if(RectCircleColliding(ball, wallArray[1])){
		alert("You lost. Try Again!");
		document.location.reload();
	}
	if(RectCircleColliding(ball, wallArray[2])){
		alert("You lost. Try Again!");
		document.location.reload();
	}
	if(RectCircleColliding(ball, wallArray[3])){
		alert("You lost. Try Again!");
		document.location.reload();
	}
	if(RectCircleColliding(ball, wallArray[4])){
		alert("You lost. Try Again!");
		document.location.reload();
	}
	if(RectCircleColliding(ball, wallArray[5])){
		alert("You lost. Try Again!");
		document.location.reload();
	}
	if(RectCircleColliding(ball, wallArray[6])){
		alert("You lost. Try Again!");
		document.location.reload();
	}
	if(RectCircleColliding(ball, wallArray[7])){
		alert("You lost. Try Again!");
		document.location.reload();
	}
}

// Check function if ball touchs goal square
// for 1st stage 
function goalCheck(count){

	if(RectCircleColliding(ball, S1)){
		if(alert('Alert For your User!')){}
        else    
			document.location.href="http://127.0.0.1:5000/";
		//setTimeout( function ( ) { alert( "moo" ); }, 1000000 );
		// if(confirm('Successful Message')){
        // window.location.reload();  

		 //window.location.reload();		
		
	}
	if(RectCircleColliding(ball, S2)){
		if(alert('Alert For your User!')){}
		 else    
			 document.location.href="http://127.0.0.1:5000/";

        
		// document.location.reload();
	}
	if(RectCircleColliding(ball, S3)){
		if(alert('Alert For your User!')){}
		 else    
			 document.location.href="http://127.0.0.1:5000/";

		
	
		
	}
	if(RectCircleColliding(ball, S4)){
		 if(alert('Alert For your User!')){}
		 else    
			 document.location.href="http://127.0.0.1:5000/";


	
	}
	if(RectCircleColliding(ball, S5)){
		 if(alert('Alert For your User!')){}
		 else    
			 document.location.href="http://127.0.0.1:5000/";
	

		
	}
	if(RectCircleColliding(ball, S6)){
         if(alert('Alert For your User!')){}
		 else    
			 document.location.href="http://127.0.0.1:5000/";
	
	
	}
	if(RectCircleColliding(ball, S7)){
		 if(alert('Alert For your User!')){}
		 else    
			 document.location.href="http://127.0.0.1:5000/";

		
		
	}
	if(RectCircleColliding(ball, S8)){
		 if(alert('Alert For your User!')){}
		 else    
			 document.location.href="http://127.0.0.1:5000/";
		 
		
	}
	if(RectCircleColliding(ball, S9)){
		 if(alert('Alert For your User!')){}
		 else    
			 document.location.href="http://127.0.0.1:5000/";
	
		
	}
	if(RectCircleColliding(ball, S10)){
		 if(alert('Alert For your User!')){}
		 else   
			 document.location.href="http://127.0.0.1:5000/";
	
		
	}
	if(RectCircleColliding(ball, G1)){
	     if(alert('Alert For your User!')){}
		 else    
			 document.location.href="http://127.0.0.1:5000/";
		
	    		
		// document.location.reload();
	}
	
	if(RectCircleColliding(ball, G3)){
		 if(alert('Alert For your User!')){}
		 else    
			 document.location.href="http://127.0.0.1:5000/";
		
		
	}
	if(RectCircleColliding(ball, G5)){
	     // if(alert('Alert For your User!')){count=count+1}
		 // else   {
		 var data;
		 data=1;
         $.post("get_stage",{javascript_data: data
	     });		 
		 document.location.href="http://127.0.0.1:5000/";
		 // count=count+1
		 // stage_count=stage_count+1
	}
}

// checkes for 2nd stage 
 function goalCheckForSecond(count){
	if(RectCircleColliding(secondball, se1)){
		alert("YOU LOST!");
		
		document.location.reload();
		return count
	}
	if(RectCircleColliding(secondball, se2)){
		alert("YOU LOST");
	
        return count
		document.location.reload();
	}
	if(RectCircleColliding(secondball, se3)){
		alert("YOU LOST");
	
		return count
		document.location.reload();
		
	}
	if(RectCircleColliding(secondball, se4)){
		alert("YOU LOST");
		
	
		document.location.reload();
	}
	if(RectCircleColliding(secondball, se5)){
		alert("YOU LOST");
	
	
		document.location.reload();
	}
	if(RectCircleColliding(secondball, se6)){
		alert("YOU LOST");
	
	
		document.location.reload();
	}
	if(RectCircleColliding(secondball, se7)){
		alert("YOU LOST");
	
	
		document.location.reload();
	}
	if(RectCircleColliding(secondball, se8)){
		alert("YOU LOST");
	
		document.location.reload();
	}
	if(RectCircleColliding(secondball, se9)){
		alert("YOU LOST");
	

		document.location.reload();
	}
	if(RectCircleColliding(secondball, se10)){
		alert("YOU LOST");
	

		document.location.reload();
	}
	if(RectCircleColliding(secondball, se11)){
	
		return count
		document.location.reload();
	}
	if(RectCircleColliding(secondball, se12)){
		alert("YOU LOST");
		
		return count
		document.location.reload();
	}

	
	if(RectCircleColliding(secondball, seGoal)){
		 // count=count+1
		document.location.href="http://127.0.0.1:5000/";
	
	   	return count
	}
}


function start(){
	//document.location.reload();
	requestAnimationFrame(start);
		
	c.clearRect(0, 0, innerWidth, innerHeight);
	var context = canvas.getContext("2d");
    var bw = 702;
    var bh = 386;
    var p = 7;
    var cw = bw + (p*2) + 2;
    var ch = bh + (p*2) + 2;

  
   
	// for 1st stage ....
	// Draw backgroung image

    function make_base()
	  {
	  base_image = new Image();
	  base_image.src = '/static/images/background.jpg';
	  context.globalAlpha = 0.5;
      context.drawImage(base_image, 0, 0,745,420);
	  context.globalAlpha = 1.0;
	  }

	   // other images
	  function make_child()
	  {
	  base_image = new Image();
	  base_image.src = '/static/images/child.png';
	  // context.globalAlpha = 0.5;
      context.drawImage(base_image, 120, 130,70,40);
	  // context.globalAlpha = 1.0;
	  // mage = new Image();
	  // mage.src ='static/images/stop.png';
	  // context.drawImage(mage, 520, 345,70,40);
	  
	  mage = new Image();
	  mage.src = 'static/images/mom.jpg';
	  context.drawImage(mage, 620, 75,72,38);
	  // chilfren image
	  child = new Image();
	  child.src = './static/images/children.jpg';
	  // context.globalAlpha = 0.5;
      context.drawImage(child, 420, 235,70,40);
	  // context.globalAlpha = 1.0;
	  
	  candey = new Image();
	  candey.src = '/static/images/candey.jpg';
	
      context.drawImage(candey, 636, 345,50,40);
	
	  }
	  // draw stop images
	  function make_image()
	  {
	  base_image = new Image();
	  base_image.src = '/static/images/stop.png';
	  context.globalAlpha = 0.5;
      context.drawImage(base_image, 120, 20,60,30);
	  context.globalAlpha = 1.0;
	  context.globalAlpha = 0.5;
      context.drawImage(base_image, 120, 75,60,30);
	  context.globalAlpha = 1.0;
	  context.globalAlpha = 0.5;
      context.drawImage(base_image, 120, 185,60,30);
	  context.globalAlpha = 1.0;
	  context.globalAlpha = 0.5;
      context.drawImage(base_image, 120, 235,60,30);
	  context.globalAlpha = 1.0;
	  context.globalAlpha = 0.5;
      context.drawImage(base_image, 120, 290,60,30);
	  context.globalAlpha = 1.0;
	   context.globalAlpha = 0.5;
      context.drawImage(base_image, 320, 20,60,30);
	  context.globalAlpha = 1.0;
	  context.globalAlpha = 0.5;
      context.drawImage(base_image, 320, 235,60,30);
	  context.globalAlpha = 1.0;
	  context.globalAlpha = 0.5;
      context.drawImage(base_image, 320, 345,60,30);
	  context.globalAlpha = 1.0;
	  context.globalAlpha = 0.5;
      context.drawImage(base_image, 625, 185,60,30);
	  context.globalAlpha = 1.0;
	  context.globalAlpha = 0.5;
      context.drawImage(base_image, 625, 290,60,30);
	  context.globalAlpha = 1.0;
	  }
	 function drawBoard(){
	 make_base();
	 make_image();
	 make_child();
        for (var x = 0; x < bw; x += 100) {
            context.moveTo(0.5 + x + p, p);
            context.lineTo(0.5 + x + p, bh + p);
        }

        for (var x = 0; x < bh; x += 55) {
            context.moveTo(p, 0.5 + x + p);
            context.lineTo(bw + p, 0.5 + x + p);
        }

        context.strokeStyle = "black";
        context.stroke();
    }
	  
	
	  
	stage_count=1;
	
	 c.clearRect(0, 0, innerWidth, innerHeight);
	drawBoard();
    ball.draw();
	//wallsCheck();
    goalCheck(stage_count);
   

   // drawBoard_forSecondStage();
   // ball.draw();
   // secondball.Draw();
 //  stage_count=goalCheck(stage_count);


    // drawBoard_forThirdStage();
    // ball.draw();
	// stage=goalCheck(stage);

     // drawBoard_forFourthStage();
	 // ball.draw();


}
//...........................................................................................................................



function startsec(){
	//document.location.reload();
	requestAnimationFrame(startsec);
	var context = canvas.getContext("2d");	
	c.clearRect(0, 0, innerWidth, innerHeight);
    var bw = 702;
    var bh = 386;
    var p = 7;
    var cw = bw + (p*2) + 2;
    var ch = bh + (p*2) + 2;

  
   
	  // // for 2nd stagefunction make_base()
	
	  function make_base_forSecondStage()
	  {
	  base_image = new Image();
	  base_image.src = '/static/images/close_background.jpg';
	  context.globalAlpha = 0.5;
      context.drawImage(base_image, 0, 0,745,420);
	  context.globalAlpha = 1.0;
	  }
	   // other images
	  function make_child_forSecondStage()
	  {
	  // base_image = new Image();
	  // base_image.src = '/static/images/child.png';
	  // // context.globalAlpha = 0.5;
      // context.drawImage(base_image, 120, 130,70,40);
	  // // context.globalAlpha = 1.0;
	  // mage = new Image();
	  // mage.src ='static/images/stop.png';
	  // context.drawImage(mage, 520, 345,70,40);
	  
	  // mage = new Image();
	  // mage.src = 'static/images/mom.jpg';
	  // context.drawImage(mage, 620, 75,72,38);
	  // // chilfren image
	  // child = new Image();
	  // child.src = './static/images/children.jpg';
	  // // context.globalAlpha = 0.5;
      // context.drawImage(child, 420, 235,70,40);
	  // // context.globalAlpha = 1.0;
	  
	  candey = new Image();
	  candey.src = '/static/images/candey.jpg';
	
      context.drawImage(candey, 620, 340,60,50);
	
	  }
	  // draw stop images
	  function make_image_forSecondStage()
	  {
	  base_image = new Image();
	  base_image.src = '/static/images/stop.png';
	  context.globalAlpha = 0.5;
      context.drawImage(base_image, 150, 90,60,30);
	  context.globalAlpha = 1.0;
	  context.globalAlpha = 0.5;
      context.drawImage(base_image, 35, 220,60,30);
	  context.globalAlpha = 1.0;
	  context.globalAlpha = 0.5;
      context.drawImage(base_image, 270, 220,60,30);
	  context.globalAlpha = 1.0;
	  context.globalAlpha = 0.5;
      context.drawImage(base_image, 270, 155,60,30);
	  context.globalAlpha = 1.0;
	  context.globalAlpha = 0.5;
      context.drawImage(base_image, 270, 280,60,30);
	  context.globalAlpha = 1.0;
	   context.globalAlpha = 0.5;
      context.drawImage(base_image, 150, 280,60,30);
	  context.globalAlpha = 1.0;
	  context.globalAlpha = 0.5;
      context.drawImage(base_image, 500, 345,60,30);
	  context.globalAlpha = 1.0;
	  context.globalAlpha = 0.5;
      context.drawImage(base_image, 500, 220,60,30);
	  context.globalAlpha = 1.0;
	  context.globalAlpha = 0.5;
      context.drawImage(base_image, 500, 90,60,30);
	  context.globalAlpha = 1.0;
	  context.globalAlpha = 0.5;
	  context.drawImage(base_image, 610, 90,60,30);
	  context.globalAlpha = 1.0;
	  context.globalAlpha = 0.5;
	  context.drawImage(base_image, 610, 220,60,30);
	  context.globalAlpha = 1.0;
	  context.globalAlpha = 0.5;
      context.drawImage(base_image, 615, 25,60,30);
	  context.globalAlpha = 1.0;
	  }
	  
	 // for 2nd stage
	function drawBoard_forSecondStage(){
	 make_child_forSecondStage();
	 make_base_forSecondStage();
	 make_image_forSecondStage()
	
        for (var x = 0; x < bw; x += 116.5) {
            context.moveTo(0.5 + x + p, p);
            context.lineTo(0.5 + x + p, bh + p);
        }

        for (var x = 0; x < bh; x += 64) {
            context.moveTo(p, 0.5 + x + p);
            context.lineTo(bw + p, 0.5 + x + p);
        }

        context.strokeStyle = "black";
        context.stroke();
    }
	// end for 2nd stage........................................................................................................
	
  
	
	
	  var stage=0;
	  // stage=0;
	  // for (var x = 0; x < 3; x += 1){
		  // if(stage ==0){
			  // drawBoard();
			  // ball.draw();
	          // stage=goalCheck(stage);
		
	          // console.log("myalert",stage);
			
		  // }
		  // else if(stage==1){
			
			  // c.clearRect(0, 0, innerWidth, innerHeight);
			 
			  // drawBoard_forSecondStage();
			  // secondball.draw();
			
	           // stage=goalCheckForSecond(stage);
			   // stage_count=stage;
		       // console.log("2ndstafe",stage_count,stage);

		  // }
		  // else if(stage==2){
			  // c.clearRect(0, 0, innerWidth, innerHeight);
			  // drawBoard_forThirdStage();
			  // ball.draw();
	        
		    // console.log(stage_count);

		  // }
	  // }
	  
	
	
	// drawBoard();
    // ball.draw();
    // stage_count=goalCheck(stage_count);
   stage_count=1;
 c.clearRect(0, 0, innerWidth, innerHeight);
   drawBoard_forSecondStage();
   secondball.draw();
   stage_count=goalCheck(stage_count);
 


}


//........................................................................................startsec end.............................

function startthird(){
	//document.location.reload();
	requestAnimationFrame(startthird);
	var context = canvas.getContext("2d");	
	c.clearRect(0, 0, innerWidth, innerHeight);
    var bw = 702;
    var bh = 386;
    var p = 7;
    var cw = bw + (p*2) + 2;
    var ch = bh + (p*2) + 2;

  
   
	// end for 2nd stage........................................................................................................
	// 3rd stage 
	// background image 
	  function make_base_forThirdStage()
	  {
	  base_image = new Image();
	  base_image.src = '/static/images/hospital.jpg';
	  context.globalAlpha = 0.5;
      context.drawImage(base_image, 0, 0,745,420);
	  context.globalAlpha = 1.0;
	  }
	   // 2nd hospital image
	  function make_child_forThirdStage()
	  {
	  base_image = new Image();
	  base_image.src = '/static/images/hospitall.jpg';
      context.drawImage(base_image, 600, 330,100,65);
    
	
	
	  }
	  // draw stop images, x difference =120 y=130
	  function make_image_forThirdStage()
	  {
	  base_image = new Image();
	  base_image.src = '/static/images/stop.png';
	  context.globalAlpha = 0.5;
      context.drawImage(base_image, 30, 90,60,30);
	  context.globalAlpha = 1.0;
	  context.globalAlpha = 0.5;
      context.drawImage(base_image, 150, 90,60,30);
	  context.globalAlpha = 1.0;
	  context.globalAlpha = 0.5;
      context.drawImage(base_image, 380, 150,60,30);
	  context.globalAlpha = 1.0;

	  context.globalAlpha = 0.5;
      context.drawImage(base_image, 500, 150,60,30);
	  context.globalAlpha = 1.0;
	  context.globalAlpha = 0.5;
      context.drawImage(base_image, 500, 280,60,30);
	  context.globalAlpha = 1.0;
	
	
	  context.globalAlpha = 0.5;
      context.drawImage(base_image, 260, 280,60,30);
	  context.globalAlpha = 1.0;
	  context.globalAlpha = 0.5;
      context.drawImage(base_image, 380, 25,60,30);
	  context.globalAlpha = 1.0;
	 
	  

  
	  }
	  
	function drawBoard_forThirdStage(){
	 make_base_forThirdStage();
	 make_child_forThirdStage();
	 make_image_forThirdStage();
	
        for (var x = 0; x < bw; x += 116.5) {
            context.moveTo(0.5 + x + p, p);
            context.lineTo(0.5 + x + p, bh + p);
        }

        for (var x = 0; x < bh; x += 64) {
            context.moveTo(p, 0.5 + x + p);
            context.lineTo(bw + p, 0.5 + x + p);
        }

        context.strokeStyle = "black";
        context.stroke();
    }
	// // end for 3rd stage .......................................................................................................
	
	
	
	  var stage=0;
	  // stage=0;
	  // for (var x = 0; x < 3; x += 1){
		  // if(stage ==0){
			  // drawBoard();
			  // ball.draw();
	          // stage=goalCheck(stage);
		
	          // console.log("myalert",stage);
			
		  // }
		  // else if(stage==1){
			
			  // c.clearRect(0, 0, innerWidth, innerHeight);
			 
			  // drawBoard_forSecondStage();
			  // secondball.draw();
			
	           // stage=goalCheckForSecond(stage);
			   // stage_count=stage;
		       // console.log("2ndstafe",stage_count,stage);

		  // }
		  // else if(stage==2){
			  // c.clearRect(0, 0, innerWidth, innerHeight);
			  // drawBoard_forThirdStage();
			  // ball.draw();
	        
		    // console.log(stage_count);

		  // }
	  // }
	  
	
	
	// drawBoard();
    // ball.draw();
    // stage_count=goalCheck(stage_count);
   
 c.clearRect(0, 0, innerWidth, innerHeight);
 
    drawBoard_forThirdStage();
    thirdball.draw();
	// stage=goalCheck(stage);

     // drawBoard_forFourthStage();
	 // ball.draw();


}

//......................................................................... third end...........................




function startfourth(){
	//document.location.reload();
	requestAnimationFrame(startfourth);
	var context = canvas.getContext("2d");	
	c.clearRect(0, 0, innerWidth, innerHeight);
    var bw = 702;
    var bh = 386;
    var p = 7;
    var cw = bw + (p*2) + 2;
    var ch = bh + (p*2) + 2;

	
	// // For fourth stage 
	
	
	
	  function make_base_forFourthStage()
	  {
	  base_image = new Image();
	  base_image.src = '/static/images/bottles.jpg';
	  context.globalAlpha = 0.5;
      context.drawImage(base_image, 0, 0,745,420);
	  context.globalAlpha = 1.0;
	  }
	   // other images
	  function make_child_forFourthStage()
	  {
	  base_image = new Image();
	  base_image.src = '/static/images/bott.jpg';
	  // context.globalAlpha = 0.5;
      context.drawImage(base_image, 610, 330,90,50);
	  
	
	  }
	  // draw stop images, x difference =120 y=130
	  function make_image_forFourthStage()
	  {
	  base_image = new Image();
	  base_image.src = '/static/images/stop.png';
	  // context.globalAlpha = 0.5;
      context.drawImage(base_image, 30, 90,60,30);
	  // context.globalAlpha = 1.0;
	  // context.globalAlpha = 0.5;
      context.drawImage(base_image, 130, 90,60,30);
	  // context.globalAlpha = 1.0;
	  // context.globalAlpha = 0.5;
      context.drawImage(base_image, 230, 150,60,30);
	  // context.globalAlpha = 1.0;

	  // context.globalAlpha = 0.5;
      context.drawImage(base_image, 330, 210,60,30);
	  // context.globalAlpha = 1.0;
	  // context.globalAlpha = 0.5;
      context.drawImage(base_image, 430, 280,60,30);
	  // context.globalAlpha = 1.0;
	  // context.globalAlpha = 0.5;
      context.drawImage(base_image, 430, 150,60,30);
	  // context.globalAlpha = 1.0;
	  // context.globalAlpha = 0.5;
      context.drawImage(base_image, 330, 30,60,30);
	  // context.globalAlpha = 1.0;
	  // context.globalAlpha = 0.5;
      context.drawImage(base_image, 130, 280,60,30);
	  // context.globalAlpha = 1.0;
	  
	  // context.globalAlpha = 0.5;
      context.drawImage(base_image, 530, 90,60,30);
	  // context.globalAlpha = 1.0;
	  // context.globalAlpha = 0.5;
      // context.drawImage(base_image, 130, 170,60,30);
	  // context.globalAlpha = 1.0;

  
	  }
	  
	function drawBoard_forFourthStage(){
	 make_base_forFourthStage();
	 make_image_forFourthStage();
	 make_child_forFourthStage();
	
        for (var x = 0; x < bw; x += 100) {
            context.moveTo(0.5 + x + p, p);
            context.lineTo(0.5 + x + p, bh + p);
        }

        for (var x = 0; x < bh; x += 64) {
            context.moveTo(p, 0.5 + x + p);
            context.lineTo(bw + p, 0.5 + x + p);
        }

        context.strokeStyle = "black";
        context.stroke();
    }
	// // end for fourth stage 
	
	  var stage=0;
	
	// drawBoard();
    // ball.draw();
    // stage_count=goalCheck(stage_count);
   
 c.clearRect(0, 0, innerWidth, innerHeight);
  


     drawBoard_forFourthStage();
	 fourthball.draw();


}



//fifth stage start
function startfivth(){
	//document.location.reload();
	requestAnimationFrame(startfivth);
	var context = canvas.getContext("2d");	
	c.clearRect(0, 0, innerWidth, innerHeight);
    var bw = 702;
    var bh = 386;
    var p = 7;
    var cw = bw + (p*2) + 2;
    var ch = bh + (p*2) + 2;
  function make_base_for5stage()
	  {
	  base_image = new Image();
	  base_image.src = '/static/images/5.jpg';
	  context.globalAlpha = 0.5;
      context.drawImage(base_image, 0, 0,745,420);
	  context.globalAlpha = 1.0;
	  }
	   // other images
	  function make_child_for5stage()
	  {
	 base_image = new Image();
	  base_image.src = '/static/images/a.png';
	  // context.globalAlpha = 0.5;
      context.drawImage(base_image, 35,82,100,75);
	  // context.globalAlpha = 1.0;
	  // context.globalAlpha = 0.5;
      context.drawImage(base_image, 310, 82,100,75);
	  // context.globalAlpha = 1.0;
	  // context.globalAlpha = 0.5;
      context.drawImage(base_image, 310, 5,100,75);
	  // context.globalAlpha = 1.0;
	  // context.globalAlpha = 0.5;
      context.drawImage(base_image, 310, 241,100,75);
	  	  // context.globalAlpha = 1.0;
	  // context.globalAlpha = 0.5;
      context.drawImage(base_image, 450, 241,100,75);
	  child = new Image();
	  child.src = './static/images/f.jpg';
      context.globalAlpha = 1.0;
	  context.globalAlpha = 0.5;
      context.drawImage(child, 450, 320,100,75);
	   context.globalAlpha = 1.0;
	  context.globalAlpha = 0.5;
	
	  }
	 
	  
	function drawBoard_for5stage(){
	 make_base_for5stage();
	
	 make_child_for5stage();
	
       for (var x = 0; x < bw; x += 140) {
            context.moveTo(0.5 + x + p, p);
            context.lineTo(0.5 + x + p, bh + p);
        }

        for (var x = 0; x < bh; x +=77) {
            context.moveTo(p, 0.5 + x + p);
            context.lineTo(bw + p, 0.5 + x + p);
        }

        context.strokeStyle = "black";
        context.stroke();
    }
	drawBoard_for5stage();
 //drawBoard()
    fivthball.draw();
   // stage_count=goalCheck(stage_count);
}	
//fifth stage end
	
   

//start of 6 stage
function startsixth(){
	//document.location.reload();
	requestAnimationFrame(startsixth);
	var context = canvas.getContext("2d");	
	c.clearRect(0, 0, innerWidth, innerHeight);
    var bw = 702;
    var bh = 386;
    var p = 7;
    var cw = bw + (p*2) + 2;
    var ch = bh + (p*2) + 2;
  function make_base_for6stage()
	  {
	  base_image = new Image();
	  base_image.src = '/static/images/10.jpg';
	  context.globalAlpha = 0.5;
      context.drawImage(base_image, 0, 0,745,420);
	  context.globalAlpha = 1.0;
	  }
	   // other images
	  function make_child_for6stage()
	  {
		  base_image = new Image();
	  base_image.src = '/static/images/stop.png';
	  // context.globalAlpha = 0.5;
      context.drawImage(base_image, 50,120,80,60);
	  // context.globalAlpha = 1.0;
	  // context.globalAlpha = 0.5;
       context.drawImage(base_image, 580, 120,80,60);
	  // // context.globalAlpha = 1.0;
	  // // context.globalAlpha = 0.5;
       context.drawImage(base_image, 580, 220,80,60);
	   context.drawImage(base_image, 400, 220,80,60);


	
	  	 child = new Image();
	   child.src = './static/images/c.png';
       context.drawImage(child, 580, 320,80,60);
	
	  }
	 
	  
	function drawBoard_for6stage(){
	 make_base_for6stage();
	
	 make_child_for6stage();
	
       for (var x = 0; x < bw; x += 175) {
            context.moveTo(0.5 + x + p, p);
            context.lineTo(0.5 + x + p, bh + p);
        }

        for (var x = 0; x < bh; x +=96) {
            context.moveTo(p, 0.5 + x + p);
            context.lineTo(bw + p, 0.5 + x + p);
        }

        context.strokeStyle = "black";
        context.stroke();
    }
	drawBoard_for6stage();
 //drawBoard()
    sixthball.draw();
    stage_count=goalCheck(stage_count);
}	
//end of 6 stage
//start of 7 stage

function startseventh(){
	//document.location.reload();
	requestAnimationFrame(startseventh);
	var context = canvas.getContext("2d");	
	c.clearRect(0, 0, innerWidth, innerHeight);
    var bw = 702;
    var bh = 386;
    var p = 7;
    var cw = bw + (p*2) + 2;
    var ch = bh + (p*2) + 2;
  function make_base_for7stage()
	  {
	  base_image = new Image();
	  base_image.src = '/static/images/7.jpg';
	  context.globalAlpha = 0.5;
      context.drawImage(base_image, 0, 0,745,420);
	  context.globalAlpha = 1.0;
	  }
	   // other images
	  function make_child_for7stage()
	  {
		  base_image = new Image();
	    base_image.src = '/static/images/stop.png';
	 
        context.drawImage(base_image, 30,70,40,20);
	    
        context.drawImage(base_image, 30,166,40,20);
	    context.drawImage(base_image, 117,166,40,20);
		context.drawImage(base_image, 117,214,40,20);

		context.drawImage(base_image, 204,262,40,20);
		context.drawImage(base_image, 552,118,40,20);
		context.drawImage(base_image, 552,214,40,20);
		context.drawImage(base_image, 465,354,40,20);
		context.drawImage(base_image, 204,25,40,20);
		context.drawImage(base_image, 291,115,40,20);
				  

	   child = new Image();
	   child.src = './static/images/work.jpeg';
	      // context.globalAlpha = 1.0;
	  // context.globalAlpha = 0.5;
       context.drawImage(child, 98,248,80,45);
       chi = new Image();
	   chi.src = './static/images/icece.png';
	   context.drawImage(chi, 185,155,80,40);
	   ch = new Image();
	   ch.src = './static/images/sick.png';
	   context.drawImage(ch, 185,299,80,40);
	   ch = new Image();
	   ch.src = './static/images/ted.jpeg';
	   context.drawImage(ch, 185,108,80,40);
	   ch = new Image();
	   ch.src = './static/images/c.png';
	   context.drawImage(ch, 278,16,80,40);
	   ch = new Image();
	   ch.src = './static/images/fb.png';
	   context.drawImage(ch, 624,60,80,40);
	   ch = new Image();
	   ch.src = './static/images/rb.jpg';
	   context.drawImage(ch, 446,253,80,40);
	   ch = new Image();
	   ch.src = './static/images/cry.jpg';
	   context.drawImage(ch, 533,301,80,40);

	
	  }
	 
	  
	function drawBoard_for7stage(){
	 make_base_for7stage();
	
	 make_child_for7stage();
	
       for (var x = 0; x < bw; x += 87.5) {
            context.moveTo(0.5 + x + p, p);
            context.lineTo(0.5 + x + p, bh + p);
        }

        for (var x = 0; x < bh; x +=48) {
            context.moveTo(p, 0.5 + x + p);
            context.lineTo(bw + p, 0.5 + x + p);
        }

        context.strokeStyle = "black";
        context.stroke();
    }
	drawBoard_for7stage();
 //drawBoard()
    seventhball.draw();
    //stage_count=goalCheck(stage_count);
}	
//end of 7 stage
//start of stage8
function starteighth(){
	//document.location.reload();
	requestAnimationFrame(starteighth);
	var context = canvas.getContext("2d");	
	c.clearRect(0, 0, innerWidth, innerHeight);
    var bw = 702;
    var bh = 386;
    var p = 7;
    var cw = bw + (p*2) + 2;
    var ch = bh + (p*2) + 2;
  function make_base_for8stage()
	  {
	  base_image = new Image();
	  base_image.src = '/static/images/8.jpg';
	  context.globalAlpha = 0.5;
      context.drawImage(base_image, 0, 0,745,420);
	  context.globalAlpha = 1.0;
	  }
	   // other images
	  function make_child_for8stage()
	  {
		  base_image = new Image();
	  base_image.src = '/static/images/icece.png';
	  // context.globalAlpha = 0.5;
	    // context.globalAlpha = 1.0;
	  // context.globalAlpha = 0.5;
      context.drawImage(base_image,10,240,139.5,73);
      context.drawImage(base_image,290,240,139.5,73);
      context.drawImage(base_image,150,317,139.5,73);
      context.drawImage(base_image,150,86,139.5,73);
      context.drawImage(base_image,430,163,139.5,73);
      context.drawImage(base_image,570,9,139.5,73);
	  // context.globalAlpha = 1.0;
	  // context.globalAlpha = 0.5;
   
	
	  }
	 
	  
	function drawBoard_for8stage(){
	 make_base_for8stage();
	
	 make_child_for8stage();
	
       for (var x = 0; x < bw; x += 140) {
            context.moveTo(0.5 + x + p, p);
            context.lineTo(0.5 + x + p, bh + p);
        }

        for (var x = 0; x < bh; x +=77) {
            context.moveTo(p, 0.5 + x + p);
            context.lineTo(bw + p, 0.5 + x + p);
        }

        context.strokeStyle = "black";
        context.stroke();
    }
	drawBoard_for8stage()
 //drawBoard()
    eighthball.draw();
    //stage_count=goalCheck(stage_count);
}
//end of stage8
//start of 9stage
function startninth(){
	//document.location.reload();
	requestAnimationFrame(startninth);
	var context = canvas.getContext("2d");	
	c.clearRect(0, 0, innerWidth, innerHeight);
    var bw = 702;
    var bh = 386;
    var p = 7;
    var cw = bw + (p*2) + 2;
    var ch = bh + (p*2) + 2;
  function make_base_for9stage()
	  {
	  base_image = new Image();
	  base_image.src = '/static/images/9.png';
	  context.globalAlpha = 0.5;
      context.drawImage(base_image, 0, 0,745,420);
	  context.globalAlpha = 1.0;
	  }
	   // other images
	  function make_child_for9stage()
	  {
		  base_image = new Image();
	  base_image.src = '/static/images/stop.png';
	  // // context.globalAlpha = 0.5;
	    // context.globalAlpha = 1.0;
	  // context.globalAlpha = 0.5;
      context.drawImage(base_image,29,235,60,40);
      context.drawImage(base_image,29,180,60,40);
      context.drawImage(base_image,229,15,60,40);
      context.drawImage(base_image,429,15,60,40);
      context.drawImage(base_image,329,70,60,40);
      context.drawImage(base_image,629,70,60,40);
	  
	  
      context.drawImage(base_image,529,125,60,40);
      context.drawImage(base_image,329,180,60,40);
      context.drawImage(base_image,129,345,60,40);
      
	  
	   child = new Image();
	   child.src = './static/images/f.jpg';
	      // context.globalAlpha = 1.0;
	  // context.globalAlpha = 0.5;
context.drawImage(child,312,290,91,40);
    // context.globalAlpha = 1.0;
	  // context.globalAlpha = 0.5;
	  
     
	  context.globalAlpha = 1.0;
	  context.globalAlpha = 0.5;
    

	
	
	  }
	 
	  
	function drawBoard_for9stage(){
	 make_base_for9stage();
	
	 make_child_for9stage();
	
       for (var x = 0; x < bw; x += 100) {
            context.moveTo(0.5 + x + p, p);
            context.lineTo(0.5 + x + p, bh + p);
        }

        for (var x = 0; x < bh; x +=55) {
            context.moveTo(p, 0.5 + x + p);
            context.lineTo(bw + p, 0.5 + x + p);
        }

        context.strokeStyle = "black";
        context.stroke();
    }
	
	drawBoard_for9stage();
 //drawBoard()
    ninthball.draw();
   // stage_count=goalCheck(stage_count);
}	
//end of 9 stage
//start of 10stage

function starttenth(){
	//document.location.reload();
	requestAnimationFrame(starttenth);
	var context = canvas.getContext("2d");	
	c.clearRect(0, 0, innerWidth, innerHeight);
    var bw = 702;
    var bh = 386;
    var p = 7;
    var cw = bw + (p*2) + 2;
    var ch = bh + (p*2) + 2;
  function make_base_for10stage()
	  {
	  base_image = new Image();
	  base_image.src = '/static/images/10.jpg';
	  context.globalAlpha = 0.5;
      context.drawImage(base_image, 0, 0,745,420);
	  context.globalAlpha = 1.0;
	  }
	   // other images
	  function make_child_for10stage()
	  {
		  base_image = new Image();
	  base_image.src = '/static/images/stop.png';
	  // context.globalAlpha = 0.5;
	   
      context.drawImage(base_image,29,228,50,30);
      context.drawImage(base_image,116,15,50,30);
      context.drawImage(base_image,547,57,50,30);
      context.drawImage(base_image,116,144,50,30);
      context.drawImage(base_image,290,96,50,30);
      context.drawImage(base_image,377,96,50,30);
      context.drawImage(base_image,640,96,50,30);
      context.drawImage(base_image,553,144,50,30);
      context.drawImage(base_image,466,182,50,30);
      context.drawImage(base_image,205,226,50,30);
      context.drawImage(base_image,292,226,50,30);
      context.drawImage(base_image,640,226,50,30);
      //context.drawImage(base_image,640,274,50,30);
	  
	  
	  
      context.drawImage(base_image,29,312,50,30);
      context.drawImage(base_image,117,312,50,30);
      context.drawImage(base_image,291,312,50,30);
      context.drawImage(base_image,465,312,50,30);
      context.drawImage(base_image,552,312,50,30);
      context.drawImage(base_image,552,267,50,30);
      context.drawImage(base_image,194,352,50,30);
     
      
	  
	   child = new Image();
	   child.src = './static/images/c.png';
	      // context.globalAlpha = 1.0;
	  // context.globalAlpha = 0.5;
  context.drawImage(child,116,96,60,40);
    // context.globalAlpha = 1.0;
	  // context.globalAlpha = 0.5;
	    child = new Image();
	   child.src = './static/images/chery.png';
	      // context.globalAlpha = 1.0;
	  // context.globalAlpha = 0.5;
    context.drawImage(child,640,10,60,40);
    // context.globalAlpha = 1.0;
	  // context.globalAlpha = 0.5;
	    child = new Image();
	   child.src = './static/images/f.png';
	      // context.globalAlpha = 1.0;
	  // context.globalAlpha = 0.5;
  context.drawImage(child,372,220,60,40);
  context.drawImage(child,372,307,60,40);
    // context.globalAlpha = 1.0;
	  // context.globalAlpha = 0.5;
	  // context.globalAlpha = 1.0;
	  // context.globalAlpha = 0.5;
	    child = new Image();
	   child.src = './static/images/candies.png';
	      // context.globalAlpha = 1.0;
	  // context.globalAlpha = 0.5;

    context.drawImage(child,630,342,70,50);
    // context.globalAlpha = 1.0;
	  // context.globalAlpha = 0.5;
	  
     
	  // context.globalAlpha = 1.0;
	  // context.globalAlpha = 0.5;
   
	  }
	 
	  
	function drawBoard_for10stage(){
	 make_base_for10stage();
	
	 make_child_for10stage();
	
       for (var x = 0; x < bw; x += 87.5) {
            context.moveTo(0.5 + x + p, p);
            context.lineTo(0.5 + x + p, bh + p);
        }

        for (var x = 0; x < bh; x +=42.5) {
            context.moveTo(p, 0.5 + x + p);
            context.lineTo(bw + p, 0.5 + x + p);
        }

        context.strokeStyle = "black";
        context.stroke();
    }
	 //end of 10stage
   drawBoard_for10stage();
 //drawBoard()
    tenthball.draw();
    stage_count=goalCheck(stage_count);
}





function stagesecondcall(){
	requestAnimationFrame(start);
	var context = canvas.getContext("2d");
	var bw = 702;
    var bh = 386;
    var p = 7;
    var cw = bw + (p*2) + 2;
    var ch = bh + (p*2) + 2;
  
   // var context = canvas.getContext("2d");
	
	 // for 2nd stagefunction make_base()
	
	  function make_base_forSecondStage()
	  {
	  base_image = new Image();
	  base_image.src = '/static/images/close_background.jpg';
	  context.globalAlpha = 0.5;
      context.drawImage(base_image, 0, 0,745,420);
	  context.globalAlpha = 1.0;
	  }
	   // other images
	  function make_child_forSecondStage()
	  {
	  // base_image = new Image();
	  // base_image.src = '/static/images/child.png';
	  // // context.globalAlpha = 0.5;
      // context.drawImage(base_image, 120, 130,70,40);
	  // // context.globalAlpha = 1.0;
	  // mage = new Image();
	  // mage.src ='static/images/stop.png';
	  // context.drawImage(mage, 520, 345,70,40);
	  
	  // mage = new Image();
	  // mage.src = 'static/images/mom.jpg';
	  // context.drawImage(mage, 620, 75,72,38);
	  // // chilfren image
	  // child = new Image();
	  // child.src = './static/images/children.jpg';
	  // // context.globalAlpha = 0.5;
      // context.drawImage(child, 420, 235,70,40);
	  // // context.globalAlpha = 1.0;
	  
	  candey = new Image();
	  candey.src = '/static/images/candey.jpg';
	
      context.drawImage(candey, 620, 340,60,50);
	
	  }
	  // draw stop images
	  function make_image_forSecondStage()
	  {
	  base_image = new Image();
	  base_image.src = '/static/images/stop.png';
	  context.globalAlpha = 0.5;
      context.drawImage(base_image, 150, 90,60,30);
	  context.globalAlpha = 1.0;
	  context.globalAlpha = 0.5;
      context.drawImage(base_image, 35, 220,60,30);
	  context.globalAlpha = 1.0;
	  context.globalAlpha = 0.5;
      context.drawImage(base_image, 270, 220,60,30);
	  context.globalAlpha = 1.0;
	  context.globalAlpha = 0.5;
      context.drawImage(base_image, 270, 155,60,30);
	  context.globalAlpha = 1.0;
	  context.globalAlpha = 0.5;
      context.drawImage(base_image, 270, 280,60,30);
	  context.globalAlpha = 1.0;
	   context.globalAlpha = 0.5;
      context.drawImage(base_image, 150, 280,60,30);
	  context.globalAlpha = 1.0;
	  context.globalAlpha = 0.5;
      context.drawImage(base_image, 500, 345,60,30);
	  context.globalAlpha = 1.0;
	  context.globalAlpha = 0.5;
      context.drawImage(base_image, 500, 220,60,30);
	  context.globalAlpha = 1.0;
	  context.globalAlpha = 0.5;
      context.drawImage(base_image, 500, 90,60,30);
	  context.globalAlpha = 1.0;
	  context.globalAlpha = 0.5;
	  context.drawImage(base_image, 610, 90,60,30);
	  context.globalAlpha = 1.0;
	  context.globalAlpha = 0.5;
	  context.drawImage(base_image, 610, 220,60,30);
	  context.globalAlpha = 1.0;
	  context.globalAlpha = 0.5;
      context.drawImage(base_image, 615, 25,60,30);
	  context.globalAlpha = 1.0;
	  }
	  
	 // for 2nd stage
	function drawBoard_forSecondStage(){
	 make_child_forSecondStage();
	 make_base_forSecondStage();
	 make_image_forSecondStage()
	
        for (var x = 0; x < bw; x += 116.5) {
            context.moveTo(0.5 + x + p, p);
            context.lineTo(0.5 + x + p, bh + p);
        }

        for (var x = 0; x < bh; x += 64) {
            context.moveTo(p, 0.5 + x + p);
            context.lineTo(bw + p, 0.5 + x + p);
        }

        context.strokeStyle = "black";
        context.stroke();
    }
	
	c.clearRect(0, 0, innerWidth, innerHeight);
			 
    drawBoard_forSecondStage();
	secondball.draw();
	console.log("bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb");
	
}
//...................................................................................................................................





// Event that check if keys are pressed
document.addEventListener('keydown', (e) => {
	if(e.keyCode === 37){
		keyPressed.left = true;
	}
	if(e.keyCode === 39){
		keyPressed.right = true;
	}
	if(e.keyCode === 38){
		keyPressed.up = true;
	}
	if(e.keyCode === 40){
		keyPressed.down = true;
	}
})

// Event that check if keys aren't pressed
document.addEventListener('keyup', (e) => {
	if(e.keyCode === 37){
		keyPressed.left = false;
	}
	if(e.keyCode === 39){
		keyPressed.right = false;
	}
	if(e.keyCode === 38){
		keyPressed.up = false;
	}
	if(e.keyCode === 40){
		keyPressed.down = false;
	}
});

//start();



/*
// Check function if you touch walls
function checkTouch(){

	for(let i = 0; i < wallArray.lenght; i++){
		let distX = Math.abs(ball.x - wallArray[i].x - wallArray[i].width / 2);
	    let distY = Math.abs(ball.y - wallArray[i].y - wallArray[i].height / 2);

		if (distX > (wallArray[i].width / 2 + ball.radius)) { return false; };
    	if (distY > (wallArray[i].height / 2 + ball.radius)) { return false; };

    	if (distX <= (wallArray[i].width / 2)) { return true; };
    	if (distY <= (wallArray[i].height / 2)) { return true; };

    	let dx = distX - wallArray[i].width / 2;
    	let dy = distY - wallArray[i].height / 2;

    	return (dx*dx+dy*dy<=(ball.radius * ball.radius));
	}
    
}*/
