window.onload = setup;

var playerObj;
var moveSpeed = 10;
var weaponShots = [];
var fallingObj = [];

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
    switch(type){
        case "rect":
            ctx.fillRect(obj.getX(), obj.getY(), obj.getWidth(), obj.getHeight());
            break;
        case "circle":
            ctx.beginPath();
            ctx.arc(obj.getX(), obj.getY(), obj.getSize(), 0, 2 * Math.PI, false);
            ctx.fill();
            ctx.lineWidth = 5;
            ctx.strokeStyle = '#003300';
            ctx.stroke();
            break;
    }
}

function update(){
    gameArea.clear();
    drawObj("rect", playerObj);
    if(weaponShots.length >= 1){
        for(let tempCircle of weaponShots){
            tempCircle.update();
            drawObj("circle", tempCircle);
        }
    }
    if(fallingObj.length >= 1){
        for(let tempCircle of fallingObj){
            tempCircle.update();
            drawObj("circle", tempCircle);
        }
    }
    createFallingObj();
    clearObj();
}

function fireWeapon(){
    var centerX = playerObj.getX() + playerObj.getWidth() / 2;
    var centerY = playerObj.getY() - 30;
    var radius = 20;
    var tempCircle = new Circle(centerX, centerY, radius);
    weaponShots.push(tempCircle);
}

function clearObj(){
    if (weaponShots.length >= 1){
        for(let i = 0; i < weaponShots.length; i++){
            if (weaponShots[i].onScreen == false){
                weaponShots.splice(i,i);
            }
        }
    }
}

function createFallingObj(){
    var centerX = Math.random()*350;
    var centerY = -60;
    var radius = 30;
    var tempObj = new FallingCircle(centerX, centerY, radius);
    fallingObj.push(tempObj);
}


document.onkeydown = function() {
    switch (window.event.keyCode) {
        case 37: // LEFT
            playerObj.moveLeft(moveSpeed);
            break;
        case 39: // RIGHT
            playerObj.moveRight(moveSpeed);
            break;
        case 32: // SPACE
            fireWeapon();
            break;
    }
};