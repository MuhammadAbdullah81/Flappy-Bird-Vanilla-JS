export class Background {

    constructor({
        assets,
        ctx,
        canvas
    }) {

        this.ctx = ctx
        this.canvas = canvas
        this.BACKGROUND = assets

        for (const asset in this.BACKGROUND) {
            this.BACKGROUND[asset].image = new Image()
            this.BACKGROUND[asset].image.src = this.BACKGROUND[asset].imgSrc
        }

        this.CITY_POSITION = {
            primary: {
                x: 0,
                y: 0
            },
            secondary: {
                x: this.#getSecondaryImageX('city'),
                y: 0
            }
        }

        this.BASE_POSITION = {
            primary: {
                x: 0,
                y: this.#getBaseY()
            },
            secondary: {
                x: this.#getSecondaryImageX('base'),
                y: this.#getBaseY()
            }
        }

    }

    #getBaseY() {
        return (this.canvas.height - this.BACKGROUND['base'].image.height)
    }

    #getSecondaryImageX(name) {
        return (this.BACKGROUND[name].image.width)
    }

    draw({ asset, position }) {

        this.ctx.drawImage(asset.image, position.primary.x, position.primary.y)

        this.ctx.drawImage(asset.image, position.secondary.x, position.secondary.y)

    }


    slide(assetPosition, X, speed = 2) {

        assetPosition.primary.x -= speed
        assetPosition.secondary.x -= speed

        if (assetPosition.primary.x < -X) {
            assetPosition.primary.x += (X * 2)
        } else if (assetPosition.secondary.x < -X) {
            assetPosition.secondary.x += (X * 2)
        }

    }


    update() {

        this.draw({
            asset: this.BACKGROUND['city'],
            position: this.CITY_POSITION
        })

        this.draw({
            asset: this.BACKGROUND['base'],
            position: this.BASE_POSITION
        })

        this.slide(this.CITY_POSITION, this.BACKGROUND['city'].image.width, 1)

        this.slide(this.BASE_POSITION, this.BACKGROUND['base'].image.width)
    }

}