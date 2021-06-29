class Snow{
    constructor(x,y,radius){
        var options = {
            density: 0.0001,
            restitution:1,
            friction : 0.5,
        }
    this.radius = (random(20,10));
    this.body = Bodies.circle(x,y,radius,options);
    //this.image = loadImage("sprites/snow4.webp");


    World.add (world,this.body);
}


display(){
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x , pos.y);
    rotate (angle);
    fill (255);
    stroke(255);
    //strokeWeight(this.radius);
    ellipseMode (CENTER);
    ellipse( 0,0, this.radius ,this.radius);
    pop();



}
}
