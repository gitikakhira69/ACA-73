class Planks extends Baseclass{   
    constructor(x,y,width,height){
        super(x,y,width,height)
        var option={
            isStatic:true
        }
        this.body = Bodies.rectangle(x,y,width,height,option)
        Composite.add(world,this.body)
    }
    display(){
        super.display()  
        var pos = this.body.position; 
        push();
        fill('rgb(0,171,240)')
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height);
        pop();               
    }    
}