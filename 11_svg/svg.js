//Damian Wasilewicz
//SoftDev pd6
//K11 -- Ask Circles [Change || Die] …While On The Go
//2019-03-18


var pic = document.getElementById("vimage");
var clr = document.getElementById("but_clear");
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
  }
});
