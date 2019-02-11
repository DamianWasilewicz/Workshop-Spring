var c = document.getElementByID("playground");
var dotButton = document.getElementyByID("circle");
var stopButton = document.getElementByID("stop");

var ctx = c.getContext("2d")

ctx.fillStyle = "#00ffff";

var growing = 0;
var radius = 0;
var timestamp = 0;

var clear = function(e){ }console.log(
);

var drawDot = function() {
  if (growing )
}

var run = function(){
  if(growing > 0){
    window.requestAnimationFrame
  }
}

var stopIt =function() {
}

function step(timestamp) {
  if (growing == 0) {
    growing = timestamp;
  }
  var progress = timestamp - growing;
  ctx.beginPath();
  console.log(timestamp);
}

dotButton.addEventListener("click", drawDot)

window.requestAnimationFrame(frame)
