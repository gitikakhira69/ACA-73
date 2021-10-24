class Ground extends Baseclass {   
        constructor(x,y,width,height){
            super()
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
            fill("brown")
            rectMode(CENTER);
            rect(pos.x,pos.y,this.width,this.height);
            pop();          
        }    
}