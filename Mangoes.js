class Mango {
    constructor(x,y,radius) {
      var options = {
          isStatic: true,
          restitution:0,
          friction:1
      }
      this.body = Bodies.rectangle(x,y,radius,options);
      this.radius = radius;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      
      fill("brown");
      circle(pos.x, pos.y, this.width, this.height);
    }
  };