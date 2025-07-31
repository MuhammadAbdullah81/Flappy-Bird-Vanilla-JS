import { ctx, canvas } from "./canvas"

export class Background {

    constructor({ assets, cityAspectRatio, baseAspectRatio }) {

        this.assets = assets

        for (let asset in assets) {
            assets[asset].image = new Image()
            assets[asset].image.src = assets[asset].imgSrc
        }

        this.cityPosition = {
            primary: { x: 0, y: 0 },
            secondary: { x: cityAspectRatio.w, y: 0 }
        }

        this.basePosition = {
            primary: { x: 0, y: (cityAspectRatio.h - baseAspectRatio.h) },
            secondary: { x: baseAspectRatio.w, y: (cityAspectRatio.h - baseAspectRatio.h) }
        }

    }

    draw({ image, position }) {

        ctx.drawImage(image, position.primary.x, position.primary.y)
        ctx.drawImage(image, position.secondary.x, position.secondary.y)

    }

    slide(position, X, speed = 2) {

        position.primary.x -= speed
        position.secondary.x -= speed

        if (position.primary.x < -X) 
        {
            position.primary.x += (X * 2)
        } 
        else if (position.secondary.x < -X) 
        {
            position.secondary.x += (X * 2)
        }

    }

    update(hasStarted) {

        this.draw({ image: this.assets['city'].image, position: this.cityPosition })
        this.draw({ image: this.assets['base'].image, position: this.basePosition })

        if (hasStarted) {

            this.slide(this.cityPosition, this.assets['city'].image.width, 1)
            this.slide(this.basePosition, this.assets['base'].image.width)

        }

    }

}