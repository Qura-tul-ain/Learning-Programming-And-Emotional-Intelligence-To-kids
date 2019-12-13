var canvas = document.getElementById("canvas");
canvas.width = 730;
canvas.height = 415;

const c = canvas.getContext('2d');

// Object that checks if key is pressed
let keyPressed = {
	left: false,
	right: false,
	up: false,
	down: false
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
// Ball object
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
// let wallArray = [
// new Wall(0, 100, canvas.width - 150, 5),
// new Wall(150, 200, canvas.width, 5),
// new Wall(150, 200, 5, 125),
// new Wall(250, canvas.height - 125, 5, 125),
// new Wall(350, 200, 5, 125),
// new Wall(450, canvas.height - 125, 5, 125),
// new Wall(550, 200, 5, 125),
// new Wall(650, canvas.height - 125, 5, 125)
// ];

// Create the ball using the object 
let ball = new Ball(50, 35, 20, 7, 7);


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

// function wallsCheck(){
	// if(RectCircleColliding(ball,imagesArr[0])){
		// alert("You lost. Try Again!");
		// document.location.reload();
	// }
	// if(RectCircleColliding(ball, imagesArr[1])){
		// alert("You lost. Try Again!");
		// document.location.reload();
	// }
	// if(RectCircleColliding(ball, imagesArr[2])){
		// alert("You lost. Try Again!");
		// document.location.reload();
	// }
	// if(RectCircleColliding(ball, imagesArr[3])){
		// alert("You lost. Try Again!");
		// document.location.reload();
	// }
	// if(RectCircleColliding(ball, imagesArr[4])){
		// alert("You lost. Try Again!");
		// document.location.reload();
	// }
	// if(RectCircleColliding(ball, imagesArr[5])){
		// alert("You lost. Try Again!");
		// document.location.reload();
	// }
	// if(RectCircleColliding(ball, wallArray[6])){
		// alert("You lost. Try Again!");
		// document.location.reload();
	// }
	// if(RectCircleColliding(ball, wallArray[7])){
		// alert("You lost. Try Again!");
		// document.location.reload();
	// }
// }

// Check function if ball touchs goal square
function goalCheck(){
	if(RectCircleColliding(ball, S1)){
		alert("YOU LOST!");
		document.location.reload();
	}
	if(RectCircleColliding(ball, S2)){
		alert("YOU LOST");
		document.location.reload();
	}
	if(RectCircleColliding(ball, S3)){
		alert("YOU LOST");
		document.location.reload();
	}
	if(RectCircleColliding(ball, S4)){
		alert("YOU LOST");
		document.location.reload();
	}
	if(RectCircleColliding(ball, S5)){
		alert("YOU LOST");
		document.location.reload();
	}
	if(RectCircleColliding(ball, S6)){
		alert("YOU LOST");
		document.location.reload();
	}
	if(RectCircleColliding(ball, S7)){
		alert("YOU LOST");
		document.location.reload();
	}
	if(RectCircleColliding(ball, S8)){
		alert("YOU LOST");
		document.location.reload();
	}
	if(RectCircleColliding(ball, S9)){
		alert("YOU LOST");
		document.location.reload();
	}
	if(RectCircleColliding(ball, S10)){
		alert("YOU LOST");
		document.location.reload();
	}
	if(RectCircleColliding(ball, G1)){
		alert("YOU SHARED");
	    ball.moveRight();
		
		// document.location.reload();
	}
	// if(RectCircleColliding(ball, G2)){
		// alert("YOU SHARED");
		//document.location.reload();
	// }
	if(RectCircleColliding(ball, G3)){
		alert("YOU SHARED");
		// document.location.reload();
	}
	// if(RectCircleColliding(ball, G4)){
		// alert("YOU SHARED");
		// ball.moveRight();
		//document.location.reload();
	// }
	if(RectCircleColliding(ball, G5)){
		alert("YOU Won");
	   document.location.reload();
	}
}
 //adding images to array


function start(){
	requestAnimationFrame(start);
	c.clearRect(0, 0, innerWidth, innerHeight);
    var bw = 702;
    var bh = 386;
    var p = 7;
    var cw = bw + (p*2) + 2;
    var ch = bh + (p*2) + 2;

  
    var context = canvas.getContext("2d");
	// Draw backgroung image
    function make_base()
	  {
	  base_image = new Image();
	  base_image.src = '/static/images/background.jpg';
	  context.globalAlpha = 0.5;
      context.drawImage(base_image, 0, 0,745,420);
	  context.globalAlpha = 1.0;
	  }
	  make_base();
	   // other images
	  function make_child()
	  {
	  base_image = new Image();
	  base_image.src = '/static/images/child.png';
	  // context.globalAlpha = 0.5;
      context.drawImage(base_image, 120, 130,70,40);
	  // context.globalAlpha = 1.0;
	  mage = new Image();
	  mage.src ='static/images/stop.png';
	  context.drawImage(mage, 520, 345,70,40);
	  
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
	  // function make_image()
	  // {
	  // base_image = new Image();
	  // base_image.src = '/static/images/stop.png';
	  // context.globalAlpha = 0.5;
      // context.drawImage(base_image, 120, 20,60,30);
	  // context.globalAlpha = 1.0;
	  // context.globalAlpha = 0.5;
      // context.drawImage(base_image, 120, 75,60,30);
	  // context.globalAlpha = 1.0;
	  // context.globalAlpha = 0.5;
      // context.drawImage(base_image, 120, 185,60,30);
	  // context.globalAlpha = 1.0;
	  // context.globalAlpha = 0.5;
      // context.drawImage(base_image, 120, 235,60,30);
	  // context.globalAlpha = 1.0;
	  // context.globalAlpha = 0.5;
      // context.drawImage(base_image, 120, 290,60,30);
	  // context.globalAlpha = 1.0;
	   // context.globalAlpha = 0.5;
      // context.drawImage(base_image, 320, 20,60,30);
	  // context.globalAlpha = 1.0;
	  // context.globalAlpha = 0.5;
      // context.drawImage(base_image, 320, 235,60,30);
	  // context.globalAlpha = 1.0;
	  // context.globalAlpha = 0.5;
      // context.drawImage(base_image, 320, 345,60,30);
	  // context.globalAlpha = 1.0;
	  // context.globalAlpha = 0.5;
      // context.drawImage(base_image, 625, 185,60,30);
	  // context.globalAlpha = 1.0;
	  // context.globalAlpha = 0.5;
      // context.drawImage(base_image, 625, 290,60,30);
	  // context.globalAlpha = 1.0;
	  // }
	 
	
    function drawBoard(){
	 //make_image();
	 // make_child();
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

    drawBoard();

	ball.draw();
	goalCheck();
}



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

start();



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
