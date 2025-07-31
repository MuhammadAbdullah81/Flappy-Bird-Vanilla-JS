import { Background } from "./classes"
import { GAME_ASSETS } from "./assets"

export const background = new Background({
    assets: GAME_ASSETS['background'],
    cityAspectRatio: { h: 512, w: 288 },
    baseAspectRatio: { h: 112, w: 336 }
})
