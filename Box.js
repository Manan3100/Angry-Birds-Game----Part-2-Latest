class Box extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
    this.image = loadImage("sprites/wood1.png");
  }
  display(){
    console.log(this.body.speed);
    
    if(this.body.speed<4.5){
      super.display();
    }
    else{
      push();
      World.remove(world, this.body)
      this.visiblity=this.visiblity-0.1
      tint(255, this.visiblity);
      image(this.image, this.body.position.x, this.body.position.y, this.width, this.height);
      pop();
    }
    
  }
};
