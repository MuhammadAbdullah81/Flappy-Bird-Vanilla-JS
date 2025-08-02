import { canvas, ctx } from "../canvas"

export class Pipe {
    constructor({ assets, aspectRatio, speed = 100 }) {
        this.assets = assets
        this.aspectRatio = aspectRatio
        this.speed = speed
        this.positionPipeDown = {
            x: canvas.width + this.aspectRatio.w,
            y: -110
        }
        this.positionPipeUp = {
            x: this.positionPipeDown.x,
            y: (canvas.height - this.aspectRatio.h) + 110
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

    slide(deltaTime) {
        this.positionPipeDown.x -= (this.speed * deltaTime)
        this.positionPipeUp.x -= (this.speed * deltaTime)

        if (this.positionPipeDown.x < -this.aspectRatio.w) {
            this.positionPipeDown.x = this.positionPipeUp.x = canvas.width + this.aspectRatio.w
            this.getRandomHeight()
        }
    }

    getRandomHeight() {
        this.positionPipeDown.y = -110
        this.positionPipeUp.y = (canvas.height - this.aspectRatio.h + 110)

        let offSet = Math.floor((Math.random() * 45) + 40)
        const turn = Math.floor((Math.random() * 2) + 1)

        if (turn == 1) {
            this.positionPipeDown.y += offSet
            this.positionPipeUp.y += offSet
        } else {
            console.log(offSet)
            offSet += (offSet < 70) ? 100 : 0
            this.positionPipeDown.y -= offSet
            this.positionPipeUp.y -= offSet
        }

    }

    update(hasStarted, isAlive, deltaTime) {
        this.draw()
        if (hasStarted && isAlive) this.slide(deltaTime)
    }

    restart() {
        this.positionPipeDown = {
            x: canvas.width + this.aspectRatio.w,
            y: -110
        }
        this.positionPipeUp = {
            x: this.positionPipeDown.x,
            y: (canvas.height - this.aspectRatio.h) + 110
        }
    }

}