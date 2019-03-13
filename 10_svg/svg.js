//Damian Wasilewicz
//SoftDev pd6
//K10 -- Connect the Dots
//2019-03-14


var pic = document.getElementById("vimage");
var clr = document.getElementById("but_clear");
var lx = 0;
var ly = 0;
var ltf = false;





pic.addEventListener('click', function(e) {
  var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  x = e.offsetX;
  y = e.offsetY;
  c.setAttribute("cx", x);
  c.setAttribute("cy", y);
  c.setAttribute("r", "15");
  c.setAttribute("fill", "red");
  c.setAttribute("stroke", "black");
  c.addEventListener('click', function(e) {
    c.setAttribute("fill", "green")
  })
  pic.appendChild(c);
  if(ltf){
    var l = document.createElementNS("http://www.w3.org/2000/svg", "line");
    l.setAttribute("x1", lx);
    l.setAttribute("y1", ly);
    l.setAttribute("x2", x);
    l.setAttribute("y2", y);
    l.setAttribute("stroke", "black");
    pic.appendChild(l);
  }
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
