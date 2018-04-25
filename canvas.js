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
