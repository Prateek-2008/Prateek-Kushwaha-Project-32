class Block {
    constructor(x,y){
       //var options= {
       //  //  isStatic:true
       //}
  
        this.body=Bodies.rectangle(x,y,40,60);//,options);
       
        this.width=40;
        this.height=60;
        World.add(world,this.body)
    }
     
    display(){
        var angle= this.body.angle;
        push();
        translate(this.body.position.x,this.body.position.y)
        rotate(angle)
        rectMode(CENTER);
        fill("blue"); 
        rect(0,0,this.width,this.height);
        pop();
    }
  }
  