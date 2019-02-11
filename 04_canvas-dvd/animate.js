// vars that set up function
var c = document.getElementById("playground");
var ctx = c.getContext("2d");
var rad = 0;
var growing = 1;
var reqId;
//cyan
ctx.fillStyle = "#00ffff";

// retrieve buttons from index
var stop = document.getElementById("stop");
var animeight = document.getElementById("circle");
var dvd = document.getElementById("dvd");
//draw the expanding circle
var drawDot = function() {
  //prevents the function from accelerating the circle each time clicked
  stopIt();
  //clears old frame
  ctx.clearRect(0,0,c.width,c.height);
  //if reaches edge, stop growing
  if(rad == c.width/2){
    growing = 0;
  }
  //if shrinks to center, start growing again
  if(rad == 0){
    growing = 1;
  }
  //expand
  if(growing){
    rad += 1;
  }
  //shrink
  else{
    rad-=1;
  }
  //draws circle
  ctx.beginPath();
  ctx.arc(c.width/2, c.height/2, rad, 0, 2 *Math.PI);
  ctx.stroke();
  ctx.fill();
  //gets new frame
  reqId = window.requestAnimationFrame(drawDot);
};

var stopIt = function() {
  //stops request for next animation frame
  window.cancelAnimationFrame(reqId);
}
var yd = 1;
// if positive, y coord is added to. if neg, subtracted from.
var xd = 1;
// if positive, x coord is added to. if neg, subtracted from.
//dimensions of logo
var rectWidth = 100;
var rectHeight = 50;
//starting spot
var x = Math.floor(Math.random() * (c.width - rectWidth));
var y = Math.floor(Math.random() * (c.height - rectHeight));


var dvdLogoSetup = function(){
  //prevents acceleration upon multiple clicks
  stopIt();
  // var rectX = Math.floor( Math.random() * (c.width-rectWidth));
  // var rectY = Math.floor( Math.random() * (c.height - rectHeight));
  //if at border, direction of logo reverses
  if(x + 100 == c.width || x == 0){
    xd = xd * -1;
  }
  if(y + 50 == c.height || y == 0){
    yd = yd * -1;
  }
  //nested if statements go through possibilities of xd and yd and determine what gets
  //added to or subtracted to in terms of coordinates
  if(yd == 1){
    if(xd == 1){
      x++;
      y++;
    }
    else{
      x--;
      y++;
    }
  }
  else{
    if(xd == 1){
      x++;
      y--;
    }
    else{
      x--;
      y--;
    }
  }
  //clears old image and prepares for ne wone
  ctx.clearRect(0,0,c.width,c.height);
  //creates new image and establishes source as the .jpg file in directory
  var logo = new Image();
  logo.src = "logo_dvd.jpg";
  //draws specified image at coordinates and with desired dimensions. last two parameters are optional,
  //but if they're not specified then the image is too large for the frame
  ctx.drawImage(logo, x, y, rectWidth, rectHeight);
  //set requestId to new frame
  reqId = window.requestAnimationFrame(dvdLogoSetup);
}





//assigns functions to buttons
animeight.addEventListener("click", drawDot);
stop.addEventListener("click", stopIt);
dvd.addEventListener("click", dvdLogoSetup);
