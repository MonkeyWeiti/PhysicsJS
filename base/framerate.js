var FrameMonitor = Class.extend({
    init: function(){
        this.gametime = 0;
        this.currentfps = 0;
        this.totalgametime = 0;
    },
    currentFps: function(){
        return this.currentfps;
    },
    gameTime: function(){
        return this.gametime;
    },
    totalGameTime: function(){
        return this.totalgametime;
    }
});