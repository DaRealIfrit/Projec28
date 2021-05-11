class Launcher{
    constructor(BodyA, BodyB, Stiffness, Length){
        var launcher_options={
            bodyA: BodyA,
            bodyB: BodyB,
            stifness: Stiffness,
            length: Length
        }
        this.pointB = pointB
        this.launcher = Constraint.create(launcher_options);
        World.add(world, this.sling);
    }
    attach(body){
        this.launcher.bodyA = body;
    }
    
    fly(){
        this.launcher.bodyA = null;
    }

    display(){
        var pointA = this.launcher.bodyA.position;
        var pointB = this.pointB;

        strokeWeight (5)
        line (pointA.x, pointA.y, pointB.x, pointB.y)
    }
    
}