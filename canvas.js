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

var wallBooster = 1.05;

//Circle Object
function Circle(x, y, radius, dx, dy) {
  this.x = x;
  this.y = y;
  this.radius = radius;
  this.dx = dx;
  this.dy = dy;

  this.draw = function() {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.stroke();
  };

  this.update = function() {
    //Handle screen edge collisions
    if (this.x + this.radius > window.innerWidth || this.x - this.radius < 0) {
      this.dx = -(this.dx * wallBooster);
    }

    if (this.y + radius > window.innerHeight || this.y - this.radius < 0) {
      this.dy = -(this.dy * wallBooster);
    }

    this.x += this.dx;
    this.y += this.dy;

    this.draw();
  };
}

var circle = new Circle(100, 100, 50, 2, 3);

//Animations
function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, window.innerWidth, innerHeight);
  circle.update();
  console.log("Animate");
}

animate();
