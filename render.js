var renderableObject = Class.extend({
    init: function(){
        this.position = new Vector3(0,0,0);
        },

    draw: function(context)
    {}

});

var circle = renderableObject.extend({
    init:function () {
        this.position = new Vector3(0, 0, 0);
    },

    draw:function (context) {
        context.fillStyle = "rgb(255, 255, 255)";

        context.beginPath();
        context.arc(this.position.x, this.position.y, 5, 0, 2 * Math.PI);
        context.fill();
    }
});

function Vector3(x,y,z)
{
    this.x = x;
    this.y = y;
    this.z = z;
}

var RenderEngine = Class.extend({
    init: function(){
      this.renderObjects = new Array();
    },
    add: function(item){
            this.renderObjects.push(item);
    },
    remove: function(item){
        var index = this.renderObjects.indexOf(item);
        this.renderObjects.splice(index, 1);
    },
    draw: function(context){
        this.renderObjects.forEach(function(obj) {
            obj.draw(context);
        });
    }
});