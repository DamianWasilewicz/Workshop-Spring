//Damian Wasilewicz
//SoftDev pd6
//K11 -- Ask Circles [Change || Die] …While On The Go
//2019-03-18


var pic = document.getElementById("vimage");
var clr = document.getElementById("but_clear");
var mv = document.getElementById("but_move");
var lx = 0;
var ly = 0;
var ltf = false;



pic.addEventListener('click', function(e) {
  var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  x = e.offsetX;
  y = e.offsetY;
  if(e.target.nodeName != "circle"){
  c.setAttribute("cx", x);
  c.setAttribute("cy", y);
  c.setAttribute("r", "15");
  c.setAttribute("fill", "red");
  c.setAttribute("stroke", "black");
  c.setAttribute("xVel", 1);
  c.setAttribute("yVel", 1);
  }
  c.addEventListener('click', function(e) {
    if(c.getAttribute("fill") == "green"){
      c.setAttribute("cx", Math.floor(Math.random() * 500));
      c.setAttribute("cy", Math.floor(Math.random() * 500));
      c.setAttribute("fill", "red")
    }
    else{
      c.setAttribute("fill", "green");
    }
  })
  pic.appendChild(c);
  lx = e.offsetX;
  ly = e.offsetY;
  ltf = true;
}
);

clr.addEventListener('click', function(e) {
  while(pic.lastChild) {
    pic.removeChild(pic.lastChild);
//  location.reload();
    lx = 0;
    ly = 0;
    ltf = false;
    window.cancelAnimationFrame(requestID);
  }
});

var requestID;
var animate = function(){
    window.cancelAnimationFrame(requestID);
    var i;
    var children = pic.children;
    for (i = 0; i < children.length; i++) {
        var circle = children[i];
        var r = circle.getAttribute("r");
        var cx = parseInt(circle.getAttribute("cx")) + parseInt(circle.getAttribute("xVel"));
        var cy = parseInt(circle.getAttribute("cy")) + parseInt(circle.getAttribute("yVel"));
        var xVel = parseInt(circle.getAttribute("xVel"));
        var yVel = parseInt(circle.getAttribute("yVel"));

        if (cx > pic.getAttribute("width") - r || cx < r) circle.setAttribute("xVel", xVel * -1);
        if (cy > pic.getAttribute("height") - r || cy < r) circle.setAttribute("yVel", yVel * -1);

        circle.setAttribute("cx", cx);
        circle.setAttribute("cy", cy);
    }
    requestID = window.requestAnimationFrame(animate);
};
mv.addEventListener("click", animate);
