class Cup{
    constructor(x,y,width,height){
        var options ={
            isStatic: true,
            
        }
           
    
        this.image=loadImage("dustbingreen.png");
       
       
    
    }
    display(){
        var pos=this.body.position;
       fill("red");
       rectMode(CENTER);
       rect(pos.x,pos.y,this.width,this.height);
    }
}