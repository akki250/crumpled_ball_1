class Paper {
    constructor(x, y) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':3.0
      }
      this.body = Bodies.rectangle(x, y, 50, 50, options);
      this.width = 20;
      this.height = 20;
      
      World.add(world, this.body);
    }
    display(){
      
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      rectMode(CENTER);
    
      
      fill("red");
      rect(0,0, this.width, this.height);
      pop();
    }
  };


function keyPressed(){
    if (keycode === up_arrow){

      Matter.body.applyForce(paper.body,paperobject.body.position,{x:85,y:-85});


    }
};





