class Cannon{
    constructor(x, y, width, height, angle){
        this. x = x;
        this. y = y;
        this. width = width;
        this.height = height;
        this.angle = angle;
    }
    
    display(){
        if(keyIsDown(RIGHT_ARROW)&& this.angle<0.3746018366025522){
            this.angle += 0.02
            console.log(this.angle)
        }
        if(keyIsDown(LEFT_ARROW)&& this.angle>-0.8853981633974484){
            this.angle += -0.02
            console.log(this.angle)
        }

        
        
        fill("green");
        push();
        translate(this.x, this.y);
        rotate(this.angle);
        rect(-10, -20, this.width, this.height);
        noFill();
        pop();
        arc(this.x -30, this.y +90, 140, 200, PI, TWO_PI);
    }
}