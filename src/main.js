import { Ball } from './models/ball';

class MainProcess {
    constructor() {
        this.canvas = document.querySelector('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.width = this.canvas.width = window.width;
        this.height = this.canvas.height = window.height;
        this.balls = [];
    }
    random(min, max) {
        var num = Math.floor(Math.random() * (max - min)) + min;
        return num;
    }
    start() {
        while (this.balls.length < 25) {
            var size = this.random(10, 20);
            var ball = new Ball(
                // ball position always drawn at least one ball width
                // away from the edge of the canvas, to avoid drawing errors
                random(0 + size, width - size),
                random(0 + size, height - size),
                random(-7, 7),
                random(-7, 7),
                'rgb(' + random(0, 255) + ',' + random(0, 255) + ',' + random(0, 255) + ')',
                size
            );

            this.balls.push(ball);
        }

        loop();
    }
    loop() {
        this.ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';
        ctx.fillRect(0, 0, width, height);

        for (var i = 0; i < this.balls.length; i++) {
            this.balls[i].draw();
            this.balls[i].update();
            this.balls[i].collisionDetect();
        }

        requestAnimationFrame(loop);
    }
}

new MainProcess().start();