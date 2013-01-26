var KeypressKeyBrdInput = Input.extend({
    init: function(){
        this._super();
        this.keys = new Array();
        this.registerCombos();
    },
    registerCombos: function(){
        keypress.register_combo({
            "keys"              : "left",
            "on_keydown"        : function(e) { this.setKeyDown(e.keyCode); },
            "on_keyup"          : function(e) { this.setKeyUp(e.keyCode); },
            "this"              : this,
            "prevent_repeat"    : false
        });
        keypress.register_combo({
            "keys"              : "right",
            "on_keydown"        : function(e) { this.setKeyDown(e.keyCode); },
            "on_keyup"          : function(e) { this.setKeyUp(e.keyCode); },
            "this"              : this,
            "prevent_repeat"    : false
        });
        keypress.register_combo({
            "keys"              : "up",
            "on_keydown"        : function(e) { this.setKeyDown(e.keyCode); },
            "on_keyup"          : function(e) { this.setKeyUp(e.keyCode); },
            "this"              : this,
            "prevent_repeat"    : false
        });
        keypress.register_combo({
            "keys"              : "down",
            "on_keydown"        : function(e) { this.setKeyDown(e.keyCode); },
            "on_keyup"          : function(e) { this.setKeyUp(e.keyCode); },
            "this"              : this,
            "prevent_repeat"    : false
        });
        keypress.register_combo({
            "keys"              : "space",
            "on_keydown"        : function(e) { this.setKeyDown(e.keyCode); },
            "on_keyup"          : function(e) { this.setKeyUp(e.keyCode); },
            "this"              : this,
            "prevent_repeat"    : true
        });
    },
    setKeyDown: function(val){
        this.keys[val] = true;
    },
    setKeyUp: function(val){
        this.keys[val] = false;
    },
    determinePressedkeys: function()
    {
        if(this.keys[37]) this.pos.x--;//left
        if(this.keys[38]) this.pos.y--;//up
        if(this.keys[39]) this.pos.x++;//right
        if(this.keys[40]) this.pos.y++;//down
    },
    currentPos: function(){
        this.determinePressedkeys();
        return this.pos;
    },

    performPrimaryAction: function(){
        return this.keys[32];//space
    }
});