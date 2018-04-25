## Canvas Section

Local Play:
[http-server](https://www.npmjs.com/package/http-server)
Shf-R

Canvas Size Management

* Resizing with CSS (100% width and height) does not accomplish full size because HTML does not take up the entire screen
* Instead we will set the w/h with JS

```js
var canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
```

Drawing a Rectangle

```js
//Super object for drawing in a 2D space
var c = canvas.getContext("2d");

//Params: x, y (relative to top left corner) position
// Width, Height Sizes for the Rect
c.fillRect(100, 100, width, height);
```

Adding Color and Constructing a Line:

```js
//Line:
c.beginPath();
c.moveTo(50, 300);
c.lineTo(400, 20);
c.lineTo(450, 200);
c.strokeStyle = "blue";
c.stroke();
```

Drawing Arcs:

```js
//Arc: (x, y, radius, startAngle, endAngle, clockwise)
c.beginPath();
c.arc(300, 300, 50, 0, Math.PI * 2, false);
c.strokeStyle = "purple";
c.stroke();
```

Creating Animations:

* Construct recursive loop with request animation frame
* Use clearRect to remove prior frames (x,y, w,h)
* Define velocity and use (x,y) for screen collisions

```js
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
```

Creating self-contained shapes (prototypal objects js)

* Function with draw and update functions

```js
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
```
