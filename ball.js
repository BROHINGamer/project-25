class Ball{
    constructor(x,y,radius){
        var options ={
            isStatic: true,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
           
    
        this.image=loadImage("paper.png");
        
      
    
    }
    display(){
        var pos=this.body.position;
       fill("red");
      
      
    }
   
}