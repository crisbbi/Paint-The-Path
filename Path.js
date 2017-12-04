function Path(){
    this.x1 = 30;
    this.y1 = 150;
    this.x2 = 70;
    this.y2 = 160;

    this.drawPath = function(){
        line(this.x1, this.y1, this.x2, this.y2);
        //line(30, 70, 70, 70);
    }
}