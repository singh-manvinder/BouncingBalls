export class Ball {
    constructor(x, y, velX, velY, color, size, ctx) {
       this.x = x;
       this.y = y;
       this.velX = velX;
       this.velY = velY;
       this.color = color;
       this.size = size;
       this.ctx = ctx;
    }
    
    draw() {
       ctx.beginPath();
       ctx.fillStyle = this.color;
       ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
       ctx.fill();
    }
    
    update() {      
       if ((this.x + this.size) >= width) {
          this.velX = -(this.velX);
       }
 
       if ((this.x - this.size) <= 0) {
          this.velX = -(this.velX);
       }
 
       if ((this.y + this.size) >= height) {
          this.velY = -(this.velY);
       }
 
       if ((this.y - this.size) <= 0) {
          this.velY = -(this.velY);
       }
 
       this.x += this.velX;
       this.y += this.velY;      
    }
    
    collisionDetect() {     
       for (var j = 0; j < balls.length; j++) {
          if (!(this === balls[j])) {
             var dx = this.x - balls[j].x;
             var dy = this.y - balls[j].y;
             var distance = Math.sqrt(dx * dx + dy * dy);
 
             if (distance < this.size + balls[j].size) {
               balls[j].color = this.color = 'rgb(' + random(0, 255) + ',' + random(0, 255) + ',' + random(0, 255) +')';
             }
          }
       }
    }
    
 }