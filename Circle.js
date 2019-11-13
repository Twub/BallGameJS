class Circle{
    
    x;
    y;
    size;
    color;

    constructor(x, y, size){
        this.x = x;
        this.y = y;
        this.size = size;
        this.color = "blue";
    }

    getX(){
        return this.x;
    }

    getY(){
        return this.y;
    }

    getSize(){
        return this.size;
    }

    getColor(){
        return this.color;
    }

    update(){
        this.y -= 5;
    }

    onScreen(){
        if (this.y <= -100) return false;
        return true;
    }
}