/*
---
 
name: Element.retype
 
description: Effect to animated replace the text of an element.

authors: Dipl.-Ing. (FH) André Fiedler <kontakt@visualdrugs.net>

copyright: Copyright (c) 2010 - 2012, Dipl.-Ing. (FH) André Fiedler <kontakt@visualdrugs.net>
 
license: MIT-style license.

version: 1.1
 
requires:
  - Fx.Text
 
provides: Element.retype
 
...
*/

Element.Properties.retype = {

	set: function(options){
		var retype = this.retrieve('retype');
		if (retype)
			retype.cancel();
		return this.eliminate('retype').store('retype:options', Object.append({
			link: 'cancel'
		}, options));
	},
	
	get: function(options){
		if (options || !this.retrieve('retype')){
			if (options || !this.retrieve('retype:options'))
				this.set('retype', options);
			this.store('retype', new Fx.Text(this, this.retrieve('retype:options')));
		}
		return this.retrieve('retype');
	}
	
};

Element.implement({

	retype: function(from, to){
		this.get('retype').start(from, to);
		return this;
	}
	
});
