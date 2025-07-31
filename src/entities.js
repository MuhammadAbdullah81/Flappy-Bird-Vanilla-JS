import { Background } from "./classes"
import { GAME_ASSETS } from "./assets"

export const city = new Background({
    assets: GAME_ASSETS.background.city,
    aspectRatio: { h: 512, w: 288 }
})

export const base = new Background({
    assets: GAME_ASSETS.background.base,
    aspectRatio: { h: 112, w: 336 }
})
