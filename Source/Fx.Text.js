/*
---
 
name: Fx.Text
 
description: Effect to animated replace the text of an element.

authors: Dipl.-Ing. (FH) André Fiedler <kontakt@visualdrugs.net>

copyright: Copyright (c) 2010 Dipl.-Ing. (FH) André Fiedler <kontakt@visualdrugs.net>
 
license: MIT-style license.

version: 1.0
 
requires: [Fx]
 
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
        if (!this.to) {
            this.to = this.from;
            this.from = this.element.get('text');
        }
        return this.parent();
    },
    
    compute: function(from, to, delta){
        var len = Math.max(from.length, to.length) - 1;
        var chars = Math.round(len * delta);
        for (i = 0; i <= chars; i++) {
            if (to.length < from.length) 
                from = from.substr(0, from.length - i);
            if (i < to.length) {
                var chr = to.charAt(i);
                if (i >= from.length) 
                    from += chr;
                else 
                    from = from.setCharAt(i, chr);
            }
        }
        return from;
    }
});

String.implement({
    setCharAt: function(index, chr){
        if (index >= this.length) 
            return this;
        return this.substr(0, index) + chr + this.substr(index + 1);
    }
});