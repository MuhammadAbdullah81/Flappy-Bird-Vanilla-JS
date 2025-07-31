import './style.css'
import { background } from './entities'

export let hasStarted = true

function animationLoop() {

  background.update(hasStarted)

  requestAnimationFrame(animationLoop)
}

requestAnimationFrame(animationLoop)
