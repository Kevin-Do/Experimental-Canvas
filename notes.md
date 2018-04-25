## Learning Canvas

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
