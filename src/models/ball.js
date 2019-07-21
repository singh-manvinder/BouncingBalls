import {random} from '../utility'

export class Ball {
    constructor(x, y, velX, velY, color, size, ctx,width, height) {
       this.x = x;
       this.y = y;
       this.velX = velX;
       this.velY = velY;
       this.color = color;
       this.size = size;
       this.ctx = ctx;
       this.width = width,
       this.height = height
    }
    
    draw() {
       this.ctx.beginPath();
       this.ctx.fillStyle = this.color;
       this.ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
       this.ctx.fill();
    }
    
    update() {      
       if ((this.x + this.size) >= this.width) {
          this.velX = -(this.velX);
       }
 
       if ((this.x - this.size) <= 0) {
          this.velX = -(this.velX);
       }
 
       if ((this.y + this.size) >= this.height) {
          this.velY = -(this.velY);
       }
 
       if ((this.y - this.size) <= 0) {
          this.velY = -(this.velY);
       }
 
       this.x += this.velX;
       this.y += this.velY;      
    }
    collisionDetect(balls) {     
       for (let j = 0; j < balls.length; j++) {
          if (!(this === balls[j])) {
             let dx = this.x - balls[j].x;
             let dy = this.y - balls[j].y;
             let distance = Math.sqrt(dx * dx + dy * dy);
 
             if (distance < this.size + balls[j].size) {
               balls[j].color = this.color = 'rgb(' + random(0, 255) + ',' + random(0, 255) + ',' + random(0, 255) +')';
             }
          }
       }
    }
    
 }