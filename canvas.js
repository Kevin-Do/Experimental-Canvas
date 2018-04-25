//Search for canvas HTML element
var canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//Event Listener for Mouse Position
var mousePos = {
  x: 100,
  y: 100
};

window.addEventListener("mousemove", function(e) {
  mousePos.x = e.x;
  mousePos.y = e.y;
});

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

//Properties
var wallBooster = 1.05;
var colorList = ["blue", "red", "orange", "purple", "green"];
var numCircles = 100;

//Circle Object
function Circle(x, y, radius, dx, dy) {
  this.x = x;
  this.y = y;
  this.radius = radius;
  this.dx = dx;
  this.dy = dy;
  this.color = colorList[Math.floor(Math.random() * colorList.length)];
  this.highlighted = false;
  this.highlightedColor = "black";

  this.draw = function() {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.fillStyle = this.highlighted ? this.highlightedColor : this.color;
    c.fill();
  };

  this.velocity = function() {
    this.x += this.dx;
    this.y += this.dy;
  };

  this.handleScreenEdges = function() {
    if (this.x + this.radius > window.innerWidth || this.x - this.radius < 0) {
      this.dx = -(this.dx * wallBooster);
    }

    if (this.y + radius > window.innerHeight || this.y - this.radius < 0) {
      this.dy = -(this.dy * wallBooster);
    }
  };

  this.mouseProximity = function(range) {
    xDiff = Math.abs(mousePos.x - this.x) <= range;
    yDiff = Math.abs(mousePos.y - this.y) <= range;
    this.highlighted = xDiff && yDiff;
    this.draw();
  };

  this.update = function() {
    //Handle screen edge collisions

    this.mouseProximity(this.radius * 3);
    this.handleScreenEdges();
    this.velocity();
    this.draw();
  };
}

var circleList = [];

for (var i = 0; i < numCircles; i++) {
  var radius = Math.floor(Math.random() * 50 + 10);
  var x = Math.random() * (innerWidth - radius * 2) + radius;
  var y = Math.random() * (innerHeight - radius * 2) + radius;
  var dx = Math.random() - 0.5;
  var dy = Math.random() - 0.5;

  circleList.push(new Circle(x, y, radius, dx * 3, dy * 3));
}

//Animations
function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);

  for (var i = 0; i < numCircles; i++) {
    circleList[i].update();
  }
}

animate();
