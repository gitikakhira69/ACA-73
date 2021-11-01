class Balls{   
    constructor(x,y,radius){
        
        var option={
            isStatic:true
        }
        this.body = Bodies.circle(x,y,radius,option)
        this.radius = radius
        Composite.add(world,this.body)
    }
    display(){
       
        var pos = this.body.position; 
        push();
        fill('#F7819F')
        ellipseMode(CENTER);
        ellipse(pos.x,pos.y,this.radius);
        pop();               
    }    
}