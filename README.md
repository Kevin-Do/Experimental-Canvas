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
  * Immediate rendering, everything is represented as pixels in a canvas buffer and interactions are applied to the canvas as a whole
  * Poor text rendering ability
  * Relient on scripts and loaded via Javascript meaning no SEO server-side parsing

SVG:

```
cd SVG\ Exploration/
http-server
```

Defines vector-based graphics in an XML format. SVG do not lose any quality on zooming or resizing. Graphics are developed with mathmatical formulas. SVG objects are DOM elements allowing for more accessibility.

* Pros:
  * Resolution independent
  * Fast for large objects
  * Support for event handlers
  * Retained rendering means that objects stick around and are more accessible as objects are represented in the DOM
  * Many tools are create SVG art
  * Optimized for SEO and as text within SVG's can still be parsed
* Cons:
  * Slow for many objects
  * Limited by DOM in ability to handle many objects
  * Complicated for high-intensity and complicated artwork

## Use Cases

* Browser Game?
  * Canvas
* Simple/Minimalistic Graphic?
  * SVG
* Animating tons of objects?
  * Canvas
* Need accessible graphs and diagrams?
  * SVG
* Complex artwork or illustrations?
  * Canvas

TODO:

* Add webpack configuration for hot-reloading
* Animation and benchmark tests
