class Stone{
    constructor(x,y,height,width)
    {
        var options={
        isStatic:false,
        restitution:0,
        friction:1,
        density:0.2,   
        }
    
        this.body =Bodies.rectangle(x,y,height,width,options);
        this.width = width;
        this.height = height;
        
        World.add(world, this.body);
      }
    display()
    {
      if(this.body.speed<3)
    {
      push();
      translate(this.body.position.x,this.body.position.y)
      rotate(this.body.angle);
      rectMode(CENTER);
      fill("red");
      rect(0,0, this.width, this.height);
      pop();
    }
   else{
   
    World.remove(world,this.body);
    push();
    pop();
   }
      
 

    }
  }