class Ground extends Baseclass {   
        constructor(x,y,width,height){
            super(x,y,width,height)
            this.width =width
            this.height = height

        }
        display(){
            super.display()
            var pos = this.body.position;         
            push()
            fill("brown")
            rectMode(CENTER);
            rect(pos.x,pos.y,this.width,this.height);
            pop()
        }
        
}