//Search for canvas HTML element
var canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//Drawing Canvas Possessive Shapes

//Super object for drawing in a 2D space
var c = canvas.getContext("2d");

//Params: x, y (relative to top left corner) position
// Width, Height Sizes for the Rect
c.fillRect(100, 100, 200, 50);
