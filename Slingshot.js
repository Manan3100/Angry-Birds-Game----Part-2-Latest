class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        //Loading the images
        this.image1 = loadImage("sprites/sling1.png");
        this.image2 = loadImage("sprites/sling2.png");
        this.image3 = loadImage("sprites/sling3.png");
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }
    attach(body){
        this.sling.bodyA=body;

    }
    display(){
        image(this.image1, 200, 20)
        image(this.image2, 175, 20)
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            // Found stroke coluur by colorzilla in crome
            stroke(48, 23, 7);
            //to thickhen the rubber band when the bird is at right side
            if(pointA.x>200){
                strokeWeight(7);
                //created to line and attached them to the points
                line(pointA.x-25, pointA.y, pointB.x+20, pointB.y+7);
                line(pointA.x-20, pointA.y, pointB.x-20, pointB.y+15);
                image(this.image3, pointA.x-30, pointA.y-10, 10, 30);
            }
            //to thin the rubber band on the left side
            else{ strokeWeight(3);
                line(pointA.x-25, pointA.y, pointB.x+20, pointB.y+7);
                line(pointA.x-20, pointA.y, pointB.x-20, pointB.y+15);}
                image(this.image3, pointA.x-30, pointA.y-10, 10, 30);
        }
    }
    
}