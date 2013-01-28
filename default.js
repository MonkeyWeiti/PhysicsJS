gameState = {
setup: function() { setup(); },
update: function() { update(); },
draw: function() { draw(); }
};

var canvas;
var inp;
var pos;
var frameMonitor;
var renderEngine;

function setup(){
	canvas = document.getElementById('drawingSpace');
	canvas.style.cursor = 'none';
    frameMonitor = new JawsFrameMonitor();
    inp = new JawsMouseInput();
    renderEngine = new RenderEngine();

}

function update(){
    pos = inp.currentPos();
    if(inp.performPrimaryAction()){
        var toAdd = new circle();
        toAdd.position = new Vector3(pos.x, pos.y, 0);
        renderEngine.add(toAdd);
    }
}

function draw(){
	if(canvas.getContext){
        var context = canvas.getContext('2d');
        context.clearRect(0,0, canvas.width, canvas.height);

        renderEngine.draw(context);

        context.fillStyle = "#000";
		context.fillText(frameMonitor.currentFps(),20,20);
		context.fillText(frameMonitor.gameTime(),20,40);
		context.fillText(frameMonitor.totalGameTime(),20,60);
        context.fillText('x:'+ pos.x + 'y:' + pos.y,20,80);
        context.fillText(inp.performPrimaryAction(),20,100);
        context.fillText(renderEngine.renderObjects.length,20,120);
    }
}
