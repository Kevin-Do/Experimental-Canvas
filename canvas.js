//Search for canvas HTML element
var canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//Drawing Canvas Possessive Shapes

//Super object for drawing in a 2D space
var c = canvas.getContext("2d");

//Rect: (x, y, w, h)
c.fillStyle = "red";
c.fillRect(100, 100, 200, 50);

//Set color before fillRect
c.fillStyle = "green";
c.fillRect(200, 200, 100, 100);

//Line: begin -> move -> line to -> stroke
c.beginPath();
c.moveTo(50, 300);
c.lineTo(400, 20);
c.lineTo(450, 200);
c.strokeStyle = "blue";
c.stroke();

//Arc: (x, y, radius, startAngle, endAngle, clockwise)
c.beginPath();
c.arc(300, 300, 50, 0, Math.PI * 2, false);
c.strokeStyle = "purple";
c.stroke();

var x = 100;
var y = 100;
var dx = 2;
var dy = 2;
var radius = 40;
var wallBooster = 1.05;

//Animations
function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, window.innerWidth, window.innerHeight);
  c.beginPath();
  c.arc(x, y, radius, 0, Math.PI * 2, false);
  c.stroke();

  //Reflection on edges of screen
  if (x + radius > window.innerWidth || x - radius < 0) {
    dx = -(dx * wallBooster);
  }

  if (y + radius > window.innerHeight || y - radius < 0) {
    dy = -(dy * wallBooster);
  }

  x += dx;
  y += dy;
  console.log("Animate");
}

animate();
