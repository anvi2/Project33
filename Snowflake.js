class Snowflake{
    constructor(x , y , radius ){
        var options = {
            density: 0.0001,
            restitution : 1,
            friction : 0.5,
        }
        this.radius = (random(10,40));
        this.body = Bodies.circle(x,y,this.radius,options);
        this.image = loadImage("snow5.webp");

        World.add(world , this.body);

    }
    
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push ();
        translate(pos.x , pos.y);
        rotate (angle);
        imageMode (CENTER);
        image (this.image , 0,0,this.radius,this.radius);
        pop ();



    }
}