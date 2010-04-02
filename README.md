Mootools Fx.Text
===

Effect to animated replace the text of an element. Useful for textscrollers/newsscrollers or so.
It requires Mootools and is tested with v1.2.4.

![Screenshot](http://github.com/SunboX/mootools-fx-text/raw/master/mootools-fx-text.png)


Demo
---

You can see a simple demo in [this shell](http://mooshell.net/xxx/).


How to Use
---

	#JS
	var fx = new Fx.Text('myElement', {
        duration: 'long',
        transition: Fx.Transitions.Bounce.easeOut
    });
    
    fx.start('Hello, World!');


Options
---

See: [Fx Options](http://mootools.net/docs/core/Fx/Fx)



License
---

See [license](http://github.com/SunboX/mootools-fx-text/blob/master/license) file.