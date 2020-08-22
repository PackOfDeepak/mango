class Stone{
    constructor(x, y,radius) {
        var options = {
            'restitution':0,
            'friction':1.0,
            'density':1.2
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = this.radius;
        
        
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        var pos = this.body.position;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        
        circle( pos.x, pos.y, 0, this.radius);
        pop();
      }
}