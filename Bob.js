class Bob {
    constructor(x,y,radius){
    var options = {
        friction : 0.5,
        restitution : 0.3,
        density : 1.2
    }
    this.body = Bodies.circle(x,y,radius,options);
    this.radius = radius;
    //this.image = loadImage("Bob.png")
    World.add(world,this.body);
    }
    display(){
        fill("RED");
        ellipseMode(RADIUS);
        ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius);
        
    }
    }