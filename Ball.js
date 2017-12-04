function Ball(){

    // define variables
    this.x = 50;//(500 * Math.random(0.07, 0.93));
    this.y = 50;
    this.diameter = 20;
    this.position;
    this.velocity;
    this.acceleration;
    this.ballTop;
    this.ballLeft;
    this.ballRight;
    this.ballBottom;
    this.h;

    this.createCollisionPositions = function(){
        this.ballTop = createVector(this.x, (this.y - (this.diameter / 2)));
        this.ballLeft = createVector((this.x - (this.diameter / 2)), this.y);
        this.ballRight = createVector((this.x + (this.diameter / 2)), this.y);
        this.ballBottom = createVector(this.x, (this.y + (this.diameter / 2)));
    };

    this.createPhysics = function(){
        this.position = createVector(this.x, this.y);
        this.velocity = createVector(0, 0);
        this.acceleration = createVector(0, 0.9);
    };
    
    this.display = function(){
        ellipse(this.position.x, this.position.y, 20, 20);
        
    };

    // update ball's position according to acceleration and velocity
    this.update = function(h){
        // ball movement
        this.velocity.add(this.acceleration);
        this.position.add(this.velocity);
        this.h = h;
    };

    this.bounceFromGround = function(){
        // as long as moving
        if((this.position.y + 10) >= this.h){
            this.velocity.y = this.velocity.y * -1;
            this.position.y = this.h - 10;
        }
        // "stop": stop ball when it's actually restarting 
        if((this.position.y + 9) > this.h){
            this.velocity.y = 0;
            this.acceleration.y = 0;
        }  
        
    };
}