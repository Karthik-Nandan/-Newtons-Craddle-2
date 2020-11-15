class Sling{
    constructor(bodyA,bodyB,offsetX,offsetY)
    {

        this.offsetX=offsetX
        this.offsetY=offsetY
        var options={
            bodyA: bodyA,
            bodyB: bodyB,
            pointB:{x:this.offsetX,y:this.offsetY}
        }
        this.rope=Constraint.create(options);
        World.add(world,this.rope);
    }
    display(){
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;
        strokeWeight(4);
        var PX = pointA.x;
        var PY = pointA.y;

        var SX = pointB.x+this.offsetX;
        var SY = pointB.y+this.offsetY;
        line(PX, PY, SX, SY);
    }
}