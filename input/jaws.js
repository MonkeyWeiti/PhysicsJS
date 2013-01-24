var JawsMouseInput = Input.extend({
    init: function(){
        this._super();
    },
    currentPos: function(){
        return new Vector3(jaws.mouse_x, jaws.mouse_y, 0);
    },
    performPrimaryAction: function(){
        return jaws.pressed('left_mouse_button');
    }
});

var JawsKeyBrdInput = Input.extend({
    init: function(){
        this._super();

    },
    currentPos: function(){
        if(jaws.pressed('left'))
            this.pos.x--;
        if(jaws.pressed('right'))
            this.pos.x++;
        if(jaws.pressed('down'))
            this.pos.y++;
        if(jaws.pressed('up'))
            this.pos.y--;
        return this.pos;
    },
    performPrimaryAction: function(){
        return jaws.pressed('space');
    }
});

var NativeKeyBrdInput = Input.extend({


    isPressed: function(keyCode) {
    return this._pressed[keyCode];
    },
    init: function(){
            this._super();
            this._pressed = new Array()
            window.addEventListener('keyup',this.onKeyup(event), false);
            window.addEventListener('keydown', this.onKeydown(event), false);
            this.SPACE = 32,
            this.LEFT = 37,
            this.UP = 38,
            this.RIGHT = 39,
            this.DOWN = 40
    },
    currentPos: function(){
        if(this.isPressed(this.LEFT))
            this.pos.x--;
        if(this.isPressed(this.RIGHT))
            this.pos.x++;
        if(this.isPressed(this.DOWN))
            this.pos.y++;
        if(this.isPressed(this.UP))
            this.pos.y--;
        return this.pos;
    },
    performPrimaryAction: function(){
        return this.isPressed(this.SPACE);
    },
    onKeydown: function(event) {
    this._pressed[event.keyCode] = true;
    },
    onKeyup: function(event) {
    delete this._pressed[event.keyCode];
    },
});