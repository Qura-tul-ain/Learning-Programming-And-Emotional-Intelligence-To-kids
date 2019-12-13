
var canvas = document.getElementById("CanvasForTeacher");
canvas.width = 712;
canvas.height = 408;

var c = canvas.getContext('2d');




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

	this.moveTeacherRight = function(){

		   if(this.x + radius < canvas.width){
				this.x += this.dx + colvalueForMovement;
		   }

		  this.draw();
	}
	
	this.moveTeacherDown = function(){
		
			if(this.y + radius < canvas.height){
				this.y += this.dy + rowvalueForMovement;
			}
			
		   this.draw();
		
	}
	
	
	this.moveTeacherUp = function(){
		
			 if(this.y - radius > 0){
				this.y -= this.dy + rowvalueForMovement ;
			 }
			
		   this.draw();
		
	}
	
	
	
	this.moveTeacherLeft = function(){
		
			if(this.x - radius > 0){
				this.x -= this.dx +colvalueForMovement;
			}
			
		   this.draw();
		
	}
}
let ball = new Ball(50, 33, 17, 5, 5);



//console.log("maze")
var columns;
var rows;
var hurdlerowlist;
var hurdlecollist;
var imageslist;
var imageRlist;
var imageClist;
var colvalueForMovement;
function getcol(col,row,hurdlerowpos,hurdlecolpos,imagelist,imagerowlist,imagecollist){	

	columns=col;
	rows=row;
	hurdlerowlist=hurdlerowpos;// all rows having hurdles
	hurdlecollist=hurdlecolpos;// columns having hurdles
	imageslist=imagelist;
	imageRlist=imagerowlist;// rows having images except background
	imageClist=imagecollist;
	//console.log(hurdlerowlist,rows,"........................................................");
	
}


function start(){
	//document.location.reload();
	requestAnimationFrame(start);
		
	c.clearRect(0, 0, innerWidth, innerHeight);
	var context = canvas.getContext("2d");
    var bw = 700;
    var bh = 386;
	//console.log(columns,"eeee");
    var p = columns;
	colvalue=700/p;
	colvalue=colvalue-0.3;
	rowvalue=386/rows;
	rowvalueForMovement=(rowvalue-5);// only for row movement
	colvalueForMovement=(colvalue-4);// only for col movement
	rowvalue=rowvalue.toFixed(0); // get only one value after point and return in string form
	rowvalue=Number(rowvalue);// convert string to int
	console.log(rowvalue);
    console.log(colvalue);
	console.log(colvalueForMovement);
    var cw = bw + (p*2) + 2;
    var ch = bh + (p*2) + 2;
	
	// for 1st stage ....
	// Draw backgroung image
	
	// function make_image()
	  // {
	  // base_image = new Image();
	  // base_image.src = '/static/images/stop.png';
	  // context.globalAlpha = 0.5;
	  // context.drawImage(base_image,(colvalue-75)+((2-1)*colvalue),(rowvalue-35)+((2-1)*rowvalue),60,30);
	  // context.globalAlpha = 1.0;
	  // context.globalAlpha = 0.5;
	// }
	var imageRowNo,imageColNo;
	for (var x =0 ;x<imageslist.length;x+=1){
		
	    imageRowNo=imageRlist[x];
        imageColNo=imageClist[x];
		//console.log(imageColNo);
		putimage=imageslist[x];
		console.log(putimage);
		base_image = new Image();
	    base_image.src = '/static/images/'+ putimage+'.jpg';
	    context.globalAlpha = 0.5;
	    context.drawImage(base_image,(colvalue-75)+((imageColNo-1)*colvalue),(rowvalue-35)+((imageRowNo-1)*rowvalue),60,30);
	    context.globalAlpha = 1.0;
	    context.globalAlpha = 0.5;
		
		
		
	}
	
    var rowNo;
	var colNo;
    for (var x =0 ;x<hurdlecollist.length;x+=1){
	    rowNo=hurdlerowlist[x];
        colNo=hurdlecollist[x];		
		//console.log(rowNo,colNo,"valeeeeeeeeeee"); 
		base_image = new Image();
	    base_image.src = '/static/images/stop.png';
	    context.globalAlpha = 0.5;
	    context.drawImage(base_image,(colvalue-75)+((colNo-1)*colvalue),(rowvalue-35)+((rowNo-1)*rowvalue),60,30);
	    context.globalAlpha = 1.0;
	    context.globalAlpha = 0.5;
	   
    } 
   
	
	  
	

	function drawBoard(){
		//make_image();

        for (var x = 0; x < bw; x += colvalue) {
            context.moveTo(0.5 + x + p, p);
            context.lineTo(0.5 + x + p, bh + p);
        }

        for (var x = 0; x < bh; x += rowvalue) {
            context.moveTo(p, 0.5 + x + p);
            context.lineTo(bw + p, 0.5 + x + p);
        }

        context.strokeStyle = "blue";
        context.stroke();
    }
	  
	
	  
	stage_count=1;
	
	// c.clearRect(0, 0, innerWidth, innerHeight);

	//wallsCheck();
   // goalCheck(stage_count);
   
     ball.draw();
    drawBoard();
 


}
start();