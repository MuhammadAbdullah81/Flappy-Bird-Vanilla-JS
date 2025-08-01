import { ctx } from "../canvas"

export class Bird {
    constructor({ assets, aspectRatio }) {
        this.assets = assets
        this.aspectRatio = aspectRatio
        this.position = { x: 20, y: 10 }
        this.frameCounter = 0
        this.currentFrame = 0
        this.totalFrames = 3
        this.states = {
            isAlive: true,
            isFlappying: false
        }

        for (let asset in assets) {
            assets[asset].image = new Image()
            assets[asset].image.src = assets[asset].imgSrc
        }

        this.image = this.assets["birdDownFlap"].image
    }

    draw() {
        ctx.drawImage(this.image, this.position.x, this.position.y, this.aspectRatio.w, this.aspectRatio.h)
    }

    animate() {

        this.frameCounter++

        if (this.frameCounter % 3 == 0) {

            this.currentFrame++

            if (this.currentFrame == 1) {
                this.image = this.assets['birdMidFlap'].image
            }
            else if (this.currentFrame == 2) {
                this.image = this.assets['birdUpFlap'].image
            }
            else if (this.currentFrame == 3) {
                this.image = this.assets['birdDownFlap'].image
            }
            else {
                this.currentFrame = 0
            }
        }

    }

    gravity() {

        if (this.position.y < (400 - this.aspectRatio.h) && !this.states.isFlappying) {
            this.position.y += 5
        }
        else if (this.position.y >= (400 - this.aspectRatio.h)) {
            // this.states.isAlive = false
            this.position.y = (400 - this.aspectRatio.h)
        }

    }

    flap() {
        if (this.position.y > 5 && this.states.isAlive) this.position.y -= 7
    }

    update(hasStarted) {

        this.draw()

        if (hasStarted && this.states.isAlive) {
            this.animate()
            this.gravity()
        }
    }
}