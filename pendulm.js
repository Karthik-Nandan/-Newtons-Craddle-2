class Pendulum {
    constructor(x, y) {
      var options = {
          restitution:1,
          friction:0,
          inertia:Infinity,
          frictionAir:0.0 
      }
      this.body = Bodies.rectangle(x, y,40,40,options);
      this.x=x;
      this.y=y;
     
      World.add(world, this.body);
    }
    display(){
      var angle=this.body.angle;   
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      ellipseMode(CENTER);
      rotate(angle);
      noStroke();
      fill(255,215,0);
      ellipse(0, 0,60,60);
      pop();
    }
  }