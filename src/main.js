import { Ball } from './models/ball';
import { random } from './utility';

class MainProcess {
    constructor() {
        this.canvas = document.querySelector('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.width = this.canvas.width = window.innerWidth;
        this.height = this.canvas.height = window.innerHeight;
        this.balls = [];
    }
    start() {
        while (this.balls.length < 25) {
            let size = random(10, 20);
            let ball = new Ball(
                // ball position always drawn at least one ball width
                // away from the edge of the canvas, to avoid drawing errors
                random(0 + size, this.width - size),
                random(0 + size, this.height - size),
                random(-7, 7),
                random(-7, 7),
                'rgb(' + random(0, 255) + ',' + random(0, 255) + ',' + random(0, 255) + ')',
                size,
                this.ctx,
                this.width,
                this.height
            );

            this.balls.push(ball);
        }

        this.loop();
    }
    loop() {
        this.ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';
        this.ctx.fillRect(0, 0, this.width, this.height);

        for (let i = 0; i < this.balls.length; i++) {
            this.balls[i].draw();
            this.balls[i].update();
            this.balls[i].collisionDetect(this.balls);
        }

        requestAnimationFrame(this.loop.bind(this));
    }
}

new MainProcess().start();