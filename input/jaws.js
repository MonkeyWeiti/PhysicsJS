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

var KeypressKeyBrdInput = Input.extend({

    init: function(){
            this._super();
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
    demo_2.combos = [
    {
        keys: "w",
        on_keyup: function() {
            return demo_2.move_piece("N");
        }
    }, {
        keys: "a",
        on_keyup: function() {
            return demo_2.move_piece("W");
        }
    }, {
        keys: "s",
        on_keyup: function() {
            return demo_2.move_piece("S");
        }
    }, {
        keys: "d",
        on_keyup: function() {
            return demo_2.move_piece("E");
        }
    }, {
        keys: "w a",
        on_keyup: function() {
            return demo_2.move_piece("NW");
        }
    }, {
        keys: "w d",
        on_keyup: function() {
            return demo_2.move_piece("NE");
        }
    }, {
        keys: "s a",
        on_keyup: function() {
            return demo_2.move_piece("SW");
        }
    }, {
        keys: "s d",
        on_keyup: function() {
            return demo_2.move_piece("SE");
        }
    }
];
});