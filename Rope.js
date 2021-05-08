class Rope {
    constructor(bodyA,bodyB,offsetX,offsetY)
    {
        this.offsetX=offsetX
        this.offsetY=offsetY
        var Options = {
            bodyA:bodyA,
            
            pointB:{x:this.offsetX,y:this.offsetY}
        
        }
 this.rope =       Matter.Constraint.create(Options) 
 World.add(world,this.rope);
    }
    display(){
line(this.rope.bodyA.position.x,this.rope.bodyA.position.y,this.rope.pointB.x,this.rope.pointB.y);
    }
        
    }

