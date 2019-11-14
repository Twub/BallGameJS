class FallingCircle{

    x;
    y;
    radius;
    color;

    constructor(x, y, radius){
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = "yellow";
    }

    getX(){
        return this.x;
    }

    getY(){
        return this.y;
    }

    getSize(){
        return this.radius;
    }

    getColor(){
        return this.color;
    }

    update(){

    }

}