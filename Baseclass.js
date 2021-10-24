class Baseclass{
    constructor(x,y,w,h){
        var options={
            isStatic:true
        }
        this.body = Bodies.rectangle(x,y,width,height,options)
        this.width= w
        this.height = h
        Composite.add(world,this.body)
    }
    display(){
        var pos = this.body.position;
        push();
        fill(255)
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height);
        pop();
    }
}