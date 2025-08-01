import { GAME_ASSETS } from "./assets"
import { Background } from "./classes/background"
import { Pipe } from "./classes/pipes"
import { Bird } from "./classes/bird"

export const city = new Background({
    assets: GAME_ASSETS.background.city,
    aspectRatio: { h: 512, w: 288 }
})

export const base = new Background({
    assets: GAME_ASSETS.background.base,
    aspectRatio: { h: 112, w: 336 },
    speed: 2
})

export const pipes = new Pipe({
    assets: GAME_ASSETS.pipes,
    aspectRatio: { w: 52, h: 320 }
})

export const bird = new Bird({
    assets: GAME_ASSETS.bird,
    aspectRatio: { h: 24, w: 34 }
})