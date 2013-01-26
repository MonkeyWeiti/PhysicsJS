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