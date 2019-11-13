window.onload = setup;

var playerObj;

function setup(){
    playerObj = createElement(350/2-50/2, 550, 50, 60, "red", "player");
    gameArea.start();
    drawObj("rect", playerObj);
}

var gameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 350;
        this.canvas.height = 650;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.frameNo = 0;
        this.interval = setInterval(update, 20);
        },
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

function createElement(x, y, width, height, color, type){
    switch(type){
        case "player":
            return new Player(x, y, width, height, color);
            break;
    }
}

function drawObj(type, obj){
    ctx = gameArea.context;
    ctx.fillStyle = obj.getColor();
    if (type == "rect"){
        ctx.fillRect(obj.getX(), obj.getY(), obj.getWidth, obj.getHeight());
    }
}

function update(){

}