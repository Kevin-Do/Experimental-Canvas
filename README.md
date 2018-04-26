## Web Graphics Experiments

An exploration into rendering high-performance and interactive graphics for web applications.

HTML5 Canvas:

```
cd Canvas\ Exploration/
http-server
```

Exposes a bitmap canvas for rendering graphics on the fly.
This graphics system does not have a DOM, allowing the developer to animate a lot of objects without overhead

* Pros:
  * Drawing capabilities are lightning-fast
  * Can respond to Javascript events, being that it drawn by scripting
  * Better for faster animations and heavy bitmap manipulation
  * Can handle way more objects being that they are not added to the DOM
* Cons:
  * Resolution dependent, drawings may not look as good scaled
  * Immediate rendering, everything is represented as pixels in a canvas buffer

SVG:

```
cd SVG\ Exploration/
http-server
```

TODO:

* Add webpack configuration for hot-reloading
* Animation and benchmark tests
