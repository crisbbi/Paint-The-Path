var ball = new Ball();
var paths = [];

function setup() {
    createCanvas(500, 400);
    ball.createPhysics();
    paths.push(new Path());
}

function draw() {
    background(200);
    
    ball.display();
    ball.createCollisionPositions();
    ball.update(getHeighestPath(ball.position.x));
    ball.bounceFromGround();
    paths[0].drawPath();
    calculateCollisionPoint();
}

function getHeighestPath(x) {
    var heighest = height;
    // go along every line/path
    for (var i = 0; i < paths.length; i++) {
        // check whether path is within ball's x position
        if (paths[i].x1 <= x && x <= paths[i].x2) {
            // determine highest point of path
            if (paths[i].y1 < heighest) {
                heighest = paths[i].y1;
                if(paths[i].y2 < paths[i].y1){
                    heighest = paths[i].y2;
                }
            }
        }
    }
    return heighest;
}

function calculateCollisionPoint(){
    // calculate real collision point by transforming
    // x position of collision in percent (relative to horizontal line width)
    // and transform percentige (relative to vertical line height) to y position 
    var subtractedWidthRelativelToTotalWidth = (paths[0].x2 - ball.x2) / (paths[0].x2 - paths[0].x1); 
    var widthPercentOfTotalWidth = (subtractedWidthRelativelToTotalWidth / (paths[0].x2 - paths[0].x1)) * 100;
    var accordingHeightRelativeToTotalHeight = ((paths[0].y2 - paths[0].y1) * widthPercentOfTotalWidth) / 100;
    var realCollisionPoint = paths[0].y2 - accordingHeightRelativeToTotalHeight;
}
