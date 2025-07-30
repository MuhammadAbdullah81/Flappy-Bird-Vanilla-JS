import { Background } from "./classes"
import { canvas, ctx } from "./canvas"
import { GAME_ASSETS } from "./assets"

export const background = new Background({
    canvas: canvas,
    ctx: ctx,
    assets: GAME_ASSETS.background
})