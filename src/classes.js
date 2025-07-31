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
                y: (this.aspectRatio.h - this.image.height)
            },
            secondaryImage: {
                x: this.image.width,
                y: (this.aspectRatio.h - this.image.height)
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

    update() {
        this.draw()
        this.slide()
    }

}