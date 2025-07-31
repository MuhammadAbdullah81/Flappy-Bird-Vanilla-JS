import { ctx, canvas } from "./canvas"

export class Background {

    constructor({ assets, aspectRatio, speed = 1 }) {

        this.image = new Image()
        this.image.src = assets.imgSrc
        this.aspectRatio = aspectRatio
        this.speed = speed
        this.position = {
            primaryImage: {
                x: 0,
                y: (canvas.height - this.aspectRatio.h)
            },
            secondaryImage: {
                x: this.aspectRatio.w,
                y: (canvas.height - this.aspectRatio.h)
            }
        }

        console.log(this.position)
    }

    draw() {
        ctx.drawImage(this.image, this.position.primaryImage.x, this.position.primaryImage.y)
        ctx.drawImage(this.image, this.position.secondaryImage.x, this.position.secondaryImage.y)
    }

    slide() {

        this.position.primaryImage.x -= this.speed
        this.position.secondaryImage.x -= this.speed

        if (this.position.primaryImage.x < -this.aspectRatio.w) {
            this.position.primaryImage.x += (this.aspectRatio.w * 2)
        }
        else if (this.position.secondaryImage.x < -this.aspectRatio.w) {
            this.position.secondaryImage.x += (this.aspectRatio.w * 2)
        }

    }

    update(hasStarted) {
        this.draw()
        if (hasStarted) this.slide()
    }

}


export class Pipe {
    constructor({ assets, aspectRatio, speed = 2 }) {
        this.assets = assets
        this.aspectRatio = aspectRatio
        this.speed = speed
        this.positionPipeDown = {
            x: canvas.width + this.aspectRatio.w,
            y: 0
        }
        this.positionPipeUp = {
            x: this.positionPipeDown.x,
            y: canvas.height - this.aspectRatio.h
        }

        for (let asset in assets) {
            assets[asset].image = new Image()
            assets[asset].image.src = assets[asset].imgSrc
        }
    }

    draw() {

        ctx.drawImage(
            this.assets['pipeDown'].image,
            this.positionPipeDown.x,
            this.positionPipeDown.y,
            this.aspectRatio.w,
            this.aspectRatio.h
        )

        ctx.drawImage(
            this.assets['pipeUp'].image,
            this.positionPipeUp.x,
            this.positionPipeUp.y,
            this.aspectRatio.w,
            this.aspectRatio.h
        )
    }

    slide() {
        this.positionPipeDown.x -= this.speed
        this.positionPipeUp.x -= this.speed

        if (this.positionPipeDown.x < -this.aspectRatio.w) {
            this.positionPipeDown.x = this.positionPipeUp.x = canvas.width + this.aspectRatio.w
        }
    }

    update(hasStarted) {
        this.draw()
        if (hasStarted) this.slide()
    }

}


export class Bird {
    constructor({ assets, aspectRatio }) {
        this.assets = assets
        this.aspectRatio = aspectRatio
        this.position = { x: 20, y: 10 }
        this.frameCounter = 0
        this.currentFrame = 0
        this.totalFrames = 3

        for (let asset in assets) {
            assets[asset].image = new Image()
            assets[asset].image.src = assets[asset].imgSrc
        }

        this.image = this.assets["birdDownFlap"].image
    }

    draw() {

        ctx.drawImage(this.image, this.position.x, this.position.y)

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

        if (this.position.y < (400 - this.aspectRatio.h)) {
            this.position.y += 5
        } 
        else {
            this.position.y = (400 - this.aspectRatio.h)
        }

    }

    update(hasStarted) {

        this.draw()

        if (hasStarted) {
            this.animate()
            this.gravity()
        }
    }
}