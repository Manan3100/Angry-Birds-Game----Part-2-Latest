class Log extends BaseClass{
  constructor(x,y,height,angle){
    super(x,y,20,height,angle);
    this.image = loadImage("sprites/wood2.png");
    Matter.Body.setAngle(this.body, angle);
  }
  display(){
    console.log(this.body.speed);
    
    if(this.body.speed<4.5){
      super.display();
    }
    else{
      push();
      World.remove(world, this.body)
      this.visiblity=this.visiblity-1
      tint(255, this.visiblity);
      image(this.image, this.body.position.x, this.body.position.y);
      pop();
    }
    
  }
}