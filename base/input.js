var Input = Class.extend({
    init: function(){
        this.pos = new Vector3(0,0,0);
        this.performprimaryaction = false;
    },
    currentPos: function(){
        return this.pos;
    },
    performPrimaryAction: function(){
        return this.performprimaryaction
    }
});