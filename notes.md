## Learning Canvas

Canvas Size Management

* Resizing with CSS (100% width and height) does not accomplish full size because HTML does not take up the entire screen
* Instead we will set the w/h with JS

```js
var canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
```
