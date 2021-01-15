class Paper{
    constructor(){
        var options={
			isStatic:false,
			restitution:0.3,
			friction:0,
			density:1.2

			
			}
        this.body=Bodies.circle(100,30,30,options)
        World.add(world,this.body)
    }

    display(){
        var pos=this.body.position
        var angle=this.body.angle
        push()
        translate(pos.x,pos.y)
        rotate(angle)
        ellipseMode(RADIUS)
        fill("white");

        ellipse(pos.x, pos.y,30);
        pop(
        )

    }
}


