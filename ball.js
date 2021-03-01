class Ball{
	constructor(x,y,r){
		var options={
			isStatic:false
	    }
		this.x=x;
		this.y=y;
		this.r=r;
		//this.image=loadImage("stone.png")
		this.body=Bodies.circle(this.x, this.y, this.r, options);
        
		World.add(world, this.body);
	}

	display(){
		var pos=this.body.position;	
		push()
		translate(pos.x,pos.y);
		rotate(this.body.angle);
		fill("red");
		(CENTER);
		ellipseMode(RADIUS);
		ellipse(0,0,this.r, this.r)
		pop()
    }
}