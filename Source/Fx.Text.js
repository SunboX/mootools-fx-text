/*
---
 
name: Fx.Text
 
description: Effect to animated replace the text of an element.

authors: Dipl.-Ing. (FH) André Fiedler <kontakt@visualdrugs.net>

copyright: Copyright (c) 2010 Dipl.-Ing. (FH) André Fiedler <kontakt@visualdrugs.net>
 
license: MIT-style license.

version: 1.2.1
 
requires: 
  - Core/Element
  - Core/Fx
 
provides: Fx.Text
 
...
*/

Fx.Text = new Class({

	Extends: Fx,
	
	initialize: function(element, options){
		this.element = this.subject = document.id(element);
		this.parent(options);
	},
	
	set: function(now){
		this.element.set('text', now);
		return this;
	},
	
	step: function(){
		if (!this.to){
			this.to = this.from;
			this.from = this.element.get('text') || '';
		}
		return this.parent();
	},
	
	compute: function(from, to, delta){
		var l = Math.round(to.length * delta),
			r = Math.round((from.length - to.length) * delta);
		return to.substr(0, l) + from.substr(l, from.length - l - r);
	}
	
});
