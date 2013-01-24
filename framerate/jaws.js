var JawsFrameMonitor = FrameMonitor.extend({
    init: function(){
        this._super();
    },
    currentFps: function(){
        return jaws.game_loop.fps;
    },
    gameTime: function(){
        return jaws.game_loop.tick_duration;
    },
    totalGameTime: function(){
        return jaws.game_loop.ticks;
    }
});